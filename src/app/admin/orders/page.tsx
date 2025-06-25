"use client"

import { useState, useEffect } from "react"
import { Search, MoreHorizontal, Eye, ShoppingCart, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Order {
  _id: string
  userId: {
    _id: string
    name: string
    email: string
    image?: string
  }
  serviceId: {
    _id: string
    name: string
    price: number
  }
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  amount: number
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  orderDate: string
  completionDate?: string
  notes?: string
  userDetails?: {
    name?: string
    email?: string
    phone?: string
    [key: string]: unknown
  }
  documents?: string[]
  documentIds?: OrderDocument[] // Now populated with actual document objects
  paymentDetails?: {
    razorpay_order_id?: string
    razorpay_payment_id?: string
    razorpay_signature?: string
    method?: string
  }
  createdAt: string
  updatedAt: string
}

interface OrderDocument {
  _id: string
  filename: string
  originalName: string
  mimetype: string
  size: number
  category: string
  uploadDate: string
  isActive: boolean
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isDocumentsDialogOpen, setIsDocumentsDialogOpen] = useState(false)
  const [downloadTimer, setDownloadTimer] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({
    status: "pending" as Order['status'],
    paymentStatus: "pending" as Order['paymentStatus'],
    notes: ""
  })

  useEffect(() => {
    fetchOrders()
  }, [])
  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/admin/orders')
      if (response.ok) {
        const data = await response.json()
        setOrders(data)
      } else {
        toast.error('Failed to fetch orders')
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
      toast.error('Error fetching orders')
    } finally {
      setLoading(false)
    }
  }

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order)
    setEditForm({
      status: order.status,
      paymentStatus: order.paymentStatus,
      notes: order.notes || ""
    })
    setIsEditing(false)
    setIsDialogOpen(true)
  }

  const handleEditOrder = () => {
    setIsEditing(true)
  }
  const handleSaveOrder = async () => {
    if (!selectedOrder) return

    try {
      const response = await fetch(`/api/admin/orders/${selectedOrder._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      })

      if (response.ok) {
        toast.success('Order updated successfully')
        await fetchOrders() // Refresh the list
        setIsDialogOpen(false)
        setIsEditing(false)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to update order')
      }
    } catch (error) {
      console.error('Error updating order:', error)
      toast.error('Error updating order')
    }
  }
  const handleDeleteOrder = async (orderId: string) => {
    if (!confirm('Are you sure you want to delete this order?')) return

    try {
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Order deleted successfully')
        await fetchOrders() // Refresh the list      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to delete order')
      }
    } catch (error) {
      console.error('Error deleting order:', error)
      toast.error('Error deleting order')
    }
  }

  const handleViewOrderDocuments = async (order: Order) => {
    setSelectedOrder(order)
    console.log('Order data:', order) // Debug log
    console.log('Order documentIds:', order.documentIds) // Debug log
    console.log('Order documentIds type:', typeof order.documentIds) // Debug log
    console.log('Order documentIds length:', order.documentIds?.length) // Debug log
    console.log('Order documentIds structure:', JSON.stringify(order.documentIds, null, 2)) // Debug log
    console.log('Order documents:', order.documents) // Debug log
    setIsDocumentsDialogOpen(true)
  }

  const handleDownloadDocument = async (documentId: string, filename: string) => {
    // Start countdown timer
    let timeLeft = 3
    setDownloadTimer(timeLeft)
    
    const timerInterval = setInterval(() => {
      timeLeft -= 1
      setDownloadTimer(timeLeft)
      
      if (timeLeft === 0) {
        clearInterval(timerInterval)
        setDownloadTimer(null)
        
        // Start download
        try {
          const response = fetch(`/api/admin/documents/${documentId}/download`)
          response.then(res => {
            if (res.ok) {
              return res.blob()
            }
            throw new Error('Download failed')
          }).then(blob => {
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = filename
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
            toast.success('Document downloaded successfully')
          }).catch(error => {
            console.error('Download error:', error)
            toast.error('Failed to download document')
          })
        } catch (error) {
          console.error('Download error:', error)
          toast.error('Failed to download document')
        }
      }
    }, 1000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'default'
      case 'processing':
        return 'secondary'
      case 'pending':
        return 'outline'
      case 'cancelled':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'default'
      case 'pending':
        return 'outline'
      case 'failed':
        return 'destructive'
      case 'refunded':
        return 'secondary'
      default:
        return 'outline'
    }
  }

  const filteredOrders = orders.filter(order =>
    order.userId.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userId.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.serviceId.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <div className="text-lg">Loading orders...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground">Manage customer orders and their status</p>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search orders by customer or service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24">
                  <div className="flex flex-col items-center justify-center text-center">
                    <ShoppingCart className="h-12 w-12 text-muted-foreground mb-2" />
                    <h3 className="font-semibold text-lg mb-1">No orders found</h3>
                    <p className="text-muted-foreground">
                      {searchTerm ? "No orders match your search criteria." : "Orders will appear here when customers make purchases."}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={order.userId.image || undefined} />
                      <AvatarFallback>
                        {order.userId.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{order.userId.name}</div>
                      <div className="text-xs text-muted-foreground">{order.userId.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{order.serviceId.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Base Price: ₹{order.serviceId.price.toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">₹{order.amount.toLocaleString()}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getPaymentStatusColor(order.paymentStatus)}>
                    {order.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(order.orderDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewOrder(order)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleViewOrderDocuments(order)}>
                        <FileText className="mr-2 h-4 w-4" />
                        View Documents ({(order.documentIds?.length || 0) + (order.documents?.length || 0)})
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDeleteOrder(order._id)}
                        className="text-destructive"
                      >
                        Delete Order
                      </DropdownMenuItem>                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
            )}
          </TableBody>        </Table>
      </div>

      {/* View/Edit Order Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? 'Edit Order' : 'Order Details'}
            </DialogTitle>
            <DialogDescription>
              {isEditing ? 'Update order status and information.' : 'View detailed order information.'}
            </DialogDescription>
          </DialogHeader>          {selectedOrder && (
            <div className="grid gap-6 py-4">
              {/* Basic Order Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Customer</Label>
                  <div className="mt-1">
                    <div className="font-medium">{selectedOrder.userId.name}</div>
                    <div className="text-sm text-muted-foreground">{selectedOrder.userId.email}</div>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Service</Label>
                  <div className="mt-1">
                    <div className="font-medium">{selectedOrder.serviceId.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Base Price: ₹{selectedOrder.serviceId.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Amount Paid</Label>
                  <div className="mt-1 font-medium">₹{selectedOrder.amount.toLocaleString()}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Order Date</Label>
                  <div className="mt-1">{new Date(selectedOrder.orderDate).toLocaleString()}</div>
                </div>
              </div>

              {/* Payment Details */}
              {selectedOrder.paymentDetails && (
                <div className="border rounded-lg p-4 bg-blue-50">
                  <Label className="text-sm font-medium text-blue-900">Payment Details</Label>
                  <div className="mt-2 grid gap-2">
                    {selectedOrder.paymentDetails.razorpay_order_id && (
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-700">Razorpay Order ID:</span>
                        <span className="font-mono text-blue-900">{selectedOrder.paymentDetails.razorpay_order_id}</span>
                      </div>
                    )}
                    {selectedOrder.paymentDetails.razorpay_payment_id && (
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-700">Payment ID:</span>
                        <span className="font-mono text-blue-900">{selectedOrder.paymentDetails.razorpay_payment_id}</span>
                      </div>
                    )}
                    {selectedOrder.paymentDetails.method && (
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-700">Payment Method:</span>
                        <span className="capitalize text-blue-900">{selectedOrder.paymentDetails.method}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* User Details */}
              {selectedOrder.userDetails && (
                <div className="border rounded-lg p-4 bg-green-50">
                  <Label className="text-sm font-medium text-green-900">Customer Details</Label>
                  <div className="mt-2 grid gap-2">
                    {selectedOrder.userDetails.name && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-700">Full Name:</span>
                        <span className="text-green-900">{selectedOrder.userDetails.name}</span>
                      </div>
                    )}
                    {selectedOrder.userDetails.email && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-700">Email:</span>
                        <span className="text-green-900">{selectedOrder.userDetails.email}</span>
                      </div>
                    )}
                    {selectedOrder.userDetails.phone && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-700">Phone:</span>
                        <span className="text-green-900">{selectedOrder.userDetails.phone || 'Not provided'}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Documents */}
              {selectedOrder.documents && selectedOrder.documents.length > 0 && (
                <div className="border rounded-lg p-4 bg-purple-50">
                  <Label className="text-sm font-medium text-purple-900">Uploaded Documents</Label>
                  <div className="mt-2">
                    <ul className="space-y-1">
                      {selectedOrder.documents.map((doc, index) => (
                        <li key={index} className="text-sm text-purple-800 flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {selectedOrder.completionDate && (
                <div>
                  <Label className="text-sm font-medium">Completion Date</Label>
                  <div className="mt-1">{new Date(selectedOrder.completionDate).toLocaleString()}</div>
                </div>
              )}

              {/* Order Status Controls */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="status">Order Status</Label>
                  <Select
                    value={editForm.status}
                    onValueChange={(value: Order['status']) => setEditForm({ ...editForm, status: value })}
                    disabled={!isEditing}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="paymentStatus">Payment Status</Label>
                  <Select
                    value={editForm.paymentStatus}
                    onValueChange={(value: Order['paymentStatus']) => setEditForm({ ...editForm, paymentStatus: value })}
                    disabled={!isEditing}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="refunded">Refunded</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Admin Notes</Label>
                <Textarea
                  id="notes"
                  value={editForm.notes}
                  onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                  className="mt-1"
                  placeholder="Add notes about this order..."
                  disabled={!isEditing}
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveOrder}>Save Changes</Button>
              </>
            ) : (
              <Button onClick={handleEditOrder}>Edit Order</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Order Documents Dialog */}
      <Dialog open={isDocumentsDialogOpen} onOpenChange={setIsDocumentsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Order Documents</DialogTitle>
            <DialogDescription>
              View and download documents related to this order.
            </DialogDescription>
          </DialogHeader>          <div className="py-4">
            <div>
              {(!selectedOrder?.documentIds || selectedOrder.documentIds.length === 0) && (!selectedOrder?.documents || selectedOrder.documents.length === 0) ? (
                <div className="text-center py-10">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg mb-2">No documents found</h3>
                  <p className="text-muted-foreground">
                    This order has no documents uploaded.
                  </p>
                </div>
              ) : (                <div className="space-y-4">
                  {/* Show downloadable documents */}
                  {selectedOrder?.documentIds && selectedOrder.documentIds.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Uploaded Documents ({selectedOrder.documentIds.length})</h4>
                      {selectedOrder.documentIds.map((doc: OrderDocument, index: number) => (
                        <div key={doc._id || index} className="flex justify-between items-center p-4 border rounded-lg bg-green-50">
                          <div>
                            <div className="font-medium">{doc.originalName || doc.filename || 'Unknown File'}</div>
                            <div className="text-xs text-muted-foreground">
                              {doc.mimetype || 'unknown'} • {doc.size ? Math.ceil(doc.size / 1024) : 0} KB
                            </div>
                            <div className="text-xs text-green-600 mt-1">📄 Downloadable File</div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadDocument(doc._id, doc.originalName || doc.filename || 'document')}
                          >
                            {downloadTimer !== null ? `${downloadTimer} s` : 'Download'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Show text-based document descriptions */}
                  {selectedOrder?.documents && selectedOrder.documents.length > 0 && (
                    <>
                      {selectedOrder?.documentIds && selectedOrder.documentIds.length > 0 && (
                        <div className="border-t pt-4">
                          <h4 className="font-medium mb-2">Document Descriptions</h4>
                        </div>
                      )}
                      {selectedOrder.documents.map((doc, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-blue-50">
                          <div className="font-medium text-blue-900">{doc}</div>
                          <div className="text-xs text-blue-600 mt-1">📝 Document Description</div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDocumentsDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
