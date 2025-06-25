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
    } catch (error) {
      console.error('Error fetching service:', error)
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
    } catch (error) {
      console.error('Error fetching user documents:', error)
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
        const uploadedDocument = await response.json()
        console.log('File uploaded successfully:', uploadedDocument)
        
        const updatedDocuments = [...documents]
        updatedDocuments[index] = {
          ...updatedDocuments[index],
          uploaded: true,
          file: file,
          selectedDocumentId: uploadedDocument._id // Store the uploaded document ID
        }
        setDocuments(updatedDocuments)
        console.log('Updated documents state after upload:', updatedDocuments)
        toast.success(`${file.name} uploaded successfully`)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
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

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'The Expert India',
        description: `Payment for ${service.name}`,
        order_id: orderData.orderId,
        handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {          try {            // Prepare document names and IDs for verification
            const documentNames = documents
              .filter(doc => doc.uploaded)
              .map(doc => {
                if (doc.file && doc.selectedDocumentId) {
                  // File was uploaded during buy process
                  return `${doc.name} (Upload: ${doc.file?.name || doc.name})`
                } else if (!doc.file && doc.selectedDocumentId) {
                  // Document was selected from library
                  const selectedDoc = userDocuments.find(d => d._id === doc.selectedDocumentId)
                  return `${doc.name} (Library: ${selectedDoc?.originalName || doc.name})`
                } else {
                  // Fallback for any edge cases
                  return `${doc.name} (Unknown source)`
                }              })

            // Include ALL documents that have a selectedDocumentId (both uploaded and from library)
            const documentIds = documents
              .filter(doc => doc.uploaded && doc.selectedDocumentId)
              .map(doc => doc.selectedDocumentId!)

            console.log('Debug payment verification:')
            console.log('All documents state:', documents)
            console.log('Filtered uploaded documents:', documents.filter(doc => doc.uploaded))
            console.log('Document names to send:', documentNames)
            console.log('Document IDs to send:', documentIds)
            console.log('Documents with selectedDocumentId:', documents.filter(doc => doc.selectedDocumentId))

            // Verify payment
            const verificationResult = await verifyRazorpayPayment({
              razorpay_order_id: orderData.orderId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
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
          } catch (error) {
            console.error('Payment verification error:', error)
            toast.error('Payment verification failed. Please contact support.')
          }
        },
        prefill: {
          name: session.user?.name || '',
          email: session.user?.email || '',
        },
        theme: {
          color: '#059669', // green-600
        },
        modal: {
          ondismiss: function() {
            setProcessing(false)
          }
        }
      }

      const razorpay = new (window as unknown as { Razorpay: new (options: unknown) => { open: () => void; on: (event: string, callback: (response: unknown) => void) => void } }).Razorpay(options)
      
      razorpay.on('payment.failed', function (response: unknown) {
        const errorResponse = response as { error: unknown }
        console.error('Payment failed:', errorResponse.error)
        toast.error('Payment failed. Please try again.')
        setProcessing(false)
      })

      razorpay.open()
    } catch (error) {
      console.error('Error initiating payment:', error)
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Documents
            </CardTitle>
            <CardDescription>Upload the required documents for your service</CardDescription>
          </CardHeader>          <CardContent>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="font-medium">{doc.name}</Label>
                    {doc.uploaded && (
                      <div className="flex items-center gap-2">
                        <Badge variant="default">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {doc.selectedDocumentId ? 'From Library' : 'Uploaded'}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleRemoveDocument(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {doc.uploaded ? (
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <div className="flex items-center text-green-800">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {doc.selectedDocumentId 
                            ? userDocuments.find(d => d._id === doc.selectedDocumentId)?.originalName
                            : doc.file?.name
                          } ready for submission
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Dialog open={isDocumentLibraryOpen && selectedDocumentIndex === index} onOpenChange={(open) => {
                          setIsDocumentLibraryOpen(open)
                          if (open) setSelectedDocumentIndex(index)
                        }}>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1">
                              <Folder className="h-4 w-4 mr-2" />
                              Select from Library
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[600px] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Select Document from Library</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-3">
                              {userDocuments.length === 0 ? (
                                <div className="text-center py-8">
                                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                  <p className="text-gray-600">No documents in your library</p>
                                  <Button 
                                    variant="outline" 
                                    className="mt-2"
                                    onClick={() => window.open('/documents', '_blank')}
                                  >
                                    Go to Document Library
                                  </Button>
                                </div>
                              ) : (
                                userDocuments.map((userDoc) => (
                                  <Card key={userDoc._id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleDocumentSelect(index, userDoc._id)}>
                                    <CardContent className="p-4">
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                          <FileText className="h-8 w-8 text-blue-500" />
                                          <div>
                                            <h4 className="font-medium">{userDoc.originalName}</h4>
                                            <p className="text-sm text-gray-600">{userDoc.category}</p>
                                            <p className="text-xs text-gray-500">
                                              {(userDoc.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                          </div>
                                        </div>
                                        <Button size="sm">Select</Button>
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <span className="text-sm text-gray-500 self-center">or</span>
                      </div>                      <div>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              handleFileUpload(index, file)
                            }
                          }}
                          className="mb-2"
                          disabled={uploadingIndexes.has(index)}
                        />
                        {uploadingIndexes.has(index) && (
                          <div className="flex items-center text-sm text-blue-600 mb-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                            Uploading...
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Accepted formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Important Notes:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Ensure all documents are clear and readable</li>
                <li>• Documents should be recent and valid</li>
                <li>• You can upload documents now or skip and upload later</li>
              </ul>
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
          ) : (            <Button 
              onClick={handleBuyNow} 
              disabled={processing || !razorpayLoaded}
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
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay ₹{finalPrice.toLocaleString()}
                </>
              )}
            </Button>
          )}        </div>
      </div>

      {/* Razorpay Script */}
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRazorpayLoaded(true)}
        onError={() => {
          console.error('Failed to load Razorpay script')
          toast.error('Payment system failed to load. Please refresh the page.')
        }}
      />
    </div>
  )
}
