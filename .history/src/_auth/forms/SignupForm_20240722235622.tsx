import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button'
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from '../../lib/validation/index';
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appwrite/api";





const SignupForm = () => {
  const isLoading = false;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newUser = await createUserAccount(values);
    if(!newUser){
      return;
    }
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">To use Snapgram enter your details</p>


        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          {/* form field Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Form field for username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Form field for email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Form field for password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
              {isLoading ? (
                <div className="flex-center gap-2">
                  <Loader/>
                </div>
              ):(
                "Sign up"
              )}
          </Button>
          <p className="text-small-regualr text-light-2 text-center mt-2">
            Already have an account? 
            <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
          </p>
        </form>
      </div >
    </Form>

  )
}

export default SignupForm