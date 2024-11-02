"use client";

import { higherEducationModules } from "@/data/formdata";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendGAEvent } from "@next/third-parties/google";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { CardContent, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";
import { toast } from "../components/ui/use-toast";

import { SendHigherEducationEmail } from "@/app/actions";
import {
  higherEducationFormSchema,
  THigherEducationFormSchema,
} from "@/lib/validation";
import { useState } from "react";
import Spinner from "../components/Spinner";

const HigherEducationEnrolmentForm = () => {
  const form = useForm<THigherEducationFormSchema>({
    resolver: zodResolver(higherEducationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      medicalCondition: "",
      yearOfStudy: undefined,
      modules: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: THigherEducationFormSchema) {
    setIsSubmitting(true);
    await SendHigherEducationEmail(data);
    toast({
      title: `Thank You ${data.firstName}`,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">Your email has been sent.</code>
        </pre>
      ),
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Student Details */}
            <div>
              <CardTitle className="border-b border-primary/30 py-4">
                Student Details
              </CardTitle>
              <div className="my-4 grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g: Rose" {...field} />
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
                        <Input placeholder="e.g: Dlamini" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g: rosedlamin@email.com"
                          {...field}
                        />
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
                        <Input placeholder="e.g: 012 345 6789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-4 grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="yearOfStudy"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Year of Study</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(
                            (year) => (
                              <FormItem
                                key={year}
                                className="flex items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <RadioGroupItem value={year} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {year}
                                </FormLabel>
                              </FormItem>
                            )
                          )}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="modules"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">
                          Select Modules
                        </FormLabel>
                        <FormDescription>
                          Select the modules you want to study.
                        </FormDescription>
                      </div>
                      {higherEducationModules.map((module) => (
                        <FormField
                          key={module.id}
                          control={form.control}
                          name="modules"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={module.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      module.label
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            module.label,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== module.label
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {module.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="medicalCondition"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Medical Condition</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g anxiety." {...field} />
                      </FormControl>
                      <FormDescription>
                        Describe any student's medical condition / disability.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={() =>
                sendGAEvent({ event: "buttonClicked", value: "Form Submitted" })
              }
            >
              Submit {isSubmitting && <Spinner />}
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
};

export default HigherEducationEnrolmentForm;
