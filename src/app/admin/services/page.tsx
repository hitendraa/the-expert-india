"use client"

import { useState, useEffect } from "react"
import { Plus, Search, MoreHorizontal, Eye, ToggleLeft, ToggleRight, Settings, ChevronLeft, ChevronRight } from "lucide-react"
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
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface DocumentCategory {
  _id: string;
  name: string;
  description?: string;
}

export default function ServicesPage() {
  const [docCategories, setDocCategories] = useState<DocumentCategory[]>([]);

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

interface ServicesResponse {
  services: Service[]
  pagination: {
    page: number
    limit: number
    totalCount: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    docsRequired: [] as string[],
    price: 0,
    sellPrice: undefined as number | undefined,
    isActive: true
  })
  const [addForm, setAddForm] = useState({
    name: "",
    description: "",
    docsRequired: [] as string[],
    price: 0,
    sellPrice: undefined as number | undefined,
    isActive: true
  })
  const [newDoc, setNewDoc] = useState("")
  const [editNewDoc, setEditNewDoc] = useState("")

  const fetchServices = async () => {
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      })
      
      const response = await fetch(`/api/admin/services?${params}`)
      if (response.ok) {
        const data: ServicesResponse = await response.json()
        setServices(data.services)
        setPagination(data.pagination)
      } else {
        toast.error('Failed to fetch services')
      }
    } catch {
      toast.error('Error fetching services')
    } finally {
      setLoading(false)
    }
  }

  // Add useEffect with proper dependencies
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchServices();
    fetch('/api/document-categories')
      .then(res => res.json())
      .then(data => setDocCategories(data))
      .catch(() => setDocCategories([]));
  }, [pagination.page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }))
    }
  }

  const handleViewService = (service: Service) => {
    setSelectedService(service)
    setEditForm({
      name: service.name,
      description: service.description,
      docsRequired: [...service.docsRequired],
      price: service.price,
      sellPrice: service.sellPrice,
      isActive: service.isActive
    })
    setIsEditing(false)
    setIsDialogOpen(true)
  }

  const handleEditService = () => {
    setIsEditing(true)
  }

  const handleSaveService = async () => {
    if (!selectedService) return

    try {
      const response = await fetch(`/api/admin/services/${selectedService._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      })

      if (response.ok) {
        toast.success('Service updated successfully')
        fetchServices()
        setIsDialogOpen(false)
        setIsEditing(false)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to update service')
      }
    } catch {
      toast.error('Error updating service')
    }
  }

  const handleAddService = async () => {
    try {
      const response = await fetch('/api/admin/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addForm),
      })

      if (response.ok) {
        toast.success('Service added successfully')
        fetchServices()
        setIsAddDialogOpen(false)
        setAddForm({
          name: "",
          description: "",
          docsRequired: [],
          price: 0,
          sellPrice: undefined,
          isActive: true
        })
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to add service')
      }
    } catch {
      toast.error('Error adding service')
    }
  }

  const handleDeleteService = async (serviceId: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return

    try {
      const response = await fetch(`/api/admin/services/${serviceId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Service deleted successfully')
        fetchServices()
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to delete service')
      }
    } catch {
      toast.error('Error deleting service')
    }
  }

  const handleToggleService = async (serviceId: string, currentStatus: boolean) => {
    try {
      const service = services.find(s => s._id === serviceId)
      if (!service) return

      const response = await fetch(`/api/admin/services/${serviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...service,
          isActive: !currentStatus
        }),
      })

      if (response.ok) {
        toast.success(`Service ${!currentStatus ? 'activated' : 'deactivated'} successfully`)
        fetchServices()
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to toggle service')
      }
    } catch {
      toast.error('Error toggling service')
    }
  }

  const addDocument = (isEdit: boolean) => {
    const doc = isEdit ? editNewDoc : newDoc
    if (!doc.trim()) return

    if (isEdit) {
      setEditForm({
        ...editForm,
        docsRequired: [...editForm.docsRequired, doc.trim()]
      })
      setEditNewDoc("")
    } else {
      setAddForm({
        ...addForm,
        docsRequired: [...addForm.docsRequired, doc.trim()]
      })
      setNewDoc("")
    }
  }

  const removeDocument = (index: number, isEdit: boolean) => {
    if (isEdit) {
      setEditForm({
        ...editForm,
        docsRequired: editForm.docsRequired.filter((_, i) => i !== index)
      })
    } else {
      setAddForm({
        ...addForm,
        docsRequired: addForm.docsRequired.filter((_, i) => i !== index)
      })
    }
  }

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <div className="text-lg">Loading services...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-muted-foreground">Manage your service offerings and pricing</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Sell Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>          <TableBody>
            {filteredServices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24">
                  <div className="flex flex-col items-center justify-center text-center">
                    <Settings className="h-12 w-12 text-muted-foreground mb-2" />
                    <h3 className="font-semibold text-lg mb-1">No services found</h3>
                    <p className="text-muted-foreground mb-4">
                      {searchTerm ? "No services match your search criteria." : "Get started by adding your first service."}
                    </p>
                    {!searchTerm && (
                      <Button onClick={() => setIsAddDialogOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Service
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredServices.map((service) => (
              <TableRow key={service._id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{service.name}</div>
                    <div className="text-sm text-muted-foreground line-clamp-2">
                      {service.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">₹{service.price.toLocaleString()}</div>
                </TableCell>
                <TableCell>
                  {service.sellPrice ? (
                    <div className="font-medium text-green-600">₹{service.sellPrice.toLocaleString()}</div>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge variant={service.isActive ? 'default' : 'secondary'}>
                      {service.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleToggleService(service._id, service.isActive)}
                    >
                      {service.isActive ? 
                        <ToggleRight className="h-4 w-4 text-green-600" /> : 
                        <ToggleLeft className="h-4 w-4 text-gray-400" />
                      }
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{service.docsRequired.length} required</div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewService(service)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDeleteService(service._id)}
                        className="text-destructive"
                      >
                        Delete Service
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>                </TableCell>
              </TableRow>
            ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          {pagination.totalCount > 0 && (
            <>
              Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
              {Math.min(pagination.page * pagination.limit, pagination.totalCount)} of{' '}
              {pagination.totalCount} services
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

      {/* View/Edit Service Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? 'Edit Service' : 'Service Details'}
            </DialogTitle>
            <DialogDescription>
              {isEditing ? 'Update service information and pricing.' : 'View detailed service information.'}
            </DialogDescription>
          </DialogHeader>
          {selectedService && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="edit-name">Service Name</Label>
                  <Input
                    id="edit-name"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    disabled={!isEditing}
                    rows={3}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-price">Price (₹)</Label>
                  <Input
                    id="edit-price"
                    type="number"
                    value={editForm.price}
                    onChange={(e) => setEditForm({ ...editForm, price: parseInt(e.target.value) || 0 })}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-sellPrice">Sell Price (₹)</Label>
                  <Input
                    id="edit-sellPrice"
                    type="number"
                    value={editForm.sellPrice || ""}
                    onChange={(e) => setEditForm({ 
                      ...editForm, 
                      sellPrice: e.target.value ? parseInt(e.target.value) : undefined 
                    })}
                    disabled={!isEditing}
                    placeholder="Optional reduced price"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="edit-active"
                  checked={editForm.isActive}
                  onCheckedChange={(checked) => setEditForm({ ...editForm, isActive: checked })}
                  disabled={!isEditing}
                />
                <Label htmlFor="edit-active">Service is active</Label>
              </div>

              <div>
                <Label>Required Documents</Label>
                <div className="mt-2 space-y-2">
                  {editForm.docsRequired.map((doc, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input value={doc} disabled className="flex-1" />
                      {isEditing && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeDocument(index, true)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Add new document requirement"
                        value={editNewDoc}
                        onChange={(e) => setEditNewDoc(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addDocument(true)}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addDocument(true)}
                      >
                        Add
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveService}>Save Changes</Button>
              </>
            ) : (
              <Button onClick={handleEditService}>Edit Service</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Service Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>
              Create a new service offering with pricing and requirements.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="add-name">Service Name</Label>
                <Input
                  id="add-name"
                  value={addForm.name}
                  onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
                  placeholder="Enter service name"
                />
              </div>
              <div>
                <Label htmlFor="add-description">Description</Label>
                <Textarea
                  id="add-description"
                  value={addForm.description}
                  onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                  placeholder="Enter service description"
                  rows={3}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="add-price">Price (₹)</Label>
                <Input
                  id="add-price"
                  type="number"
                  value={addForm.price}
                  onChange={(e) => setAddForm({ ...addForm, price: parseInt(e.target.value) || 0 })}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="add-sellPrice">Sell Price (₹)</Label>
                <Input
                  id="add-sellPrice"
                  type="number"
                  value={addForm.sellPrice || ""}
                  onChange={(e) => setAddForm({ 
                    ...addForm, 
                    sellPrice: e.target.value ? parseInt(e.target.value) : undefined 
                  })}
                  placeholder="Optional reduced price"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="add-active"
                checked={addForm.isActive}
                onCheckedChange={(checked) => setAddForm({ ...addForm, isActive: checked })}
              />
              <Label htmlFor="add-active">Service is active</Label>
            </div>

            <div>
              <Label>Required Documents</Label>
              <div className="mt-2 space-y-2">
                {addForm.docsRequired.map((doc, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input value={doc} disabled className="flex-1" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeDocument(index, false)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <Select
                    value={newDoc}
                    onValueChange={setNewDoc}
                  >
                    <SelectTrigger className="flex-1" >
                      <SelectValue placeholder="Select document category" />
                    </SelectTrigger>
                    <SelectContent>
                      {docCategories.map((cat) => (
                        <SelectItem key={cat._id} value={cat.name}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { if (newDoc) { addDocument(false); setNewDoc(""); } }}
                    disabled={!newDoc}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddService}
              disabled={!addForm.name || !addForm.description || addForm.price <= 0}
            >
              Add Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
