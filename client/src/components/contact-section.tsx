import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";

const contactFormSchema = insertContactInquirySchema.extend({
  firstName: insertContactInquirySchema.shape.firstName.min(2, "First name must be at least 2 characters"),
  lastName: insertContactInquirySchema.shape.lastName.min(2, "Last name must be at least 2 characters"),
  email: insertContactInquirySchema.shape.email.email("Please enter a valid email address"),
  message: insertContactInquirySchema.shape.message.min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      // Map projectType to subject and combine firstName/lastName into name
      const { projectType, firstName, lastName, ...rest } = data;
      const response = await axios.post('http://localhost:5000/api/v1/settings/message', {
        ...rest,
        subject: projectType,
        name: `${firstName} ${lastName}`.trim(),
        sheet: "Endorse 256 Services"
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Get In Touch</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Ready to start your next construction project? Contact us today for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">Phone</h4>
                  <p className="text-brand-text">+256776676761</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">Email</h4>
                  <p className="text-brand-text">goodhope@endorse256services.co.ug</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">Location</h4>
                  <p className="text-brand-text">Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">Business Hours</h4>
                  <p className="text-brand-text">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residential Construction</SelectItem>
                          <SelectItem value="commercial">Commercial Construction</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure Development</SelectItem>
                          <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                          <SelectItem value="consultation">Construction Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
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
                          placeholder="Please describe your project requirements..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-blue-700 text-white"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
