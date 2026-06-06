"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormType } from "@/schema/contactSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader, Send, User, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import SpotlightCard from "../shared/SpotlightCard";

export default function ContactFormCard() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
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
          },
        });
        setTimeout(() => form.reset(), 100);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast.error("Gagal mengirim.", {
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SpotlightCard className="!p-0 border-primary/20">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-secondary/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
        </div>
        <div className="ml-4 flex items-center gap-2">
          <Send className="w-3 h-3 text-foreground/40" />
          <span className="text-[10px] font-mono text-foreground/40 tracking-wider">contact.form</span>
        </div>
      </div>
      <div className="p-8 md:p-10">
        <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">
          Send a Message
        </h3>
        <p className="text-sm text-foreground/60 mb-8">
          Have a question or want to work together? Fill out the form below.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-widest">
                    <User className="w-3 h-3" />
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      type="text"
                      className="mt-2 h-12 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                      placeholder="Your name (optional)"
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
                  <FormLabel className="flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-widest">
                    <Mail className="w-3 h-3" />
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      className="mt-2 h-12 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                      placeholder="your@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Honeypot field */}
            <div className="hidden" aria-hidden="true">
              <FormField
                control={form.control}
                name="honeypot"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        tabIndex={-1}
                        autoComplete="off"
                        placeholder="Do not fill this"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-widest">
                    <MessageSquare className="w-3 h-3" />
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      id="message"
                      rows={5}
                      className="mt-2 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl resize-none"
                      placeholder="Type your message"
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
              className="w-full h-12 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              {loading || form.formState.isSubmitting ? (
                <Loader className="animate-spin h-5 w-5" />
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </SpotlightCard>
  );
}