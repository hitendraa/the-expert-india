"use client"

import { useState, useEffect } from "react"
import { Search, MoreHorizontal, Eye, ShoppingCart, FileText, RefreshCw, ChevronLeft, ChevronRight, Printer, Download } from "lucide-react"
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
  notes?: string // User notes
  adminNotes?: string // Admin notes
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

interface OrdersResponse {
  orders: Order[]
  pagination: {
    page: number
    limit: number
    totalCount: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
  performance: {
    queryTime: number
    recordsReturned: number
  }
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
  const [refreshing, setRefreshing] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 50,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isDocumentsDialogOpen, setIsDocumentsDialogOpen] = useState(false)
  const [downloadTimers, setDownloadTimers] = useState<{ [docId: string]: number | null }>({})
  const [editForm, setEditForm] = useState({
    status: "pending" as Order['status'],
    paymentStatus: "pending" as Order['paymentStatus'],
    adminNotes: ""
  })
  
  const fetchOrders = async (retryCount = 0, isManualRefresh = false) => {
    const maxRetries = 3
    const retryDelay = 1000 * Math.pow(2, retryCount) // Exponential backoff
    
    if (isManualRefresh) {
      setRefreshing(true)
    }
    
    try {
      console.log(`Fetching orders... ${retryCount > 0 ? `(Retry ${retryCount}/${maxRetries})` : ''}`)
      const startTime = Date.now()
      
      // Add timeout to prevent hanging requests
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout
      
      const response = await fetch('/api/admin/orders', {
        signal: controller.signal,
        headers: {
          'Cache-Control': 'no-cache',
        }
      })
      
      clearTimeout(timeoutId)
      const responseTime = Date.now() - startTime
      console.log(`Orders API response time: ${responseTime}ms`)
      
      if (response.ok) {
        const data: OrdersResponse = await response.json()
        console.log(`Successfully loaded ${data.orders.length} orders (Page ${data.pagination.page}/${data.pagination.totalPages})`)
        setOrders(data.orders)
        setPagination(data.pagination)
        if (isManualRefresh) {
          toast.success('Orders refreshed successfully')
        }
      } else {
        const errorText = await response.text()
        console.error('Failed to fetch orders:', response.status, errorText)
        throw new Error(`Server responded with ${response.status}: ${errorText}`)
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
      
      // Type guard for error handling
      const isAbortError = error instanceof Error && error.name === 'AbortError'
      const isNetworkError = error instanceof TypeError
      const isServerError = error instanceof Error && error.message.includes('500')
      
      // Retry logic for network issues
      if (retryCount < maxRetries && (isNetworkError || isAbortError || isServerError)) {
        console.log(`Retrying in ${retryDelay}ms...`)
        setTimeout(() => {
          fetchOrders(retryCount + 1, isManualRefresh)
        }, retryDelay)
        return
      }
      
      // Show user-friendly error message
      if (isAbortError) {
        toast.error('Request timed out. Please check your connection and try again.')
      } else if (isNetworkError) {
        toast.error('Network error. Please check your internet connection.')
      } else {
        toast.error('Failed to load orders. Please try again.')
      }
    } finally {
      if (retryCount === 0) { // Only set loading false on the initial attempt
        setLoading(false)
        if (isManualRefresh) {
          setRefreshing(false)
        }
      }
    }
  }

  // Add useEffect hook with the proper dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchOrders();
  }, []);

  const handleRefresh = () => {
    fetchOrders(0, true)
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }))
      // You could implement pagination fetch here, but for now we'll keep it simple
      // In a production app, you'd want to fetch the new page
    }
  }

  // Print functionality for orders
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Orders Report - ${currentDate}</title>
        <style>
          @page { 
            margin: 20mm; 
            size: A4;
          }
          * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
          }
          body { 
            font-family: Arial, sans-serif; 
            font-size: 12px; 
            line-height: 1.4;
            color: #333;
          }
          .header { 
            text-align: center; 
            margin-bottom: 20px; 
            padding-bottom: 10px;
            border-bottom: 2px solid #333;
          }
          .header h1 { 
            font-size: 18px; 
            margin-bottom: 5px;
            color: #1a365d;
          }
          .header p { 
            font-size: 10px; 
            color: #666;
          }
          .stats { 
            display: flex; 
            justify-content: space-around; 
            margin: 15px 0; 
            padding: 10px;
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
          }
          .stat-item { 
            text-align: center; 
          }
          .stat-number { 
            font-size: 16px; 
            font-weight: bold; 
            color: #1a365d;
          }
          .stat-label { 
            font-size: 10px; 
            color: #666;
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 15px;
          }
          th, td { 
            border: 1px solid #ddd; 
            padding: 6px; 
            text-align: left; 
            vertical-align: top;
          }
          th { 
            background-color: #f8f9fa; 
            font-weight: bold;
            font-size: 10px;
          }
          td { 
            font-size: 9px;
          }
          .status-completed { color: #059669; font-weight: bold; }
          .status-processing { color: #d97706; font-weight: bold; }
          .status-pending { color: #6b7280; }
          .status-cancelled { color: #dc2626; font-weight: bold; }
          .payment-paid { color: #059669; font-weight: bold; }
          .payment-pending { color: #6b7280; }
          .payment-failed { color: #dc2626; font-weight: bold; }
          .payment-refunded { color: #d97706; font-weight: bold; }
          .footer { 
            margin-top: 20px; 
            text-align: center; 
            font-size: 10px; 
            color: #666;
            border-top: 1px solid #ddd;
            padding-top: 10px;
          }
          @media print {
            .no-print { display: none !important; }
            body { print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>The Expert India - Orders Report</h1>
          <p>Generated on ${currentDate} at ${currentTime}</p>
        </div>
        
        <div class="stats">
          <div class="stat-item">
            <div class="stat-number">${filteredOrders.length}</div>
            <div class="stat-label">Total Orders</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${filteredOrders.filter(o => o.status === 'completed').length}</div>
            <div class="stat-label">Completed</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${filteredOrders.filter(o => o.status === 'processing').length}</div>
            <div class="stat-label">Processing</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${filteredOrders.filter(o => o.status === 'pending').length}</div>
            <div class="stat-label">Pending</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">₹${filteredOrders.reduce((sum, o) => sum + o.amount, 0).toLocaleString()}</div>
            <div class="stat-label">Total Revenue</div>
          </div>
        </div>
        
        ${searchTerm ? `
        <div style="margin: 15px 0; padding: 10px; background-color: #f1f5f9; border: 1px solid #cbd5e1; font-size: 10px;">
          <strong>Applied Filters:</strong> Search: "${searchTerm}"
        </div>
        ` : ''}
        
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            ${filteredOrders.map(order => `
              <tr>
                <td>${order._id.slice(-8)}</td>
                <td>
                  <strong>${order.userId.name}</strong><br>
                  <small>${order.userId.email}</small>
                </td>
                <td>
                  <strong>${order.serviceId.name}</strong><br>
                  <small>Base: ₹${order.serviceId.price.toLocaleString()}</small>
                </td>
                <td><strong>₹${order.amount.toLocaleString()}</strong></td>
                <td class="status-${order.status}">${order.status.toUpperCase()}</td>
                <td class="payment-${order.paymentStatus}">${order.paymentStatus.toUpperCase()}</td>
                <td>${new Date(order.orderDate).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="footer">
          <p>The Expert India - Professional Business Services | Generated from Admin Panel</p>
          <p>Total Records: ${filteredOrders.length} | Generated by: Admin User</p>
        </div>
      </body>
      </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  // Download invoice for specific order
  const handleDownloadInvoice = (order: Order) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const currentDate = new Date().toLocaleDateString();
    
    const invoiceContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice - ${order._id.slice(-8)}</title>
        <style>
          @page { 
            margin: 20mm; 
            size: A4;
          }
          * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
          }
          body { 
            font-family: Arial, sans-serif; 
            font-size: 14px; 
            line-height: 1.6;
            color: #333;
          }
          .header { 
            text-align: center; 
            margin-bottom: 30px; 
            padding-bottom: 20px;
            border-bottom: 3px solid #1a365d;
          }
          .header h1 { 
            font-size: 24px; 
            margin-bottom: 5px;
            color: #1a365d;
          }
          .header p { 
            font-size: 12px; 
            color: #666;
          }
          .invoice-details {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
          }
          .invoice-info, .customer-info {
            width: 48%;
          }
          .invoice-info h3, .customer-info h3 {
            color: #1a365d;
            font-size: 16px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }
          .info-label {
            font-weight: bold;
            color: #555;
          }
          .service-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          .service-table th, .service-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          .service-table th {
            background-color: #f8f9fa;
            font-weight: bold;
            color: #1a365d;
          }
          .total-section {
            margin-top: 20px;
            text-align: right;
          }
          .total-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
          }
          .total-final {
            font-size: 18px;
            font-weight: bold;
            color: #1a365d;
            border-top: 2px solid #1a365d;
            padding-top: 10px;
            margin-top: 10px;
          }
          .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
          }
          .status-completed { background-color: #d1fae5; color: #059669; }
          .status-processing { background-color: #fef3c7; color: #d97706; }
          .status-pending { background-color: #f3f4f6; color: #6b7280; }
          .status-cancelled { background-color: #fee2e2; color: #dc2626; }
          .payment-paid { background-color: #d1fae5; color: #059669; }
          .payment-pending { background-color: #f3f4f6; color: #6b7280; }
          .payment-failed { background-color: #fee2e2; color: #dc2626; }
          .payment-refunded { background-color: #fef3c7; color: #d97706; }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .payment-details {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
          }
          .payment-details h4 {
            color: #1a365d;
            margin-bottom: 10px;
          }
          @media print {
            body { print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>The Expert India</h1>
          <p>Professional Business Services</p>
          <p>Email: contact@theexpertindia.com | Phone: +91 8447-8447-44 | Website: www.theexpertindia.com</p>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
          <div class="invoice-info">
            <h3>Invoice Details</h3>
            <div class="info-row">
              <span class="info-label">Invoice Number:</span>
              <span>INV-${order._id.slice(-8)}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Order ID:</span>
              <span>${order._id}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Invoice Date:</span>
              <span>${currentDate}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Order Date:</span>
              <span>${new Date(order.orderDate).toLocaleDateString()}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Status:</span>
              <span class="status-badge status-${order.status}">${order.status}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Payment:</span>
              <span class="status-badge payment-${order.paymentStatus}">${order.paymentStatus}</span>
            </div>
          </div>
          
          <div class="customer-info">
            <h3>Bill To</h3>
            <div class="info-row">
              <span class="info-label">Name:</span>
              <span>${order.userId.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span>${order.userId.email}</span>
            </div>
            ${order.userDetails?.phone ? `
            <div class="info-row">
              <span class="info-label">Phone:</span>
              <span>${order.userDetails.phone}</span>
            </div>
            ` : ''}
            ${order.userDetails?.name && order.userDetails.name !== order.userId.name ? `
            <div class="info-row">
              <span class="info-label">Full Name:</span>
              <span>${order.userDetails.name}</span>
            </div>
            ` : ''}
          </div>
        </div>
        
        <table class="service-table">
          <thead>
            <tr>
              <th>Service Description</th>
              <th>Base Price</th>
              <th>Final Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${order.serviceId.name}</strong>
                ${order.notes ? `<br><small>Customer Notes: ${order.notes}</small>` : ''}
                ${order.adminNotes ? `<br><small>Admin Notes: ${order.adminNotes}</small>` : ''}
              </td>
              <td>₹${order.serviceId.price.toLocaleString()}</td>
              <td>₹${order.amount.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
        
        <div class="total-section">
          <div class="total-row">
            <span>Subtotal:</span>
            <span>₹${order.amount.toLocaleString()}</span>
          </div>
          <div class="total-row">
            <span>Tax (Included):</span>
            <span>₹0.00</span>
          </div>
          <div class="total-row total-final">
            <span>Total Amount:</span>
            <span>₹${order.amount.toLocaleString()}</span>
          </div>
        </div>
        
        ${order.paymentDetails ? `
        <div class="payment-details">
          <h4>Payment Information</h4>
          ${order.paymentDetails.razorpay_order_id ? `
          <div class="info-row">
            <span class="info-label">Razorpay Order ID:</span>
            <span>${order.paymentDetails.razorpay_order_id}</span>
          </div>
          ` : ''}
          ${order.paymentDetails.razorpay_payment_id ? `
          <div class="info-row">
            <span class="info-label">Payment ID:</span>
            <span>${order.paymentDetails.razorpay_payment_id}</span>
          </div>
          ` : ''}
          ${order.paymentDetails.method ? `
          <div class="info-row">
            <span class="info-label">Payment Method:</span>
            <span style="text-transform: capitalize;">${order.paymentDetails.method}</span>
          </div>
          ` : ''}
        </div>
        ` : ''}
        
        ${order.documents && order.documents.length > 0 ? `
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
          <h4 style="color: #1a365d; margin-bottom: 10px;">Documents Submitted</h4>
          <ul style="margin-left: 20px;">
            ${order.documents.map(doc => `<li style="margin-bottom: 5px;">${doc}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        
        <div class="footer">
          <p><strong>Thank you for choosing The Expert India!</strong></p>
          <p>For any queries regarding this invoice, please contact us at contact@theexpertindia.com</p>
          <p style="margin-top: 10px; font-size: 10px;">This is a computer-generated invoice. No signature required.</p>
        </div>
      </body>
      </html>
    `;
    
    printWindow.document.write(invoiceContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order)
    setEditForm({
      status: order.status,
      paymentStatus: order.paymentStatus,
      adminNotes: order.adminNotes || ""
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
    } catch {
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
    } catch {
      toast.error('Error deleting order')
    }
  }

  const handleViewOrderDocuments = async (order: Order) => {
    setSelectedOrder(order)
    // ...removed debug logs...
    setIsDocumentsDialogOpen(true)
  }

  const handleDownloadDocument = async (documentId: string, filename: string) => {
    // Start download immediately
    try {
      const response = await fetch(`/api/admin/documents/${documentId}/download`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast.success('Document downloaded successfully');
      } else {
        throw new Error('Download failed');
      }
    } catch {
      toast.error('Failed to download document');
    }
    // Start timer for visual feedback
    let timeLeft = 3;
    setDownloadTimers(prev => ({ ...prev, [documentId]: timeLeft }));
    const timerInterval = setInterval(() => {
      timeLeft -= 1;
      setDownloadTimers(prev => ({ ...prev, [documentId]: timeLeft }));
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        setDownloadTimers(prev => ({ ...prev, [documentId]: null }));
      }
    }, 1000);
  };

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
        <div className="flex gap-2">
          <Button onClick={handlePrint} variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Print Orders
          </Button>
          <Button 
            onClick={handleRefresh} 
            disabled={refreshing}
            variant="outline"
            size="sm"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            {refreshing ? 'Refreshing...' : 'Refresh'}
          </Button>
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
                  {order.notes && (
                    <div className="text-xs text-yellow-600 mt-1">
                      📝 Customer notes available
                    </div>
                  )}
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

      {/* Performance & Pagination Info */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          {pagination.totalCount > 0 && (
            <>
              Showing {orders.length} of {pagination.totalCount} orders
            </>
          )}
        </div>
        
        {pagination.totalPages > 1 && (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={!pagination.hasPreviousPage}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={!pagination.hasNextPage}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
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

              {/* Customer Notes */}
              {selectedOrder.notes && (
                <div className="border rounded-lg p-4 bg-yellow-50">
                  <Label className="text-sm font-medium text-yellow-900">Customer Notes</Label>
                  <div className="mt-2 text-sm text-yellow-800">{selectedOrder.notes}</div>
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
                <Label htmlFor="adminNotes">Admin Notes</Label>
                <Textarea
                  id="adminNotes"
                  value={editForm.adminNotes}
                  onChange={(e) => setEditForm({ ...editForm, adminNotes: e.target.value })}
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
            <Button 
              onClick={() => selectedOrder && handleDownloadInvoice(selectedOrder)}
              variant="outline"
              disabled={!selectedOrder}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Invoice
            </Button>
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
          </DialogHeader>
          <div className="py-4">
            <div>
              {/* Unified document list: for each document description, try to find a matching file in documentIds by originalName */}
              {(() => {
                const docObjs: OrderDocument[] = Array.isArray(selectedOrder?.documentIds) ? selectedOrder.documentIds : [];
                const docNames: string[] = Array.isArray(selectedOrder?.documents) ? selectedOrder.documents : [];

                // Helper: extract filename from description string (e.g., "Aadhar Card (Upload: sample-5.pdf)")
                function extractFilename(desc: string): string | null {
                  const match = desc.match(/Upload: ([^)]+)\)/i);
                  return match ? match[1] : null;
                }

                // If no documentIds and no docNames, show empty
                if (docObjs.length === 0 && docNames.length === 0) {
                  return (
                    <div className="text-center py-10">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="font-semibold text-lg mb-2">No documents found</h3>
                      <p className="text-muted-foreground">
                        This order has no downloadable documents attached.
                      </p>
                    </div>
                  );
                }

                // For each document description, try to find a matching file in documentIds
                return (
                  <div className="space-y-4">
                    {docNames.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-3">Order Documents ({docNames.length})</h4>
                        {docNames.map((desc, index) => {
                          const filename = extractFilename(desc);
                          // Try to find a file in docObjs with matching originalName or filename
                          const file = filename
                            ? docObjs.find(d => d.originalName === filename || d.filename === filename)
                            : null;
                          return (
                            <div key={index} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg ${file ? 'bg-green-50' : 'bg-blue-50'}`}>
                              <div>
                                <div className={`font-medium ${file ? '' : 'text-blue-900'}`}>{desc}</div>
                                {file ? (
                                  <div className="text-xs text-muted-foreground">
                                    {file.mimetype || 'unknown'} • {file.size ? Math.ceil(file.size / 1024) : 0} KB
                                  </div>
                                ) : null}
                                <div className={`text-xs mt-1 ${file ? 'text-green-600' : 'text-blue-600'}`}>{file ? '📄 Downloadable File' : '📝 Document Description'}</div>
                              </div>
                              {file ? (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-2 sm:mt-0"
                                  onClick={() => handleDownloadDocument(file._id, file.originalName || file.filename || 'document')}
                                >
                                  {downloadTimers[file._id] !== undefined && downloadTimers[file._id] !== null ? `${downloadTimers[file._id]} s` : 'Download'}
                                </Button>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {/* Show any extra files in documentIds that are not matched by description (edge case) */}
                    {docObjs.length > 0 && docNames.length > 0 && (
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2">Other Uploaded Files</h4>
                        {docObjs.filter(doc => !docNames.some(desc => {
                          const filename = extractFilename(desc);
                          return filename && (doc.originalName === filename || doc.filename === filename);
                        })).map((doc, index) => (
                          <div key={doc._id || index} className="flex justify-between items-center p-4 border rounded-lg bg-green-50">
                            <div>
                              <div className="font-medium">{doc.originalName || doc.filename || 'Unknown File'}</div>
                              <div className="text-xs text-muted-foreground">
                                {doc.mimetype || 'unknown'} • {doc.size ? Math.ceil(doc.size / 1024) : 0} KB
                              </div>
                              <div className="text-xs text-green-600 mt-1">� Downloadable File</div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownloadDocument(doc._id, doc.originalName || doc.filename || 'document')}
                            >
                              {downloadTimers[doc._id] !== undefined && downloadTimers[doc._id] !== null ? `${downloadTimers[doc._id]} s` : 'Download'}
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
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
