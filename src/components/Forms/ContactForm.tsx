"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { CardContent, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { toast } from "../ui/use-toast";
import { grades, subjects } from "@/data/formdata";
import formSchema, { TFormSchema } from "@/lib/validation";

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      medicalCondition: "",
      learnerFullName: "",
      learnerGrade: undefined,
      curriculum: undefined,
      subjects: [],
    },
  });
  // 2. Define a submit handler.
  function onSubmit(data: TFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
  }
  return (
    <>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Parents Details */}
            <div>
              <CardTitle className="border-b border-primary/30 py-4">
                Parent / Guardian Details
              </CardTitle>
              <div className="my-4 grid gap-4 md:grid-cols-2 ">
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
            </div>
            {/* Learner Details */}
            <div>
              <CardTitle className="border-b border-primary/30 py-4">
                Learner&apos;s Details
              </CardTitle>
              <div className="my-4 grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="learnerFullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fullname Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g: Mike Dlamini" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="curriculum"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Select Learner&apos;s Curriculum</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="IEB" />
                            </FormControl>
                            <FormLabel className="font-normal">IEB</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="CAPS" />
                            </FormControl>
                            <FormLabel className="font-normal">CAPS</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subjects"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">
                          Select Subjects
                        </FormLabel>
                        <FormDescription>
                          Select the subjects you want to study.
                        </FormDescription>
                      </div>
                      {subjects.map((subject) => (
                        <FormField
                          key={subject.id}
                          control={form.control}
                          name="subjects"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={subject.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      subject.label,
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            subject.label,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !== subject.label,
                                            ),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {subject.label}
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
                  name="learnerGrade"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Select Learner&apos;s Grade</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {/* Learner grade options  */}
                          {grades.map((grade) => (
                            <FormItem
                              key={grade.id}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={grade.label} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {grade.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                          {/* <LearnerGrade /> */}
                        </RadioGroup>
                      </FormControl>
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
                        Describe any learner&apos;s medical condition /
                        disability.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
};
export default ContactForm;
