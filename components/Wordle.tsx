"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const Wordle = () => {
  // Fetching today's date in ISO format (YYYY-MM-DD)
  const today = new Date();
  const dateString = today.toISOString().split("T")[0];

  // Format the date in a user-friendly format
  const formattedDateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
      console.log("Current Date (YYYY-MM-DD):", dateString);

      const response = await fetch(
        `https://neal.fun/api/password-game/wordle?date=${dateString}`
      );
      const data = await response.json();

      // console.log(`${data.answer.toLowerCase()} and ${dateString}`);

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

      // Error handling
    } catch (error) {
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
                      placeholder={`Wordle answer for ${formattedDateString}`}
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
