"use client";

import * as React from "react";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "./ui/use-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "./ui/input";

const Wordle = () => {
  // Fetching today's date in ISO format (YYYY-MM-DD)
  const today = new Date();
  const dateString = today.toISOString().split("T")[0];

  // Setting up toast and form
  const { toast } = useToast();

  const formSchema = z.object({
    answer: z.string().min(5, "Wordle answers are usually 5 letters."),
  });

  // Define a type for the form values
  type FormValues = z.infer<typeof formSchema>;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Create a new Date object, which will be set to the current date and time of the user's system
      const currentDate = new Date();

      // You can format this date as needed; for instance, in ISO format:
      const isoDateString = currentDate.toISOString();

      // Or, if you just need the date part in YYYY-MM-DD format:
      const dateString = currentDate.toISOString().split("T")[0];

      console.log("Current Date (ISO):", isoDateString);
      console.log("Current Date (YYYY-MM-DD):", dateString);

      const response = await fetch(
        `https://neal.fun/api/password-game/wordle?date=${dateString}`
      );
      const data = await response.json();

      console.log(`${data.answer.toLowerCase()} and ${dateString}`);

      if (values.answer.toLowerCase() === data.answer.toLowerCase()) {
        // User guessed the correct answer
        toast({
          title: "Correct!",
          description: "That is today's Wordle answer.",
        });
      } else {
        // Incorrect guess
        toast({
          title: "Incorrect",
          description: "That's not the correct Wordle answer. Try again!",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Handle errors
      toast({
        title: "Something went wrong.",
        description:
          "There was an issue fetching the answer. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Function to handle cancel action
  const handleCancel = () => {
    // Logic to handle cancel action, e.g., reset the form
    form.reset();
  };

  return (
    <Card className="w-[350px] bg-black text-white border-zinc-800">
      <CardHeader>
        <CardTitle>What is today's Wordle?</CardTitle>
        <CardDescription>
          Just a fun way to showcase my backend development skills.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      id="answer"
                      placeholder={`Wordle answer for ${dateString}`}
                      disabled={isSubmitting}
                      className="text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="button" // Important to specify 'button' to prevent form submission
                onClick={handleCancel}
                variant="ghost"
                size="sm"
                className="transition-all"
              >
                Cancel
              </Button>
              <Button
                disabled={isSubmitting}
                type="submit"
                size="sm"
                className="bg-red-400 hover:bg-red-600"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Wordle;
