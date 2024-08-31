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
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
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
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  return (
    <PublicLayout>
      <div className="page-title">Contact for Support!</div>
      {/*Contact us form*/}
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

      {/*FAQ Section*/}
      <div className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-300">
            <AccordionTrigger className="text-lightPrimary flex justify-between items-center text-xl font-semibold py-4">
              What is mentara? How are you different?
            </AccordionTrigger>
            <AccordionContent>
              Mentara is a personalized mentorship platform that empowers study abroad aspirants by connecting them with mentors who have walked the same path and truly understand their aspirations and challenges. What sets us apart is our unwavering commitment & understanding of your journey to providing tailored guidance and support throughout the entire study abroad journey. We have established a customised mentorship process that pushes you to dream bigger.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-gray-300">
            <AccordionTrigger className="text-lightPrimary flex justify-between items-center text-xl font-semibold py-4">
              What is mentara? How are you different?
            </AccordionTrigger>
            <AccordionContent>
              Mentara is a personalized mentorship platform that empowers study abroad aspirants by connecting them with mentors who have walked the same path and truly understand their aspirations and challenges. What sets us apart is our unwavering commitment & understanding of your journey to providing tailored guidance and support throughout the entire study abroad journey. We have established a customised mentorship process that pushes you to dream bigger.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-gray-300">
            <AccordionTrigger className="text-lightPrimary flex justify-between items-center text-xl font-semibold py-4">
              What is mentara? How are you different?
            </AccordionTrigger>
            <AccordionContent>
              Mentara is a personalized mentorship platform that empowers study abroad aspirants by connecting them with mentors who have walked the same path and truly understand their aspirations and challenges. What sets us apart is our unwavering commitment & understanding of your journey to providing tailored guidance and support throughout the entire study abroad journey. We have established a customised mentorship process that pushes you to dream bigger.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </PublicLayout>
  );
};

export default Support;
