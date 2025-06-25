"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, Activity, User, Settings, Trash2, ShoppingCart } from "lucide-react"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

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
  ipAddress?: string
  userAgent?: string
  createdAt: string
}

interface Pagination {
  page: number
  limit: number
  total: number
  pages: number
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<ActivityLog[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [resourceFilter, setResourceFilter] = useState<string>("all")
  const [actionFilter, setActionFilter] = useState<string>("all")
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 50,
    total: 0,
    pages: 0
  })

  const fetchActivities = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      })
      
      if (resourceFilter !== "all") params.append('resource', resourceFilter)
      if (actionFilter !== "all") params.append('action', actionFilter)

      const response = await fetch(`/api/admin/activities?${params}`)
      if (response.ok) {
        const data = await response.json()
        setActivities(data.activities)
        setPagination(data.pagination)
      } else {
        toast.error('Failed to fetch activities')
      }
    } catch (error) {
      console.error('Error fetching activities:', error)
      toast.error('Error fetching activities')
    } finally {
      setLoading(false)
    }
  }, [pagination.page, pagination.limit, resourceFilter, actionFilter])

  useEffect(() => {
    fetchActivities()
  }, [fetchActivities])

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'create':
        return <User className="h-4 w-4 text-green-600" />
      case 'update':
        return <Settings className="h-4 w-4 text-blue-600" />
      case 'delete':
        return <Trash2 className="h-4 w-4 text-red-600" />
      case 'terminate_sessions':
        return <Activity className="h-4 w-4 text-orange-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  const getActionColor = (action: string) => {
    switch (action) {
      case 'create':
        return 'default'
      case 'update':
        return 'secondary'
      case 'delete':
        return 'destructive'
      case 'terminate_sessions':
        return 'outline'
      default:
        return 'outline'
    }
  }

  const getResourceIcon = (resource: string) => {
    switch (resource) {
      case 'user':
        return <User className="h-4 w-4" />
      case 'order':
        return <ShoppingCart className="h-4 w-4" />
      case 'service':
        return <Settings className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const filteredActivities = activities.filter(activity =>
    activity.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.adminId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.adminId?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.userId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.userId?.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }))
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <div className="text-lg">Loading activities...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Activity Log</h1>
          <p className="text-muted-foreground">Track all administrative actions and system activities</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pagination.total.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Actions</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activities.filter(a => a.resource === 'user').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Order Actions</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activities.filter(a => a.resource === 'order').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Service Actions</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activities.filter(a => a.resource === 'service').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        
        <Select value={resourceFilter} onValueChange={setResourceFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Resource" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Resources</SelectItem>
            <SelectItem value="user">Users</SelectItem>
            <SelectItem value="order">Orders</SelectItem>
            <SelectItem value="service">Services</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select value={actionFilter} onValueChange={setActionFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Actions</SelectItem>
            <SelectItem value="create">Create</SelectItem>
            <SelectItem value="update">Update</SelectItem>
            <SelectItem value="delete">Delete</SelectItem>
            <SelectItem value="terminate_sessions">Terminate Sessions</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => {
            setResourceFilter("all")
            setActionFilter("all")
            setSearchTerm("")
          }}
        >
          Clear Filters
        </Button>
      </div>

      {/* Activities Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Admin</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Resource</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>IP Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredActivities.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24">
                  <div className="flex flex-col items-center justify-center text-center">
                    <Activity className="h-12 w-12 text-muted-foreground mb-2" />
                    <h3 className="font-semibold text-lg mb-1">No activities found</h3>
                    <p className="text-muted-foreground">
                      {searchTerm || resourceFilter !== "all" || actionFilter !== "all" 
                        ? "No activities match your search criteria." 
                        : "Activity logs will appear here when administrative actions are performed."}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredActivities.map((activity) => (
                <TableRow key={activity._id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.adminId?.image || undefined} />
                        <AvatarFallback>
                          {activity.adminId?.name?.charAt(0).toUpperCase() || 'S'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {activity.adminId?.name || 'System'}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {activity.adminId?.email || 'system'}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getActionIcon(activity.action)}
                      <Badge variant={getActionColor(activity.action)}>
                        {activity.action.replace('_', ' ')}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getResourceIcon(activity.resource)}
                      <span className="capitalize">{activity.resource}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md">
                    <div className="truncate">{activity.details}</div>
                    {activity.userId && (
                      <div className="text-xs text-muted-foreground mt-1">
                        Target: {activity.userId.name} ({activity.userId.email})
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div>{new Date(activity.createdAt).toLocaleDateString()}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(activity.createdAt).toLocaleTimeString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs text-muted-foreground">
                      {activity.ipAddress || 'Unknown'}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
            {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
            {pagination.total} activities
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
            >
              Previous
            </Button>
            <div className="text-sm">
              Page {pagination.page} of {pagination.pages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page >= pagination.pages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
