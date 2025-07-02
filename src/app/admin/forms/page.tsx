"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  FileText,
  Search,
  Filter,
  Eye,
  Calendar,
  Users,
  Phone,
  Mail,
  MapPin,
  Building,
  Package,
  Clock,
  CheckCircle,
  UserCheck,
  XCircle,
  MessageSquare,
  Download,
  Trash2,
  Edit,
  Printer,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";

interface FormSubmission {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  page: string;
  source: string;
  formType: string;
  state?: string;
  city?: string;
  companyType?: string;
  hearAbout?: string;
  package?: string;
  additionalData?: Record<string, unknown>;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  notes?: string;
  assignedTo?: {
    _id: string;
    name: string;
    email: string;
  };
  contactedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

const FormsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 50,
    total: 0,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    source: 'all',
    status: 'all',
    startDate: '',
    endDate: '',
    search: '',
  });
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Check authentication and admin role
  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/');
      return;
    }

    const userRole = (session.user as { role?: string })?.role;
    if (userRole !== 'admin') {
      router.push('/dashboard');
      return;
    }
  }, [session, status, router]);

  // Fetch form submissions
  const fetchSubmissions = async () => {
    if (!session) return;
    
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(filters.source !== 'all' && { source: filters.source }),
        ...(filters.status !== 'all' && { status: filters.status }),
        ...(filters.startDate && { startDate: filters.startDate }),
        ...(filters.endDate && { endDate: filters.endDate }),
      });

      const response = await fetch(`/api/forms/submit?${params}`);
      if (!response.ok) throw new Error('Failed to fetch submissions');
      
      const data = await response.json();
      setSubmissions(data.submissions);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast.error('Failed to load form submissions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [session, pagination.page, filters]);

  // Update submission status
  const updateSubmissionStatus = async (id: string, status: string, notes?: string) => {
    setUpdating(true);
    try {
      const response = await fetch(`/api/admin/forms/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          status, 
          notes,
          contactedAt: status === 'contacted' ? new Date().toISOString() : undefined 
        }),
      });

      if (!response.ok) throw new Error('Failed to update submission');
      
      toast.success('Submission updated successfully');
      fetchSubmissions();
      setShowDetails(false);
    } catch (error) {
      console.error('Error updating submission:', error);
      toast.error('Failed to update submission');
    } finally {
      setUpdating(false);
    }
  };

  // Print functionality
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Form Submissions Report - ${currentDate}</title>
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
          .filters { 
            margin: 15px 0; 
            padding: 10px;
            background-color: #f1f5f9;
            border: 1px solid #cbd5e1;
            font-size: 10px;
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
          .status-new { color: #2563eb; }
          .status-contacted { color: #d97706; }
          .status-converted { color: #059669; }
          .status-closed { color: #6b7280; }
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
          <h1>The Expert India - Form Submissions Report</h1>
          <p>Generated on ${currentDate} at ${currentTime}</p>
        </div>
        
        <div class="stats">
          <div class="stat-item">
            <div class="stat-number">${pagination.total}</div>
            <div class="stat-label">Total Submissions</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${filteredSubmissions.filter(s => s.status === 'new').length}</div>
            <div class="stat-label">New</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${filteredSubmissions.filter(s => s.status === 'contacted').length}</div>
            <div class="stat-label">Contacted</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${filteredSubmissions.filter(s => s.status === 'converted').length}</div>
            <div class="stat-label">Converted</div>
          </div>
        </div>
        
        ${Object.values(filters).some(f => f && f !== 'all') ? `
        <div class="filters">
          <strong>Applied Filters:</strong>
          ${filters.source !== 'all' ? `Source: ${getSourceDisplayName(filters.source)} | ` : ''}
          ${filters.status !== 'all' ? `Status: ${filters.status} | ` : ''}
          ${filters.startDate ? `Start Date: ${filters.startDate} | ` : ''}
          ${filters.endDate ? `End Date: ${filters.endDate} | ` : ''}
          ${filters.search ? `Search: "${filters.search}"` : ''}
        </div>
        ` : ''}
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Source</th>
              <th>Type</th>
              <th>Details</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${filteredSubmissions.map(submission => `
              <tr>
                <td><strong>${submission.name}</strong></td>
                <td>
                  ${submission.email}<br>
                  ${submission.mobile}
                </td>
                <td>
                  ${getSourceDisplayName(submission.source)}<br>
                  <small>${submission.page}</small>
                </td>
                <td>${submission.formType}</td>
                <td>
                  ${submission.state ? `📍 ${submission.state}<br>` : ''}
                  ${submission.companyType ? `🏢 ${submission.companyType}<br>` : ''}
                  ${submission.package ? `📦 ${submission.package}` : ''}
                </td>
                <td class="status-${submission.status}">${submission.status.toUpperCase()}</td>
                <td>${new Date(submission.createdAt).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="footer">
          <p>The Expert India - Professional Business Services | Generated from Admin Panel</p>
          <p>Total Records: ${filteredSubmissions.length} | Page: ${pagination.page} of ${pagination.pages}</p>
        </div>
      </body>
      </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  // Get status badge variant
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">New</Badge>;
      case 'contacted':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Contacted</Badge>;
      case 'converted':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Converted</Badge>;
      case 'closed':
        return <Badge variant="secondary" className="bg-gray-100 text-gray-800">Closed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // Get source display name
  const getSourceDisplayName = (source: string) => {
    return source
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Filter submissions based on search
  const filteredSubmissions = submissions.filter(submission => {
    if (!filters.search) return true;
    const searchLower = filters.search.toLowerCase();
    return (
      submission.name.toLowerCase().includes(searchLower) ||
      submission.email.toLowerCase().includes(searchLower) ||
      submission.mobile.includes(filters.search) ||
      submission.source.toLowerCase().includes(searchLower)
    );
  });

  if (status === 'loading' || !session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">Form Submissions</h1>
          <p className="text-muted-foreground">
            Manage and track all form submissions from your website
          </p>
        </div>
        <Button
          onClick={handlePrint}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Printer className="h-4 w-4" />
          Print Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pagination.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {submissions.filter(s => s.status === 'new').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contacted</CardTitle>
            <UserCheck className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {submissions.filter(s => s.status === 'contacted').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Converted</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {submissions.filter(s => s.status === 'converted').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div>
              <Label>Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Name, email, mobile..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-8"
                />
              </div>
            </div>
            <div>
              <Label>Source</Label>
              <Select value={filters.source} onValueChange={(value) => setFilters(prev => ({ ...prev, source: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="All sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All sources</SelectItem>
                  <SelectItem value="company-registration">Company Registration</SelectItem>
                  <SelectItem value="gst-registration">GST Registration</SelectItem>
                  <SelectItem value="trademark-registration">Trademark Registration</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Start Date</Label>
              <Input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="date"
                value={filters.endDate}
                onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => setFilters({ source: 'all', status: 'all', startDate: '', endDate: '', search: '' })}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submissions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Form Submissions ({filteredSubmissions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact Info</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => (
                    <TableRow key={submission._id}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{submission.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {submission.email}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Phone className="h-3 w-3 mr-1" />
                            {submission.mobile}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{getSourceDisplayName(submission.source)}</div>
                          <div className="text-sm text-muted-foreground">{submission.page}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{submission.formType}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {submission.state && (
                            <div className="text-sm flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {submission.state}
                            </div>
                          )}
                          {submission.companyType && (
                            <div className="text-sm flex items-center">
                              <Building className="h-3 w-3 mr-1" />
                              {submission.companyType}
                            </div>
                          )}
                          {submission.package && (
                            <div className="text-sm flex items-center">
                              <Package className="h-3 w-3 mr-1" />
                              {submission.package}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(submission.status)}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedSubmission(submission);
                            setShowDetails(true);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-muted-foreground">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
                {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} results
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  disabled={pagination.page === 1}
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  disabled={pagination.page === pagination.pages}
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Submission Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Form Submission Details</DialogTitle>
            <DialogDescription>
              View and manage form submission from {selectedSubmission?.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Name</Label>
                  <div className="text-sm mt-1">{selectedSubmission.name}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <div className="text-sm mt-1">{selectedSubmission.email}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Mobile</Label>
                  <div className="text-sm mt-1">{selectedSubmission.mobile}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">State</Label>
                  <div className="text-sm mt-1">{selectedSubmission.state || 'Not provided'}</div>
                </div>
              </div>

              {/* Submission Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Source</Label>
                  <div className="text-sm mt-1">{getSourceDisplayName(selectedSubmission.source)}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Form Type</Label>
                  <div className="text-sm mt-1">{selectedSubmission.formType}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Page</Label>
                  <div className="text-sm mt-1">{selectedSubmission.page}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Date</Label>
                  <div className="text-sm mt-1">
                    {new Date(selectedSubmission.createdAt).toLocaleDateString()} at{' '}
                    {new Date(selectedSubmission.createdAt).toLocaleTimeString()}
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              {(selectedSubmission.companyType || selectedSubmission.hearAbout || selectedSubmission.package) && (
                <div>
                  <Label className="text-sm font-medium">Additional Information</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {selectedSubmission.companyType && (
                      <div className="text-sm">
                        <span className="font-medium">Company Type:</span> {selectedSubmission.companyType}
                      </div>
                    )}
                    {selectedSubmission.hearAbout && (
                      <div className="text-sm">
                        <span className="font-medium">Heard About:</span> {selectedSubmission.hearAbout}
                      </div>
                    )}
                    {selectedSubmission.package && (
                      <div className="text-sm">
                        <span className="font-medium">Package:</span> {selectedSubmission.package}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Status Management */}
              <div className="space-y-4 border-t pt-4">
                <div>
                  <Label className="text-sm font-medium">Current Status</Label>
                  <div className="mt-2">{getStatusBadge(selectedSubmission.status)}</div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Update Status</Label>
                  <div className="flex gap-2 mt-2">
                    <Button
                      size="sm"
                      variant={selectedSubmission.status === 'contacted' ? 'default' : 'outline'}
                      onClick={() => updateSubmissionStatus(selectedSubmission._id, 'contacted')}
                      disabled={updating}
                    >
                      Mark as Contacted
                    </Button>
                    <Button
                      size="sm"
                      variant={selectedSubmission.status === 'converted' ? 'default' : 'outline'}
                      onClick={() => updateSubmissionStatus(selectedSubmission._id, 'converted')}
                      disabled={updating}
                    >
                      Mark as Converted
                    </Button>
                    <Button
                      size="sm"
                      variant={selectedSubmission.status === 'closed' ? 'default' : 'outline'}
                      onClick={() => updateSubmissionStatus(selectedSubmission._id, 'closed')}
                      disabled={updating}
                    >
                      Mark as Closed
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-sm font-medium">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Add notes about this submission..."
                    defaultValue={selectedSubmission.notes || ''}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button variant="outline" onClick={() => setShowDetails(false)}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    const textarea = document.getElementById('notes') as HTMLTextAreaElement;
                    updateSubmissionStatus(selectedSubmission._id, selectedSubmission.status, textarea.value);
                  }}
                  disabled={updating}
                >
                  {updating ? 'Saving...' : 'Save Notes'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormsPage;
