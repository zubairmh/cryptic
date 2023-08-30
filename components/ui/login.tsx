"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormField, FormItem, FormControl, FormLabel, FormDescription, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function Login() {

    const FormSchema = z.object({
        email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
        }),
        password: z.string()
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }
    return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="sm:w-1/4 w-1/2 space-y-6 mt-10">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Leader Email</FormLabel>
            <FormControl>
              <Input placeholder="parag@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
            <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Team Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="w-full flex flex-row justify-end">
      <Button type="submit">Submit</Button>
      </div>
      
    </form>
  </Form>
}