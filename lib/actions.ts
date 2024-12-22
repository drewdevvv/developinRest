'use server'

import { contactFormSchema } from '@/lib/schema'
import { z } from 'zod'

export async function contactFormAction(
  _prevState: unknown,
  formData: FormData
) {
  const defaultValues = Object.fromEntries(formData.entries())

  try {
    const data = contactFormSchema.parse(defaultValues)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Failed to send email')
    }

    const result = await response.json()

    if (!result.success) {
      throw new Error(result.message || 'Failed to send email')
    }

    return {
      defaultValues: {
        name: '',
        email: '',
        message: '',
      },
      success: true,
      errors: null,
    }
  } catch (error) {
    console.error('Form submission error:', error)

    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            value?.join(', '),
          ])
        ),
      }
    }

    return {
      defaultValues,
      success: false,
      errors: { form: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.' },
    }
  }
}

