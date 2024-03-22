import { z } from "zod";
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),

  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  medicalStatus: z
    .string()
    .min(2, {
      message: "Medical Status must be at least 2 characters.",
    })
    .max(50, {
      message: "Medical Status must be at most 50 characters.",
    }),
  // Learner's details
  learnerFullName: z.string().min(2, {
    message: "Learner's Full Name must be at least 2 characters.",
  }),
  learnerGrade: z.enum(
    ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    {
      required_error: "You need to select a Learners Grade.",
    },
  ),
  curriculum: z.enum(["IEB", "CAPS"], {
    required_error: "You need to select a Curriculum.",
  }),
  subjects: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export default formSchema;
export type TFormSchema = z.infer<typeof formSchema>;
