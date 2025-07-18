"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormType } from '@/schema/contactSchema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader } from './ui/card'
import { Loader } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactForm() {

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormType) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Pesan berhasil dikirim!", {
          duration: 2000,
          style: {
            backgroundColor: "oklch(0.92 0.004 286.32)",
            border: "2px solid oklch(0.627 0.265 303.9)",
            color: "oklch(0.627 0.265 303.9)",
          }
        });
        setTimeout(() => form.reset(), 100);  // Reset ke default values
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Gagal mengirim.", {
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Form Card */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">
            Contact Me
          </h2>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        className="w-full mt-2 focus-visible:border-ring focus-visible:ring-chart-4/60"
                        placeholder='Your name (optional)'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        className="w-full mt-2 focus-visible:border-ring focus-visible:ring-chart-4/60"
                        placeholder='your@gmail.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        rows={5}
                        className="w-full mt-2 focus-visible:border-ring focus-visible:ring-chart-4/60 resize-none"
                        placeholder='Type your message'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                variant="default" 
                type="submit" 
                disabled={loading || form.formState.isSubmitting} 
                className="cursor-pointer"
              >
                {loading || form.formState.isSubmitting ? (
                  <Loader className="animate-spin h-5 w-5 text-secondary" />
                ) : (
                  <span>Submit</span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}
