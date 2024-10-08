"use client";
import React from 'react'
import Header from '@/components/Home/Header'
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import {toast} from "@/hooks/use-toast"
// Define schema with zod
const formSchema = z.object({
  businessName: z.string().min(1, { message: "Field cannot be blank." }),
  businessType: z.string().min(1, { message: "Complete this field." }),
  businessBranch: z.string().min(1, { message: "Field cannot be blank." }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});


export default function VerifyBusiness() {
  // Initialize useForm
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });
  

  // Submit handler
  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div>
        <Header />
        <div className="w-screen h-screen grid grid-cols-4">
            {/* Left side Cover page */}
            <div className="relative col-span-2">
            <img 
                src="/travelTourLuggage.jpg" 
                alt="Cover Image" 
                className="absolute inset-0 w-full h-full object-cover " 
                />
            <div className="absolute inset-0 bg-customScBg opacity-50"></div>     
            </div>

            {/* Right side */}
            <div className="flex flex-col col-span-2 -400  justify-center items-center p-4">
              <h1 className="text-3xl font-bold mb-2">Tell us about your business</h1>
              <h3>This information will be shown on the app so that customers can search and contact you in case they have any questions.</h3>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                    {/* Business Name */}
                    <FormField 
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel >Your Business Name <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input  placeholder="Enter your business name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Business Type */}
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Type <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <span>Select your business type</span>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="service">Service</SelectItem>
                                <SelectItem value="food">Food</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Business Branch */}
                    <FormField 
                      control={form.control}
                      name="businessBranch"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel >Branches <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input  placeholder="Branches" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Business Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                          <FormLabel className="text-left">Phone Number</FormLabel>
                          <FormControl className="w-full">
                            <PhoneInput placeholder="Enter a phone number" {...field} />
                          </FormControl>
                          <FormDescription className="text-left">
                            Enter a phone number
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Business Location */}
                    <FormField 
                      control={form.control}
                      name="businessBranch"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel >Branches <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input  placeholder="Branches" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </form>
              </Form>
            </div>
            
        </div>
    </div>
    
  );
}
