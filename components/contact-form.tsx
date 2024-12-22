'use client'

import * as React from 'react'
import { useActionState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import { contactFormAction } from '@/lib/actions'
import { Check, AlertCircle } from 'lucide-react'

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction] = useActionState(contactFormAction, {
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    success: false,
    errors: null,
  })

  return (
    <AnimatePresence>
      {state.success ? (
        <motion.div
          initial={{ scale: 0, borderRadius: '0%' }}
          animate={{ scale: 1, borderRadius: '50%' }}
          exit={{ scale: 0, borderRadius: '0%' }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 bg-green-500 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Check className="text-white w-16 h-16" />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className={cn('w-full max-w-md', className)}>
            <CardHeader>
              <CardTitle>How can we help?</CardTitle>
              <CardDescription>
                Need help with your project? We&apos;re here to assist you.
              </CardDescription>
            </CardHeader>
            <form action={formAction}>
              <CardContent className="flex flex-col gap-6">
                {state.errors?.form && (
                  <p className="text-red-600 flex items-center gap-2 text-sm">
                    <AlertCircle className="size-4" />
                    {state.errors.form}
                  </p>
                )}
                <div
                  className="group/field grid gap-2"
                  data-invalid={!!state.errors?.name}
                >
                  <Label
                    htmlFor="name"
                    className="group-data-[invalid=true]/field:text-destructive"
                  >
                    Name <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name Please"
                    className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                    aria-invalid={!!state.errors?.name}
                    aria-errormessage="error-name"
                    defaultValue={state.defaultValues.name}
                  />
                  {state.errors?.name && (
                    <p id="error-name" className="text-destructive text-sm">
                      {state.errors.name}
                    </p>
                  )}
                </div>
                <div
                  className="group/field grid gap-2"
                  data-invalid={!!state.errors?.email}
                >
                  <Label
                    htmlFor="email"
                    className="group-data-[invalid=true]/field:text-destructive"
                  >
                    Email <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.ai"
                    className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                    aria-invalid={!!state.errors?.email}
                    aria-errormessage="error-email"
                    defaultValue={state.defaultValues.email}
                  />
                  {state.errors?.email && (
                    <p id="error-email" className="text-destructive text-sm">
                      {state.errors.email}
                    </p>
                  )}
                </div>
                <div
                  className="group/field grid gap-2"
                  data-invalid={!!state.errors?.message}
                >
                  <Label
                    htmlFor="message"
                    className="group-data-[invalid=true]/field:text-destructive"
                  >
                    Message <span aria-hidden="true">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                    aria-invalid={!!state.errors?.message}
                    aria-errormessage="error-message"
                    defaultValue={state.defaultValues.message}
                  />
                  {state.errors?.message && (
                    <p id="error-message" className="text-destructive text-sm">
                      {state.errors.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-[#4C9F70] hover:bg-[#3D8960] text-white">
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

