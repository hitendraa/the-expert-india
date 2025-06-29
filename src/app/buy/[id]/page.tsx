"use client"

import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Upload, 
  CreditCard, 
  ShoppingCart, 
  FileText,
  Star,
  Shield,
  Folder,
  X
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { toast } from 'sonner'
import Script from 'next/script'
import { createRazorpayOrder, verifyRazorpayPayment } from '@/lib/razorpay'

interface Service {
  _id: string
  name: string
  description: string
  docsRequired: string[]
  price: number
  sellPrice?: number
  isActive: boolean
}
// Razorpay types for type safety
type RazorpayOptions = {
  key: string | undefined;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (paymentResponse: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => void;
  prefill: {
    name: string;
    email: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
};

// (no-op to fix lint error: Expected an assignment or function call and instead saw an expression)

interface DocumentUpload {
  name: string
  file?: File
  uploaded: boolean
  selectedDocumentId?: string // ID of selected document from library
}

interface UserDocument {
  _id: string
  filename: string
  originalName: string
  mimetype: string
  size: number
  category: string
  uploadDate: string
  isActive: boolean
}

export default function BuyServicePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const serviceId = params.id as string
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [documents, setDocuments] = useState<DocumentUpload[]>([])
  const [userDocuments, setUserDocuments] = useState<UserDocument[]>([])
  const [notes, setNotes] = useState('')
  const [processing, setProcessing] = useState(false)
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)
  const [isDocumentLibraryOpen, setIsDocumentLibraryOpen] = useState(false)
  const [selectedDocumentIndex, setSelectedDocumentIndex] = useState<number | null>(null)
  const [uploadingIndexes, setUploadingIndexes] = useState<Set<number>>(new Set())

  // Ensure Razorpay loaded state is correct even on client-side navigation
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as typeof globalThis & { Razorpay?: unknown }).Razorpay && !razorpayLoaded) {
      setRazorpayLoaded(true)
    }
  }, [razorpayLoaded])

  const steps = [
    { number: 1, title: 'Service Details', description: 'Review service information' },
    { number: 2, title: 'Upload Documents', description: 'Upload required documents' },
    { number: 3, title: 'Review & Notes', description: 'Review order and add notes' },
    { number: 4, title: 'Payment', description: 'Complete your payment' }
  ]

  const fetchService = useCallback(async () => {
    try {
      const response = await fetch(`/api/services/${serviceId}`)
      if (response.ok) {
        const data = await response.json()
        setService(data)
        // Initialize documents array
        setDocuments(data.docsRequired.map((doc: string) => ({
          name: doc,
          uploaded: false
        })))
      } else {
        toast.error('Service not found')
        router.push('/dashboard')
      }
    } catch {
      toast.error('Error fetching service')
      router.push('/dashboard')
    } finally {
      setLoading(false)
    }
  }, [serviceId, router])

  const fetchUserDocuments = useCallback(async () => {
    try {
      const response = await fetch('/api/documents')
      if (response.ok) {
        const docs = await response.json()
        setUserDocuments(docs)
      }
    } catch {
      // Silent fail
    }
  }, [])

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/')
      return
    }

    if (serviceId) {
      fetchService()
      fetchUserDocuments()
    }
  }, [session, status, serviceId, router, fetchService, fetchUserDocuments])

  const handleFileUpload = async (index: number, file: File) => {
    if (!file) return
    
    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB')
      return
    }
    
    setUploadingIndexes(prev => new Set(prev).add(index))
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('category', documents[index].name)
      const response = await fetch('/api/documents', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        const uploadedDocument = await response.json();
        const docObj = uploadedDocument.document || uploadedDocument;
        setUserDocuments(prevDocs => [
          ...prevDocs,
          {
            ...docObj,
            size: Number(docObj.size) || (file?.size ?? 0),
            originalName: docObj.originalName || file?.name || 'Unknown',
          }
        ]);
        const updatedDocuments = [...documents];
        updatedDocuments[index] = {
          ...updatedDocuments[index],
          uploaded: true,
          file: file,
          selectedDocumentId: docObj._id
        };
        setDocuments(updatedDocuments);
        toast.success(`${file.name} uploaded successfully`);
      } else {
        const err = await response.json();
        toast.error(err.error || 'Upload failed');
      }
    } catch {
      toast.error('Upload failed. Please try again.')
    } finally {
      setUploadingIndexes(prev => {
        const newSet = new Set(prev)
        newSet.delete(index)
        return newSet
      })
    }
  }

  const handleDocumentSelect = (index: number, documentId: string) => {
    const updatedDocuments = [...documents]
    const selectedDoc = userDocuments.find(doc => doc._id === documentId)
    if (selectedDoc) {
      updatedDocuments[index] = {
        ...updatedDocuments[index],
        uploaded: true,
        selectedDocumentId: documentId,
        file: undefined // Clear any previous file upload
      }
      setDocuments(updatedDocuments)
      toast.success(`${selectedDoc.originalName} selected from library`)
    }
    setIsDocumentLibraryOpen(false)
  }

  const handleRemoveDocument = (index: number) => {
    const updatedDocuments = [...documents]
    updatedDocuments[index] = {
      name: updatedDocuments[index].name,
      uploaded: false,
      file: undefined,
      selectedDocumentId: undefined
    }
    setDocuments(updatedDocuments)
    toast.success('Document removed')
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  const handleBuyNow = async () => {
    if (!service || !session || !razorpayLoaded) {
      if (!razorpayLoaded) {
        toast.error('Payment system is loading. Please try again.')
      }
      return
    }

    setProcessing(true)
    try {
      const finalPrice = service.sellPrice || service.price
      // Create Razorpay order
      const orderData = await createRazorpayOrder({
        amount: finalPrice,
        currency: 'INR',
        serviceId: service._id,
        serviceName: service.name,
      })

      // Prepare user details
      const userDetails = {
        name: session.user?.name || '',
        email: session.user?.email || '',
        phone: '', // Could be added to user details form
      }

      // Defensive: ensure all uploaded docs have selectedDocumentId (should already be set, but just in case)
      const fixedDocuments = documents.map(doc => {
        if (doc.uploaded && !doc.selectedDocumentId && doc.file) {
          let match = userDocuments.find(
            d => d.originalName === doc.file?.name && d.category === doc.name
          );
          if (!match) {
            match = userDocuments.find(
              d => d.filename === doc.file?.name && d.category === doc.name
            );
          }
          if (!match) {
            match = userDocuments.find(
              d => d.originalName === doc.file?.name
            );
          }
          if (!match) {
            match = userDocuments.find(
              d => d.filename === doc.file?.name
            );
          }
          if (!match && doc.file) {
            match = userDocuments.find(
              d => d.size === doc.file?.size && d.category === doc.name
            );
          }
          if (!match && doc.file) {
            match = userDocuments.find(
              d => d.size === doc.file?.size
            );
          }
          if (match) {
            return { ...doc, selectedDocumentId: match._id }
          }
        }
        return doc
      });

      // Prepare document names and IDs for verification
      const documentNames = fixedDocuments
        .filter(doc => doc.uploaded)
        .map(doc => {
          if (doc.selectedDocumentId) {
            const selectedDoc = userDocuments.find(d => d._id === doc.selectedDocumentId)
            if (selectedDoc) {
              return `${doc.name} (Upload: ${selectedDoc.originalName})`
            } else if (doc.file) {
              return `${doc.name} (Upload: ${doc.file.name})`
            } else {
              return `${doc.name} (Unknown source)`
            }
          } else if (doc.file) {
            return `${doc.name} (Upload: ${doc.file.name})`
          } else {
            return `${doc.name} (Unknown source)`
          }
        })

      // Include ALL documents that have a selectedDocumentId (both uploaded and from library)
      // Send as array of ObjectId-like strings (backend expects valid ObjectId strings)
      const documentIds = fixedDocuments
        .filter(doc => doc.uploaded && doc.selectedDocumentId)
        .map(doc => {
          // Defensive: ensure it's a string (ObjectId string)
          // Most likely always a string, but fallback to String()
          return typeof doc.selectedDocumentId === 'string'
            ? doc.selectedDocumentId
            : String(doc.selectedDocumentId);
        })

      // ...existing code...

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'The Expert India',
        description: `Payment for ${service.name}`,
        order_id: orderData.orderId,
        handler: async function (paymentResponse: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
          try {
            const verificationResult = await verifyRazorpayPayment({
              razorpay_order_id: orderData.orderId,
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_signature: paymentResponse.razorpay_signature,
              serviceId: service._id,
              amount: finalPrice,
              userDetails,
              documents: documentNames,
              documentIds: documentIds,
            })
            if (verificationResult.success) {
              toast.success('Payment successful! Order placed.')
              router.push(`/success?orderId=${verificationResult.orderId}&serviceName=${encodeURIComponent(service.name)}`)
            } else {
              toast.error('Payment verification failed. Please contact support.')
            }
          } catch {
            toast.error('Payment verification failed. Please contact support.')
          }
        },
        prefill: {
          name: session.user?.name || '',
          email: session.user?.email || '',
        },
        theme: {
          color: '#059669',
        },
        modal: {
          ondismiss: function() {
            setProcessing(false)
          }
        }
      };

      type RazorpayType = {
        open: () => void;
        on: (event: string, callback: (response: unknown) => void) => void;
      };
      const RazorpayConstructor = (window as typeof window & { Razorpay: new (options: RazorpayOptions) => RazorpayType }).Razorpay;
      const razorpay = new RazorpayConstructor(options);
      razorpay.on('payment.failed', function () {
        toast.error('Payment failed. Please try again.');
        setProcessing(false);
      });
      razorpay.open();
    } catch {
      toast.error('Failed to initiate payment. Please try again.')
      setProcessing(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <div className="text-lg">Loading service...</div>
          </div>
        </div>
      </div>
    )
  }

  if (!service) {
    return null
  }

  const progress = (currentStep / 4) * 100
  const finalPrice = service.sellPrice || service.price

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" onClick={() => router.push('/dashboard')} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        
        <h1 className="text-3xl font-bold mb-2">Purchase Service</h1>
        <p className="text-muted-foreground">Complete your purchase in a few simple steps</p>
      </div>

      {/* Progress Bar */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Step {currentStep} of 4</h3>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="mb-4" />
          <div className="flex justify-between">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className={`flex flex-col items-center text-center ${
                  step.number <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  step.number <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  {step.number < currentStep ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    step.number
                  )}
                </div>
                <div className="text-xs font-medium">{step.title}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Service Details
            </CardTitle>
            <CardDescription>Review the service you&apos;re about to purchase</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium">What&apos;s Included:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Professional service delivery
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Expert consultation
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Document processing
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Ongoing support
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {service.sellPrice && service.sellPrice < service.price ? (
                          <>
                            <span className="text-3xl font-bold text-green-600">
                              ₹{service.sellPrice.toLocaleString()}
                            </span>
                            <span className="text-lg text-muted-foreground line-through">
                              ₹{service.price.toLocaleString()}
                            </span>
                          </>
                        ) : (
                          <span className="text-3xl font-bold">
                            ₹{service.price.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {service.sellPrice && service.sellPrice < service.price && (
                        <Badge variant="destructive" className="mb-2">
                          {Math.round(((service.price - service.sellPrice) / service.price) * 100)}% OFF
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Shield className="h-4 w-4 mr-2 text-green-600" />
                        100% Secure Payment
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 mr-2 text-yellow-500" />
                        Expert Service
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Money Back Guarantee
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
  <Card className="overflow-hidden">
    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
      <CardTitle className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Upload className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Upload Documents</h2>
          <p className="text-sm text-muted-foreground font-normal mt-1">
            Secure document upload with library integration
          </p>
        </div>
      </CardTitle>
    </CardHeader>
    
    <CardContent className="p-6">
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Upload Progress
          </span>
          <span className="text-sm text-gray-500">
            {documents.filter(doc => doc.uploaded).length} of {documents.length} completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(documents.filter(doc => doc.uploaded).length / documents.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Documents grid */}
      <div className="grid gap-4 md:gap-6">
        {documents.map((doc, index) => (
          <div key={index} className="group relative">
            {/* Document card */}
            <div className={`
              relative border-2 rounded-xl p-6 transition-all duration-200 ease-in-out
              ${doc.uploaded 
                ? 'border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-sm' 
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
              }
            `}>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`
                    p-3 rounded-lg transition-colors duration-200
                    ${doc.uploaded 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                    <p className="text-sm text-gray-500">Required document</p>
                  </div>
                </div>

                {doc.uploaded && (
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="default" 
                      className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {doc.selectedDocumentId ? 'From Library' : 'Uploaded'}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveDocument(index)}
                      className="h-8 w-8 p-0 text-gray-400 hover:text-red-500 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Content */}
              {doc.uploaded ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white/70 border border-green-200 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-800">
                        Document Ready
                      </p>
                      <p className="text-xs text-green-600">
                        {doc.selectedDocumentId 
                          ? userDocuments.find(d => d._id === doc.selectedDocumentId)?.originalName
                          : doc.file?.name
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Upload options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Library selection */}
                    <Dialog open={isDocumentLibraryOpen && selectedDocumentIndex === index} onOpenChange={(open) => {
                      setIsDocumentLibraryOpen(open)
                      if (open) setSelectedDocumentIndex(index)
                    }}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="h-auto p-4 border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="flex flex-col items-center gap-2">
                            <Folder className="h-5 w-5 text-blue-500" />
                            <span className="text-sm font-medium">Select from Library</span>
                            <span className="text-xs text-gray-500">Choose existing document</span>
                          </div>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader className="pb-4 border-b">
                          <DialogTitle className="text-xl">Document Library</DialogTitle>
                          <p className="text-sm text-gray-600">Select a document for: {doc.name}</p>
                        </DialogHeader>
                        <div className="py-4">
                          {userDocuments.length === 0 ? (
                            <div className="text-center py-12">
                              <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <FileText className="h-8 w-8 text-gray-400" />
                              </div>
                              <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
                              <p className="text-gray-600 mb-4">Your document library is empty</p>
                              <Button 
                                variant="outline" 
                                onClick={() => window.open('/documents', '_blank')}
                                className="gap-2"
                              >
                                <Folder className="h-4 w-4" />
                                Manage Documents
                              </Button>
                            </div>
                          ) : (
                            <div className="grid gap-3">
                              {userDocuments.map((userDoc) => (
                                <Card 
                                  key={userDoc._id} 
                                  className="hover:shadow-md transition-all duration-200 cursor-pointer border hover:border-blue-300" 
                                  onClick={() => handleDocumentSelect(index, userDoc._id)}
                                >
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-blue-100 rounded-lg">
                                          <FileText className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                          <h4 className="font-medium text-gray-900">{userDoc.originalName}</h4>
                                          <div className="flex items-center gap-3 mt-1">
                                            <Badge variant="secondary" className="text-xs">
                                              {userDoc.category}
                                            </Badge>
                                            <span className="text-xs text-gray-500">
                                              {(userDoc.size / 1024 / 1024).toFixed(2)} MB
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <Button size="sm" className="gap-1">
                                        <CheckCircle className="h-3 w-3" />
                                        Select
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* File upload */}
                    <div className="relative">
                      <Input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            handleFileUpload(index, file)
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        disabled={uploadingIndexes.has(index)}
                      />
                      <div className={`
                        h-full p-4 border-2 border-dashed rounded-lg transition-all duration-200 flex flex-col items-center justify-center gap-2
                        ${uploadingIndexes.has(index) 
                          ? 'border-blue-400 bg-blue-50' 
                          : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                        }
                      `}>
                        {uploadingIndexes.has(index) ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent" />
                            <span className="text-sm font-medium text-blue-600">Uploading...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="h-5 w-5 text-green-500" />
                            <span className="text-sm font-medium">Upload New File</span>
                            <span className="text-xs text-gray-500">Click or drag file here</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* File format info */}
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <div className="p-1 bg-gray-200 rounded">
                      <FileText className="h-3 w-3 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-600">
                      <strong>Accepted formats:</strong> PDF, JPG, PNG, DOC, DOCX • <strong>Max size:</strong> 10MB
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Important notes section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg mt-0.5">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Important Guidelines</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-blue-800">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Ensure documents are clear and readable</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-800">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Upload recent and valid documents</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-blue-800">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Documents are securely encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-800">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>You can upload documents later if needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Review & Notes
            </CardTitle>
            <CardDescription>Review your order and add any special notes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-medium">₹{finalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documents:</span>
                    <span className="font-medium">
                      {documents.filter(doc => doc.uploaded).length} of {documents.length} uploaded
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>₹{finalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-sm font-medium">
                  Special Notes (Optional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Add any special instructions or notes for our team..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2"
                  rows={5}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment
            </CardTitle>
            <CardDescription>Complete your payment to finalize the order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Payment Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>{service.name}</span>
                    <span>₹{finalPrice.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Amount:</span>
                    <span>₹{finalPrice.toLocaleString()}</span>
                  </div>
                </div>                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-blue-900 mb-2">🔒 Secure Payment</h4>
                  <p className="text-sm text-blue-800">
                    Your payment is secured by Razorpay with 256-bit SSL encryption. 
                    We support all major payment methods including UPI, cards, and net banking.
                  </p>
                </div>
              </div>              <div>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-3">Powered by Razorpay</h4>
                    <div className="space-y-2">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">💳 Credit/Debit Cards</span>
                          <span className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</span>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">📱 UPI</span>
                          <span className="text-sm text-muted-foreground">PhonePe, GPay, Paytm</span>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">🏦 Net Banking</span>
                          <span className="text-sm text-muted-foreground">All major banks</span>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">💰 Wallets</span>
                          <span className="text-sm text-muted-foreground">PayTM, FreeCharge</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                        <Shield className="h-3 w-3" />
                        <span>256-bit SSL secured</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="flex gap-2">
          {currentStep < 4 ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleBuyNow}
              disabled={
                processing ||
                !razorpayLoaded ||
                !documents.every(doc => doc.uploaded)
              }
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              {processing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Processing Payment...
                </>
              ) : !razorpayLoaded ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Loading Payment...
                </>
              ) : !documents.every(doc => doc.uploaded) ? (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Upload all required documents to enable payment
                </>
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay ₹{finalPrice.toLocaleString()}
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Razorpay Script */}
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRazorpayLoaded(true)}
        onError={() => {
          toast.error('Payment system failed to load. Please refresh the page.')
        }}
      />
      {/* CLOSE MAIN CONTAINER */}
    </div>
  )
}
