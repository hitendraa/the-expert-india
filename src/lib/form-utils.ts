// Utility functions for form submissions

export interface FormSubmissionData {
  name: string
  email: string
  mobile: string
  page: string
  source: string
  formType: string
  state?: string
  city?: string
  companyType?: string
  hearAbout?: string
  package?: string
  additionalData?: Record<string, unknown>
}

export const submitForm = async (data: FormSubmissionData) => {
  try {
    const response = await fetch('/api/forms/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form')
    }

    return result
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}

export const getFormSource = (pathname: string): string => {
  // Extract source from URL path
  if (pathname.includes('/services/company-registration')) return 'company-registration'
  if (pathname.includes('/services/gst-registration')) return 'gst-registration'
  if (pathname.includes('/services/trademark-registration')) return 'trademark-registration'
  if (pathname.includes('/services/llp-partnership')) return 'llp-partnership'
  if (pathname.includes('/services/one-person-company')) return 'one-person-company'
  if (pathname.includes('/services/private-company-registration')) return 'private-company-registration'
  if (pathname.includes('/services/public-limited-company')) return 'public-limited-company'
  if (pathname.includes('/services/section-8-company')) return 'section-8-company'
  if (pathname.includes('/services/fssai-registration')) return 'fssai-registration'
  if (pathname.includes('/services/fssai-renewal')) return 'fssai-renewal'
  if (pathname.includes('/services/iso-registration')) return 'iso-registration'
  if (pathname.includes('/services/iec-certificate')) return 'iec-certificate'
  if (pathname.includes('/services/online-iec-code')) return 'online-iec-code'
  if (pathname.includes('/services/online-copyright')) return 'online-copyright'
  if (pathname.includes('/services/trademark-assignment')) return 'trademark-assignment'
  if (pathname.includes('/services/trademark-objection')) return 'trademark-objection'
  if (pathname.includes('/services/trademark-opposition')) return 'trademark-opposition'
  if (pathname.includes('/services/trademark-renewal')) return 'trademark-renewal'
  
  // Default fallback
  const segments = pathname.split('/')
  if (segments.length >= 3 && segments[1] === 'services') {
    return segments[2]
  }
  
  return 'general'
}

export const validateFormData = (data: Partial<FormSubmissionData>): string[] => {
  const errors: string[] = []

  if (!data.name?.trim()) {
    errors.push('Name is required')
  }

  if (!data.email?.trim()) {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email format')
  }

  if (!data.mobile?.trim()) {
    errors.push('Mobile number is required')
  } else if (!/^\d{8,15}$/.test(data.mobile.replace(/[^\d]/g, ''))) {
    errors.push('Invalid mobile number format (8-15 digits required)')
  }

  return errors
}
