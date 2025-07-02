"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import confetti from 'canvas-confetti'
import { CheckCircle, Home, User, Phone, Mail, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'


  const SuccessPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { data: session, status } = useSession();
    const [mounted, setMounted] = useState(false);
    type Order = {
      _id: string;
      serviceName: string;
      status: string;
      user?: string;
      // add other fields as needed
    };
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const orderId = searchParams.get('orderId');
    // serviceName will be fetched from order, not from query
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    useEffect(() => {
      if (!orderId || status === 'loading') return;
      if (!session) {
        router.replace('/');
        return;
      }
      // Fetch order details from API
      const fetchOrder = async () => {
        setLoading(true);
        setError('');
        try {
          const res = await fetch(`/api/orders/${orderId}`);
          if (!res.ok) throw new Error('Order not found');
          const data = await res.json();
          // Check if order is paid and belongs to user
          if (data.status !== 'paid') throw new Error('Order not paid');
          if (data.user && session.user && data.user !== session.user.email) {
            throw new Error('Unauthorized');
          }
          setOrder(data);
        } catch {
          setError('Invalid or unpaid order.');
        } finally {
          setLoading(false);
        }
      };
      fetchOrder();
    }, [orderId, session, status, router]);
  
    useEffect(() => {
      if (!order) return;
      // Fire a single, short confetti burst and clean up on unmount
      const runConfetti = () => {
        confetti({
          particleCount: 120,
          spread: 70,
          startVelocity: 50,
          gravity: 0.7,
          origin: { x: 0.5, y: 1.1 },
          colors: ['#22c55e', '#16a34a', '#15803d', '#fbbf24', '#f59e0b', '#3b82f6']
        });
        confetti({
          particleCount: 60,
          spread: 50,
          startVelocity: 40,
          gravity: 0.7,
          origin: { x: 0.1, y: 1.1 },
          colors: ['#22c55e', '#16a34a', '#fbbf24', '#f59e0b']
        });
        confetti({
          particleCount: 60,
          spread: 50,
          startVelocity: 40,
          gravity: 0.7,
          origin: { x: 0.9, y: 1.1 },
          colors: ['#22c55e', '#16a34a', '#fbbf24', '#f59e0b']
        });
      };
      const confettiTimeout = setTimeout(runConfetti, 400);
      return () => {
        clearTimeout(confettiTimeout);
        if (confetti.reset) confetti.reset();
      };
    }, [order]);
  
    if (!mounted || status === 'loading' || loading) {
      return (
        <div className="container mx-auto p-6 max-w-2xl text-center flex flex-col items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600 mb-6"></div>
          <div className="text-2xl font-bold mb-2 text-green-700">Loading your order...</div>
          <p className="text-muted-foreground mb-4">Please wait while we verify your payment and order details.<br/>Do not close or refresh this page.</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="container mx-auto p-6 max-w-2xl text-center">
          <div className="text-2xl font-bold text-red-600 mb-4">Access Denied</div>
          <p className="mb-6">{error}</p>
          <Button onClick={() => router.push('/dashboard')}>{'Back to Dashboard'}</Button>
        </div>
      );
    }
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-green-600 mb-2">Payment Successful!</h1>
          <p className="text-xl text-muted-foreground">Your order has been placed successfully</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Order Confirmation</CardTitle>
              <CardDescription>Your order details and next steps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Order ID</span>
                    <Badge variant="outline">{order?._id || orderId}</Badge>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Service</span>
                    <span className="font-medium">{order?.serviceName || ''}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <Badge variant="default">Processing</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Payment</span>
                    <Badge variant="default" className="bg-green-600">Paid</Badge>
                  </div>
                </div>
                <hr />
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      Our team will review your order within 24 hours
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      You&apos;ll receive an email with detailed next steps
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      We&apos;ll contact you if any additional documents are needed
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      Track your progress in your profile
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Our team will contact you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Phone Support</div>
                    <div className="text-sm text-muted-foreground">+91 70233 14773</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-muted-foreground">support@theexpertindia.com</div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2">📞 Expect Our Call</h4>
                  <p className="text-sm text-yellow-800">
                    Our expert team will contact you within the next 2-4 hours to discuss 
                    your requirements and guide you through the process.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">✅ Service Guarantee</h4>
                  <p className="text-sm text-green-800">
                    We guarantee professional service delivery and complete customer satisfaction. 
                    If you&apos;re not satisfied, we offer a full refund.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Card>
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-4">Thank you for choosing The Expert India!</h3>
              <p className="text-muted-foreground mb-6">
                Your trust in our services means everything to us. We&apos;re committed to delivering 
                exceptional results and making your business journey smooth and successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => router.push('/profile')}
                  variant="default"
                  size="lg"
                >
                  <User className="h-4 w-4 mr-2" />
                  View Profile
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button 
                  onClick={() => router.push('/dashboard')}
                  variant="outline"
                  size="lg"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Hidden confetti container */}
        <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50" />
      </div>
    );
  };
  
  export default SuccessPage;
