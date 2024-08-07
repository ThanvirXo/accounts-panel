"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form"
import { Eye, EyeOff, MailOpen } from "lucide-react";
import { useState } from "react";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";


const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(7, {
    message: "Password is required"
  })
})

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    console.log('hello')
  }

  return (
    <div className="relative min-h-screen">
      <div className=" flex items-center justify-center min-h-screen">
        <div className="w-[600px] bg-white shadow-lg ">
          <Card className="p-8 overflow-scroll-y h-auto ">
            <div className="flex justify-center">
              <Image
                src="https://cdn.theesports.club/TEC_Color_2.png"
                width={50}
                height={50}
                alt="logo"
              />
            </div>

            <CardHeader className="text-black text-2xl flex items-center font-bold">Welcome Back!</CardHeader>
            <p className="text-gray-600 flex justify-center mt-2">Sign in to continue</p>

            <Form {...form}>
              <form className="mt-6 space-y-4 flex flex-col items-center" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col items-center">
                      <FormLabel className="block text-gray-700 font-bold font-sans w-3/4 text-left">Email</FormLabel>
                      <FormControl>
                        <div className="w-3/4 relative">
                          <Input
                            {...field}
                            type="email"
                            className="w-full mt-1 px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <MailOpen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                        </div>
                      </FormControl>
                      <FormMessage {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col items-center">
                      <FormLabel className="block text-gray-700 font-bold font-sans w-3/4 text-left">Password</FormLabel>
                      <FormControl>
                        <div className="w-3/4 relative">
                          <Input
                            {...field}
                            type={passwordVisible ? "text" : "password"}
                            className="w-full mt-1 px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            onClick={() => setPasswordVisible((prev: any) => !prev)}
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                          >
                            {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage {...field} />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between w-3/4">


                </div>
                <Button className="w-3/4 bg-[#686cec] rounded-full hover:bg-blue-700 text-white py-2 mt-4">
                  Login
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}

