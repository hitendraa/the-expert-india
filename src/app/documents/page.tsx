'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { toast } from 'sonner'
import { 
  Upload, 
  FileText, 
  Image as ImageIcon, 
  Download, 
  Trash2, 
  Plus,
  Calendar,
  HardDrive
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface Document {
  _id: string
  filename: string
  originalName: string
  mimetype: string
  size: number
  category: string
  uploadDate: string
  isActive: boolean
}

interface DocumentCategory {
  _id: string
  name: string
  description?: string
}

export default function DocumentsPage() {
  const { status } = useSession()
  const [documents, setDocuments] = useState<Document[]>([])
  const [documentCategories, setDocumentCategories] = useState<DocumentCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [filterCategory, setFilterCategory] = useState('all')

  useEffect(() => {
    if (status === 'authenticated') {
      fetchDocuments()
      fetchDocumentCategories()
    }
  }, [status])

  const fetchDocumentCategories = async () => {
    try {
      const response = await fetch('/api/document-categories')
      if (response.ok) {
        const categories = await response.json()
        setDocumentCategories(categories)
      } else {
        // ...removed debug log...
      }
    } catch {}
  }
  const fetchDocuments = async () => {
    try {
      // ...removed debug log...
      const response = await fetch('/api/documents')
      // ...removed debug log...
      
      if (response.ok) {
        const data = await response.json()
        // ...removed debug log...
        setDocuments(data)
      } else {
        // ...removed debug log...
        toast.error('Failed to fetch documents')
      }
    } catch {
      toast.error('Failed to fetch documents')
    } finally {
      setLoading(false)
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size exceeds 10MB limit')
        return
      }

      // Validate file type
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png', 
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]

      if (!allowedTypes.includes(file.type)) {
        toast.error('Invalid file type. Only JPEG, PNG, PDF, DOC, DOCX are allowed')
        return
      }

      setSelectedFile(file)
    }
  }
  const handleUpload = async () => {
    if (!selectedFile || !selectedCategory) {
      toast.error('Please select a file and category')
      return
    }

    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('category', selectedCategory)

      // ...removed debug log...

      const response = await fetch('/api/documents', {
        method: 'POST',
        body: formData,
      })

      // ...removed debug log...

      if (response.ok) {
        // ...removed debug log...
        toast.success('Document uploaded successfully')
        
        // Refresh the documents list
        await fetchDocuments()
        
        // Reset form
        setSelectedFile(null)
        setSelectedCategory('')
        setIsUploadDialogOpen(false)
      } else {
        const error = await response.json()
        // ...removed debug log...
        toast.error(error.error || 'Failed to upload document')
      }
    } catch {
      toast.error('Failed to upload document')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (documentId: string) => {
    try {
      const response = await fetch(`/api/documents/${documentId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Document deleted successfully')
        setDocuments(prev => prev.filter(doc => doc._id !== documentId))
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to delete document')
      }
    } catch {
      toast.error('Failed to delete document')
    }
  }

  const handleDownload = async (documentId: string, filename: string) => {
    try {
      const response = await fetch(`/api/documents/${documentId}`)
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        toast.error('Failed to download document')
      }
    } catch {
      toast.error('Failed to download document')
    }
  }

  const getFileIcon = (mimetype: string) => {
    if (mimetype.startsWith('image/')) {
      return <ImageIcon className="h-8 w-8 text-blue-500" />
    }
    return <FileText className="h-8 w-8 text-gray-500" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const filteredDocuments = documents.filter(doc => 
    filterCategory === 'all' || doc.category === filterCategory
  )

  if (status === 'loading' || loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>Please sign in to view your documents.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">My Documents</h1>
          <p className="text-gray-600 mt-2">Upload and manage your documents</p>
        </div>
        
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Document</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="file">Select File</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileSelect}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Max 10MB. Supported: JPEG, PNG, PDF, DOC, DOCX
                </p>
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>                  <SelectContent>
                    {documentCategories.map(category => (
                      <SelectItem key={category._id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedFile && (
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
              )}

              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsUploadDialogOpen(false)
                    setSelectedFile(null)
                    setSelectedCategory('')
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleUpload}
                  disabled={uploading || !selectedFile || !selectedCategory}
                >
                  {uploading ? 'Uploading...' : 'Upload'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          <Label>Filter by category:</Label>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {documentCategories.map(category => (
                <SelectItem key={category._id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredDocuments.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>            <p className="text-gray-500 mb-4">
              {filterCategory === 'all' 
                ? 'Upload your first document to get started' 
                : `No documents found in ${filterCategory} category`
              }
            </p>
            <Button onClick={() => setIsUploadDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map(document => (
            <Card key={document._id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {getFileIcon(document.mimetype)}
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-sm truncate" title={document.originalName}>
                        {document.originalName}
                      </CardTitle>
                    </div>
                  </div>                  <Badge variant="secondary" className="text-xs">
                    {document.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="h-3 w-3" />
                    <span>{formatFileSize(document.size)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDistanceToNow(new Date(document.uploadDate), { addSuffix: true })}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDownload(document._id, document.originalName)}
                    className="flex-1"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Document</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete &ldquo;{document.originalName}&rdquo;? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(document._id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
