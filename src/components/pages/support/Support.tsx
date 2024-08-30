import PublicLayout from "@/components/shared/wrappers/PublicLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  description: string;
};

const Support = () => {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async(data) => {
    try{
      const response = await fetch("https://script.google.com/macros/s/AKfycbwqVvpuYne0tY50fQPRIa6e16nQxeRgRmNba7qeZlpRTrJ-6Hfre7BNXaiSNqors-zH/exec", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log(response);
      alert("Form Submitted");
      form.reset();
    }catch(error){
      console.error("Error: ", error);
  }
}
  return (
    <PublicLayout>
      <div className="page-title">Contact for Support!</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lightPrimary focus:outline-none"
                  placeholder="Enter your name"
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
                <input
                  type="email"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lightPrimary focus:outline-none"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description of Issue</FormLabel>
              <FormControl>
                <textarea
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lightPrimary focus:outline-none"
                  placeholder="Describe your issue"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-lightPrimary text-white py-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-500">
          Submit
        </Button>
        </form>
      </Form>
    </PublicLayout>
  );
};

export default Support;
