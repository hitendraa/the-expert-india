"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Mail, 
  Calendar, 
  Shield, 
  ArrowLeft, 
  LayoutDashboard, 
  ShoppingCart,
  Eye,
  Clock,
  CheckCircle,
  FileText
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { toast } from "sonner"

interface Order {
  _id: string
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
  createdAt: string
  updatedAt: string
}

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/')
      return
    }

    fetchOrders()
  }, [session, status, router])

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders')
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />
      case 'processing':
        return <Clock className="h-4 w-4" />
      case 'pending':
        return <Clock className="h-4 w-4" />
      case 'cancelled':
        return <Clock className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <div className="text-lg">Loading profile...</div>
          </div>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Please sign in to view your profile.</p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
              <p className="text-gray-600">Manage your account and view your services</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                    <AvatarFallback className="text-2xl">
                      {session.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl">{session.user?.name}</CardTitle>
                <CardDescription>{session.user?.email}</CardDescription>
                <div className="flex justify-center mt-2">
                  <Badge variant={(session.user as { role?: string })?.role === 'admin' ? 'default' : 'secondary'}>
                    {(session.user as { role?: string })?.role === 'admin' ? (
                      <>
                        <Shield className="h-3 w-3 mr-1" />
                        Admin
                      </>
                    ) : (
                      <>
                        <User className="h-3 w-3 mr-1" />
                        User
                      </>
                    )}
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Bought Services Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Bought Services
                </CardTitle>
                <CardDescription>
                  Services you&apos;ve purchased ({orders.length})
                </CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <div className="text-center py-6">
                    <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">No services purchased yet</p>
                    <Link href="/dashboard">
                      <Button variant="outline" size="sm" className="mt-2">
                        Browse Services
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order._id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{order.serviceId.name}</div>
                          <div className="text-xs text-muted-foreground">
                            ₹{order.amount.toLocaleString()}
                          </div>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{order.serviceId.name}</DialogTitle>
                              <DialogDescription>Service details and status</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Status</label>
                                  <div className="flex items-center gap-2 mt-1">
                                    {getStatusIcon(order.status)}
                                    <Badge variant={getStatusColor(order.status)}>
                                      {order.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Amount</label>
                                  <div className="mt-1 font-medium">₹{order.amount.toLocaleString()}</div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Order Date</label>
                                  <div className="mt-1 text-sm">{new Date(order.orderDate).toLocaleDateString()}</div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Payment</label>
                                  <div className="mt-1">
                                    <Badge variant={order.paymentStatus === 'paid' ? 'default' : 'outline'}>
                                      {order.paymentStatus}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              {order.notes && (
                                <div>
                                  <label className="text-sm font-medium">Notes</label>
                                  <div className="mt-1 text-sm text-muted-foreground">{order.notes}</div>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    ))}
                    {orders.length > 3 && (
                      <div className="text-center pt-2">
                        <Button variant="outline" size="sm">
                          View All ({orders.length})
                        </Button>
                      </div>
                    )}
                  </div>
                )}              </CardContent>
            </Card>

            {/* Document Library Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  My Documents
                </CardTitle>
                <CardDescription>
                  Manage your uploaded documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload and manage documents for your services
                  </p>
                  <Link href="/documents">
                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      View Document Library
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Account Information */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Your account details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{session.user?.name}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{session.user?.email}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Account Type</label>
                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      {(session.user as { role?: string })?.role === 'admin' ? (
                        <Shield className="h-4 w-4 text-blue-600" />
                      ) : (
                        <User className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="capitalize">{(session.user as { role?: string })?.role || 'user'}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Member Since</label>
                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>
                        {new Date().toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Account Actions</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/dashboard">
                      <Button variant="outline">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Go to Dashboard
                      </Button>
                    </Link>
                    {(session.user as { role?: string })?.role === 'admin' && (
                      <Link href="/admin">
                        <Button variant="outline">
                          <Shield className="h-4 w-4 mr-2" />
                          Admin Panel
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            {orders.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    Your latest service purchases
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 5).map((order) => (
                      <div key={order._id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{order.serviceId.name}</h4>
                            <Badge variant={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Order #{order._id.slice(-8)} • {new Date(order.orderDate).toLocaleDateString()}
                          </div>
                          <div className="text-sm font-medium">₹{order.amount.toLocaleString()}</div>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{order.serviceId.name}</DialogTitle>
                              <DialogDescription>Order #{order._id}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Status</label>
                                  <div className="flex items-center gap-2 mt-1">
                                    {getStatusIcon(order.status)}
                                    <Badge variant={getStatusColor(order.status)}>
                                      {order.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Amount</label>
                                  <div className="mt-1 font-medium">₹{order.amount.toLocaleString()}</div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Order Date</label>
                                  <div className="mt-1 text-sm">{new Date(order.orderDate).toLocaleDateString()}</div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Payment Status</label>
                                  <div className="mt-1">
                                    <Badge variant={order.paymentStatus === 'paid' ? 'default' : 'outline'}>
                                      {order.paymentStatus}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              {order.completionDate && (
                                <div>
                                  <label className="text-sm font-medium">Completion Date</label>
                                  <div className="mt-1 text-sm">{new Date(order.completionDate).toLocaleDateString()}</div>
                                </div>
                              )}
                              {order.notes && (
                                <div>
                                  <label className="text-sm font-medium">Notes</label>
                                  <div className="mt-1 text-sm text-muted-foreground">{order.notes}</div>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
