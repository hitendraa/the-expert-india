'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { toast } from 'sonner'
import { 
  FileText, 
  Image as ImageIcon, 
  Download, 
  Trash2,
  Calendar,
  HardDrive,
  User,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface Document {
  _id: string
  userId: string
  username?: string
  useremail?: string
  filename: string
  originalName: string
  mimetype: string
  size: number
  category: string
  uploadDate: string
  isActive: boolean
}

interface DocumentsResponse {
  documents: Document[]
  pagination: {
    page: number
    limit: number
    totalCount: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

interface DocumentCategory {
  _id: string
  name: string
  description?: string
  isActive: boolean
}

export default function AdminDocumentsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [documents, setDocuments] = useState<Document[]>([])
  const [documentCategories, setDocumentCategories] = useState<DocumentCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterUser, setFilterUser] = useState('')
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  useEffect(() => {
    if (status === 'authenticated') {
      // Check if user is admin
      if ((session.user as { role?: string })?.role !== 'admin') {
        router.push('/dashboard')
        return
      }
      fetchDocuments()
      fetchDocumentCategories()
    }
  }, [status, session, router])

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
      const response = await fetch('/api/admin/documents')
      if (response.ok) {
        const data = await response.json()
        setDocuments(data)
      } else {
        toast.error('Failed to fetch documents')
      }
    } catch {
      toast.error('Failed to fetch documents')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (documentId: string) => {
    try {
      const response = await fetch(`/api/admin/documents/${documentId}`, {
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
      const response = await fetch(`/api/admin/documents/${documentId}/download`)
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

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.originalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.useremail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.username?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory
    const matchesUser = filterUser === '' || doc.useremail?.toLowerCase().includes(filterUser.toLowerCase())
    
    return matchesSearch && matchesCategory && matchesUser
  })

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
  if (status === 'unauthenticated' || (session && (session.user as { role?: string })?.role !== 'admin')) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>Admin access required to view this page.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Document Management</h1>
          <p className="text-gray-600 mt-2">View and manage all user documents</p>
        </div>
        <div className="text-sm text-gray-500">
          Total Documents: {filteredDocuments.length}
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div>
          <Input
            placeholder="Search documents or users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div>          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {documentCategories.map(category => (
                <SelectItem key={category._id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Input
            placeholder="Filter by user email..."
            value={filterUser}
            onChange={(e) => setFilterUser(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm('')
              setFilterCategory('all')
              setFilterUser('')
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        </div>
      </div>

      {filteredDocuments.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-500">
              {documents.length === 0 
                ? 'No documents have been uploaded yet'
                : 'No documents match your current filters'
              }
            </p>
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
                      <p className="text-xs text-gray-500 truncate">
                        {document.useremail || document.username || 'Unknown User'}
                      </p>
                    </div>
                  </div>                  <Badge variant="secondary" className="text-xs">
                    {document.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span className="truncate">{document.useremail || 'Unknown'}</span>
                  </div>
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
                          Are you sure you want to delete &apos;{document.originalName}&apos; uploaded by {document.useremail}? 
                          This action cannot be undone and will remove the document from all orders.
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
