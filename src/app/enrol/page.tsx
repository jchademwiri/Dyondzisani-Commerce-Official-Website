import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BasicEducationEnrolmentForm,
  HigherEducationEnrolmentForm,
} from "@/forms";
export default function EnrolmentPage() {
  return (
    <div className="container max-w-7xl p-6">
      <section className="mx-auto grid max-w-4xl rounded-sm">
        <CardHeader className="grid place-items-center">
          <CardTitle>StudentEnrolment Form</CardTitle>
          <CardDescription>
            Fill in the form below to enrol about our services.
          </CardDescription>
        </CardHeader>
        <Tabs defaultValue="basiceducation" className="">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basiceducation" className="font-semibold">
              Basic Education
            </TabsTrigger>
            <TabsTrigger value="highereducation" className="font-semibold">
              Higher Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="basiceducation">
            <BasicEducationEnrolmentForm />
          </TabsContent>
          <TabsContent value="highereducation">
            <HigherEducationEnrolmentForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
