"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Github, Linkedin, Twitter } from 'lucide-react';
import SectionHeading from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const socialLinks = [
  { name: 'GitHub', icon: <Github className="w-8 h-8" />, url: 'https://github.com' },
  { name: 'LinkedIn', icon: <Linkedin className="w-8 h-8" />, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: <Twitter className="w-8 h-8" />, url: 'https://twitter.com' },
];

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading>Get In Touch</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-muted-foreground">
              Have a project in mind, a question, or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-14 h-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <Card className="bg-card/50 p-6 md:p-8 border-border/50">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
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
                          <Input type="email" placeholder="your.email@example.com" {...field} />
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
                          <Textarea placeholder="Your message here..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
