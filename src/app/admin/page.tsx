"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Users, ShoppingCart, Settings, DollarSign, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface DashboardStats {
  totalUsers: number
  totalOrders: number
  totalServices: number
  activeServices: number
  totalRevenue: number
  pendingOrders: number
}

interface ActivityLog {
  _id: string
  adminId?: {
    _id: string
    name: string
    email: string
    image?: string
  }
  userId?: {
    _id: string
    name: string
    email: string
    image?: string
  }
  action: string
  resource: 'user' | 'order' | 'service' | 'system'
  resourceId?: string
  details: string
  metadata?: Record<string, unknown>
  createdAt: string
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [recentActivities, setRecentActivities] = useState<ActivityLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/')
      return
    }

    // Check if user is admin (this should be handled by middleware, but double-check)
    if (session.user && (session.user as { role?: string }).role !== 'admin') {
      router.push('/dashboard')
      return
    }

    fetchDashboardStats()
  }, [session, status, router])
  const fetchDashboardStats = async () => {
    try {
      const [usersRes, ordersRes, servicesRes, activitiesRes] = await Promise.all([
        fetch('/api/admin/users'),
        fetch('/api/admin/orders'),
        fetch('/api/admin/services'),
        fetch('/api/admin/activities?limit=5')
      ])

      if (usersRes.ok && ordersRes.ok && servicesRes.ok) {
        const [users, orders, services, activitiesData] = await Promise.all([
          usersRes.json(),
          ordersRes.json(),
          servicesRes.json(),
          activitiesRes.ok ? activitiesRes.json() : { activities: [] }
        ])

        const totalRevenue = orders.reduce((sum: number, order: { amount: number; paymentStatus: string }) => 
          order.paymentStatus === 'paid' ? sum + order.amount : sum, 0
        )

        const pendingOrders = orders.filter((order: { status: string }) => order.status === 'pending').length
        const activeServices = services.filter((service: { isActive: boolean }) => service.isActive).length

        setStats({
          totalUsers: users.length,
          totalOrders: orders.length,
          totalServices: services.length,
          activeServices,
          totalRevenue,
          pendingOrders
        })

        setRecentActivities(activitiesData.activities || [])
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error)
    } finally {
      setLoading(false)
    }
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

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {session.user?.name}! Here&apos;s what&apos;s happening with your business.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalUsers || 0}</div>
            <p className="text-xs text-muted-foreground">
              Registered users in system
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalOrders || 0}</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                {stats?.pendingOrders || 0} pending
              </Badge>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalServices || 0}</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="default" className="text-xs">
                {stats?.activeServices || 0} active
              </Badge>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{stats?.totalRevenue?.toLocaleString() || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              From paid orders
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <button 
              onClick={() => router.push('/admin/users')}
              className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors"
            >
              <div className="font-medium">Manage Users</div>
              <div className="text-sm text-muted-foreground">View and edit user accounts</div>
            </button>
            <button 
              onClick={() => router.push('/admin/orders')}
              className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors"
            >
              <div className="font-medium">View Orders</div>
              <div className="text-sm text-muted-foreground">Track customer orders</div>
            </button>            <button 
              onClick={() => router.push('/admin/services')}
              className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors"
            >
              <div className="font-medium">Manage Services</div>
              <div className="text-sm text-muted-foreground">Add and edit services</div>
            </button>
            <button 
              onClick={() => router.push('/admin/document-categories')}
              className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors"
            >
              <div className="font-medium">Document Categories</div>
              <div className="text-sm text-muted-foreground">Manage document categories</div>
            </button>
          </CardContent>
        </Card>        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest administrative actions</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push('/admin/activities')}
            >
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            {recentActivities.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                No recent activities found.
              </div>
            ) : (
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity._id} className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.adminId?.image || undefined} />
                      <AvatarFallback>
                        {activity.adminId?.name?.charAt(0).toUpperCase() || 'S'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm">
                        <span className="font-medium">
                          {activity.adminId?.name || 'System'}
                        </span>
                        {' '}
                        <Badge variant="outline" className="text-xs ml-1">
                          {activity.action}
                        </Badge>
                        {' '}
                        <span className="text-muted-foreground">
                          {activity.resource}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {activity.details}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(activity.createdAt).toLocaleDateString()} at{' '}
                        {new Date(activity.createdAt).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Database</span>
                <Badge variant="default">Connected</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Authentication</span>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Services</span>
                <Badge variant="default">Operational</Badge>
              </div>
            </div>          </CardContent>
        </Card>
      </div>
    </div>
  )
}
