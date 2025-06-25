"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ShoppingCart, Star, CheckCircle, ArrowRight, Shield, Clock, Eye, FileText, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

interface Service {
  _id: string
  name: string
  description: string
  docsRequired: string[]
  price: number
  sellPrice?: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

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

export default function UserDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [services, setServices] = useState<Service[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/')
      return
    }    fetchServices()
    fetchOrders()
  }, [session, status, router])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      if (response.ok) {
        const data = await response.json()
        setServices(data.filter((service: Service) => service.isActive))
      } else {
        toast.error('Failed to fetch services')
      }
    } catch (error) {
      console.error('Error fetching services:', error)
      toast.error('Error fetching services')
    } finally {
      setLoading(false)
    }
  }

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders')
      if (response.ok) {
        const data = await response.json()
        setOrders(data.slice(0, 3)) // Only show recent 3 orders
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
      // Don't show error toast for orders as it's not critical
    }
  }

  const handleBuyNow = (serviceId: string) => {
    router.push(`/buy/${serviceId}`)
  }

  if (status === 'loading' || loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <div className="text-lg">Loading dashboard...</div>
          </div>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {session.user?.name}!</h1>
        <p className="text-muted-foreground">
          Explore our legal services and get professional assistance for your business needs.
        </p>
        {(session.user as { role?: string })?.role === 'admin' && (
          <div className="mt-3">
            <Button 
              onClick={() => router.push('/admin')}
              variant="outline"
              size="sm"
            >
              <Shield className="h-4 w-4 mr-2" />
              Go to Admin Panel
            </Button>
          </div>
        )}      </div>

      {/* Quick Navigation */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push('/documents')}>
            <CardContent className="flex items-center p-4">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="font-medium">My Documents</h3>
                <p className="text-sm text-muted-foreground">Upload and manage documents</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push('/profile')}>
            <CardContent className="flex items-center p-4">
              <User className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="font-medium">My Profile</h3>
                <p className="text-sm text-muted-foreground">View orders and profile</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}>
            <CardContent className="flex items-center p-4">
              <ShoppingCart className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h3 className="font-medium">Browse Services</h3>
                <p className="text-sm text-muted-foreground">Explore our legal services</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div id="services-section" className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <p className="text-muted-foreground mb-6">
          Choose from our comprehensive range of legal and compliance services designed to help your business succeed.
        </p>
      </div>

      {services.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Services Available</h3>
            <p className="text-muted-foreground text-center">
              Our services are currently being updated. Please check back soon.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service._id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{service.name}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Documents Required:</h4>
                  <div className="space-y-1">
                    {service.docsRequired.slice(0, 3).map((doc, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                        {doc}
                      </div>
                    ))}
                    {service.docsRequired.length > 3 && (
                      <div className="text-sm text-muted-foreground">
                        +{service.docsRequired.length - 3} more documents
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {service.sellPrice && service.sellPrice < service.price ? (
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-green-600">
                            ₹{service.sellPrice.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{service.price.toLocaleString()}
                          </span>
                          <Badge variant="destructive" className="text-xs">
                            {Math.round(((service.price - service.sellPrice) / service.price) * 100)}% OFF
                          </Badge>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold">
                          ₹{service.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleBuyNow(service._id)}
                    className="w-full"
                    size="lg"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>      )}

      {/* Recent Orders Section */}
      {orders.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Recent Orders</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/profile')}
            >
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <Card key={order._id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">
                        {order.serviceId.name}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        Order #{order._id.slice(-8)}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={
                        order.status === 'completed' ? 'default' :
                        order.status === 'processing' ? 'secondary' :
                        order.status === 'cancelled' ? 'destructive' : 'outline'
                      }
                      className="text-xs"
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">₹{order.amount.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Payment:</span>
                      <Badge 
                        variant={
                          order.paymentStatus === 'paid' ? 'default' :
                          order.paymentStatus === 'failed' ? 'destructive' :
                          order.paymentStatus === 'refunded' ? 'secondary' : 'outline'
                        }
                        className="text-xs"
                      >
                        {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {new Date(order.orderDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {order.completionDate && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Completed:</span>
                        <span className="font-medium text-green-600">
                          {new Date(order.completionDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => router.push('/profile')}
                    >
                      <Clock className="h-3 w-3 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <Card>
          <CardContent className="py-8">
            <h3 className="text-xl font-semibold mb-2">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-4">
              Our experts are here to help you select the right service for your needs.
            </p>
            <Button variant="outline">
              Contact Our Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
