import Link from "next/link";
import { Bolt, Mail, Map, MessagesSquare, Phone } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ContactDetailsCard from "../ContactDetailsCard";
import {
  email,
  emailLink,
  phoneLink,
  phoneNumber,
  whatsapplink,
} from "@/data/constrains";
import { BsWhatsapp } from "react-icons/bs";

const info = "info@dyondzisanicommerce.co.za";
const help = "help@dyondzisanicommerce.co.za";
const accounts = "accounts@dyondzisanicommerce.co.za";
const mel = "mel@dyondzisanicommerce.co.za";

const emails = [
  {
    name: "General Enquiries",
    email: info,
    emailLink: `mailto:${info}?subject=General%20Enquiries&body=Good%20day,%0D%0AI%20would%20like%20to%20enquire%20about%20your%20services.%0D%0A`,
  },
  {
    name: "Help",
    email: help,
    emailLink: `mailto:${help}?subject=Help%20Needed&body=I%20need%20help%20with%20something.%0D%0A`,
  },
  {
    name: "Accounts",
    email: accounts,
    emailLink: `mailto:${accounts}?subject=Accounts%20Enquiries&body=I%20need%20help%20with%20something%20on%20my%20account.%0D%0A`,
  },
  {
    name: "Mel",
    email: mel,
    emailLink: `mailto:${mel}?subject=Mel&body=I%20need%20help%20with%20something.%0D%0A`,
  },
];

const ContactHero = () => {
  return (
    <section className="box-shadow bg-[url('/images/school-boy.webp')] bg-cover bg-center bg-no-repeat object-cover">
      <div className="bg-background/80">
        <div className="container grid min-h-[80vh] max-w-7xl place-content-center gap-6 py-4 md:grid-cols-2 md:py-0">
          <Card className="border-primary/50 bg-background/80">
            <CardHeader>
              <CardTitle>Contact us now</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Pick a convinient method to contact us. We will get back to you.
              </CardDescription>
              <section className="my-10 space-y-4">
                {emails.map((email) => (
                  <Link
                    key={email.email}
                    href={email.emailLink}
                    className="my-2 flex items-center gap-4 hover:text-primary/80"
                  >
                    <Mail size={30} />
                    <p className="text-lg">
                      {email.name} - {email.email}
                    </p>
                  </Link>
                ))}
                <hr className="border-primary/30" />
                <Button>
                  <Link href={whatsapplink} className="flex items-center gap-4">
                    <BsWhatsapp size={25} />
                    <p className="text-lg">Chat of WhatsApp</p>
                  </Link>
                </Button>
              </section>
            </CardContent>
          </Card>
          <Card className="overflow-hidden bg-background/30">
            <CardHeader>
              <CardTitle>Contact Us Today</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Contact us today using the form below contact details to enrol
                your child now.
              </CardDescription>
              {/* Contact details Card  */}
              <ContactDetailsCard />
            </CardContent>
          </Card>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
