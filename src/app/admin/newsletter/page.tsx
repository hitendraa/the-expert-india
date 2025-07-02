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
import { Label } from "@/components/ui/label";
import {
  Mail,
  Search,
  Filter,
  Eye,
  Users,
  UserCheck,
  UserX,
  AlertCircle,
  Download,
  Plus,
  Calendar,
  TrendingUp,
  Printer,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";

interface NewsletterSubscriber {
  _id: string;
  email: string;
  name?: string;
  mobile?: string;
  source: 'newsletter' | 'form_submission' | 'registration' | 'manual';
  sourceDetails?: {
    formType?: string;
    page?: string;
    registrationType?: string;
  };
  status: 'active' | 'unsubscribed' | 'bounced';
  tags?: string[];
  subscribedAt: string;
  unsubscribedAt?: string;
  lastEmailSent?: string;
  emailsSent: number;
  createdAt: string;
  updatedAt: string;
}

interface NewsletterStats {
  total: number;
  active: number;
  unsubscribed: number;
  bounced: number;
  bySource: Record<string, number>;
  recentSubscriptions: number;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

const NewsletterPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [stats, setStats] = useState<NewsletterStats | null>(null);
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
  const [selectedSubscriber, setSelectedSubscriber] = useState<NewsletterSubscriber | null>(null);
  const [showDetails, setShowDetails] = useState(false);

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

  // Fetch newsletter subscribers
  const fetchSubscribers = async () => {
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
        ...(filters.search && { search: filters.search }),
      });

      const response = await fetch(`/api/newsletter?${params}`);
      if (!response.ok) throw new Error('Failed to fetch subscribers');
      
      const data = await response.json();
      setSubscribers(data.subscribers);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      toast.error('Failed to load newsletter subscribers');
    } finally {
      setLoading(false);
    }
  };

  // Fetch newsletter stats
  const fetchStats = async () => {
    if (!session) return;
    
    try {
      const response = await fetch('/api/newsletter/stats');
      if (!response.ok) throw new Error('Failed to fetch stats');
      
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, [session, pagination.page, filters]);

  useEffect(() => {
    fetchStats();
  }, [session]);

  // Get status badge variant
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>;
      case 'unsubscribed':
        return <Badge variant="secondary" className="bg-gray-100 text-gray-800">Unsubscribed</Badge>;
      case 'bounced':
        return <Badge variant="secondary" className="bg-red-100 text-red-800">Bounced</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // Get source display name
  const getSourceDisplayName = (source: string) => {
    switch (source) {
      case 'newsletter': return 'Newsletter Signup';
      case 'form_submission': return 'Form Submission';
      case 'registration': return 'User Registration';
      case 'manual': return 'Manual Addition';
      default: return source;
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
        <title>Newsletter Subscribers Report - ${currentDate}</title>
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
          .source-breakdown {
            display: flex;
            justify-content: space-around;
            margin: 15px 0;
            padding: 10px;
            background-color: #f1f5f9;
            border: 1px solid #cbd5e1;
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
          .status-active { color: #059669; }
          .status-unsubscribed { color: #6b7280; }
          .status-bounced { color: #dc2626; }
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
          <h1>The Expert India - Newsletter Subscribers Report</h1>
          <p>Generated on ${currentDate} at ${currentTime}</p>
        </div>
        
        ${stats ? `
        <div class="stats">
          <div class="stat-item">
            <div class="stat-number">${stats.total}</div>
            <div class="stat-label">Total Subscribers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${stats.active}</div>
            <div class="stat-label">Active</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${stats.unsubscribed}</div>
            <div class="stat-label">Unsubscribed</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${stats.recentSubscriptions}</div>
            <div class="stat-label">Recent (7 days)</div>
          </div>
        </div>
        
        <div class="source-breakdown">
          ${Object.entries(stats.bySource).map(([source, count]) => `
            <div class="stat-item">
              <div class="stat-number">${count}</div>
              <div class="stat-label">${getSourceDisplayName(source)}</div>
            </div>
          `).join('')}
        </div>
        ` : ''}
        
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
              <th>Email</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Source</th>
              <th>Status</th>
              <th>Emails Sent</th>
              <th>Subscribed Date</th>
            </tr>
          </thead>
          <tbody>
            ${subscribers.map(subscriber => `
              <tr>
                <td><strong>${subscriber.email}</strong></td>
                <td>${subscriber.name || 'N/A'}</td>
                <td>${subscriber.mobile || 'N/A'}</td>
                <td>
                  ${getSourceDisplayName(subscriber.source)}<br>
                  ${subscriber.sourceDetails?.formType ? `<small>${subscriber.sourceDetails.formType}</small><br>` : ''}
                  ${subscriber.sourceDetails?.page ? `<small>${subscriber.sourceDetails.page}</small>` : ''}
                </td>
                <td class="status-${subscriber.status}">${subscriber.status.toUpperCase()}</td>
                <td style="text-align: center;">${subscriber.emailsSent}</td>
                <td>${new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="footer">
          <p>The Expert India - Professional Business Services | Generated from Admin Panel</p>
          <p>Total Records: ${subscribers.length} | Page: ${pagination.page} of ${pagination.pages}</p>
        </div>
      </body>
      </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

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
          <h1 className="text-3xl font-bold mb-2">Newsletter Subscribers</h1>
          <p className="text-muted-foreground">
            Manage and track all newsletter subscribers and promotional contacts
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
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active</CardTitle>
              <UserCheck className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.active}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unsubscribed</CardTitle>
              <UserX className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-600">
                {stats.unsubscribed}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent (7 days)</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {stats.recentSubscriptions}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Source breakdown */}
      {stats && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Subscribers by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(stats.bySource).map(([source, count]) => (
                <div key={source} className="text-center">
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-sm text-muted-foreground">
                    {getSourceDisplayName(source)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

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
                  placeholder="Email, name..."
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
                  <SelectItem value="newsletter">Newsletter Signup</SelectItem>
                  <SelectItem value="form_submission">Form Submission</SelectItem>
                  <SelectItem value="registration">User Registration</SelectItem>
                  <SelectItem value="manual">Manual Addition</SelectItem>
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                  <SelectItem value="bounced">Bounced</SelectItem>
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

      {/* Subscribers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Newsletter Subscribers ({pagination.total})</CardTitle>
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
                    <TableHead>Subscriber</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Emails Sent</TableHead>
                    <TableHead>Subscribed</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscribers.map((subscriber) => (
                    <TableRow key={subscriber._id}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {subscriber.email}
                          </div>
                          {subscriber.name && (
                            <div className="text-sm text-muted-foreground">
                              {subscriber.name}
                            </div>
                          )}
                          {subscriber.mobile && (
                            <div className="text-sm text-muted-foreground">
                              {subscriber.mobile}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{getSourceDisplayName(subscriber.source)}</div>
                          {subscriber.sourceDetails?.formType && (
                            <div className="text-sm text-muted-foreground">
                              {subscriber.sourceDetails.formType}
                            </div>
                          )}
                          {subscriber.sourceDetails?.page && (
                            <div className="text-sm text-muted-foreground">
                              {subscriber.sourceDetails.page}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(subscriber.status)}</TableCell>
                      <TableCell>
                        <div className="text-center">{subscriber.emailsSent}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {formatDistanceToNow(new Date(subscriber.subscribedAt), { addSuffix: true })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedSubscriber(subscriber);
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

      {/* Subscriber Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Subscriber Details</DialogTitle>
            <DialogDescription>
              View subscriber information and history
            </DialogDescription>
          </DialogHeader>
          
          {selectedSubscriber && (
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <div className="text-sm mt-1">{selectedSubscriber.email}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Name</Label>
                  <div className="text-sm mt-1">{selectedSubscriber.name || 'Not provided'}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Mobile</Label>
                  <div className="text-sm mt-1">{selectedSubscriber.mobile || 'Not provided'}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedSubscriber.status)}</div>
                </div>
              </div>

              {/* Source Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Source</Label>
                  <div className="text-sm mt-1">{getSourceDisplayName(selectedSubscriber.source)}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Subscribed</Label>
                  <div className="text-sm mt-1">
                    {new Date(selectedSubscriber.subscribedAt).toLocaleDateString()} at{' '}
                    {new Date(selectedSubscriber.subscribedAt).toLocaleTimeString()}
                  </div>
                </div>
                {selectedSubscriber.sourceDetails?.formType && (
                  <div>
                    <Label className="text-sm font-medium">Form Type</Label>
                    <div className="text-sm mt-1">{selectedSubscriber.sourceDetails.formType}</div>
                  </div>
                )}
                {selectedSubscriber.sourceDetails?.page && (
                  <div>
                    <Label className="text-sm font-medium">Source Page</Label>
                    <div className="text-sm mt-1">{selectedSubscriber.sourceDetails.page}</div>
                  </div>
                )}
              </div>

              {/* Email Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Emails Sent</Label>
                  <div className="text-sm mt-1">{selectedSubscriber.emailsSent}</div>
                </div>
                {selectedSubscriber.lastEmailSent && (
                  <div>
                    <Label className="text-sm font-medium">Last Email Sent</Label>
                    <div className="text-sm mt-1">
                      {new Date(selectedSubscriber.lastEmailSent).toLocaleDateString()}
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              {selectedSubscriber.tags && selectedSubscriber.tags.length > 0 && (
                <div>
                  <Label className="text-sm font-medium">Tags</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedSubscriber.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-4 border-t">
                <Button variant="outline" onClick={() => setShowDetails(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewsletterPage;
