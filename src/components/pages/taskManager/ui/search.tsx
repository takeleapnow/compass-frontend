"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
    search: z.string().optional(), // Field for search
});

export function Search({ onSearch, reset }: { onSearch: (query: string) => void; reset: () => void }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            search: "",
        }
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        if (data.search) {
            onSearch(data.search); // Call the parent component function with search query
        }
        toast({
            title: "Search executed",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    function handleReset() {
        form.reset(); // Reset form fields
        reset(); // Call the parent component reset function
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row justify-center space-x-4 items-center">
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormControl>
                                <Input
                                    {...field}
                                    className="w-72"
                                    placeholder="Search tasks..."
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Search <IoIosSearch /></Button>
                <Button type="button" onClick={handleReset}>Reset</Button>
            </form>
        </Form>
    );
}
