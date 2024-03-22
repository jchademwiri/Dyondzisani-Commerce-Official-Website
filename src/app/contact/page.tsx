import ContactDetailsCard from "@/components/ContactDetailsCard";
import ContactForm from "@/components/Forms/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  return (
    <main className="container my-4 grid gap-4 md:grid-cols-2">
      <Card className=" overflow-hidden bg-background/70">
        <CardHeader>
          <CardTitle>Contact Us Today</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Contact us today using the below contact details to enroll your
            student.
          </CardDescription>
          {/* Contact details Card  */}
          <ContactDetailsCard />
        </CardContent>
      </Card>

      <Card className="row-span-3 bg-background/70 ">
        <CardHeader>
          <CardTitle>Contact Enquiry Form</CardTitle>
          <CardDescription>
            Fill in the form below to enquire about our services.
          </CardDescription>
        </CardHeader>
        {/* Contact Form  */}
        <ContactForm />
      </Card>
      {/* <section className="grid gap-4 md:col-span-2 md:grid-cols-2"> */}
      <Card className="bg-background/70">
        <CardHeader>
          <CardTitle>Centurion</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            285 Erasmus Ave, Raslow AH, Centurion, 0157
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-background/70">
        <CardHeader>
          <CardTitle>Four Ways</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            address 2 in four ways, Centurion, 0001
          </CardDescription>
        </CardContent>
      </Card>
      {/* </section> */}
    </main>
  );
};
export default Contact;
