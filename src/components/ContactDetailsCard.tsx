import { Mail, Map, Phone } from "lucide-react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const ContactDetailsCard = () => {
  return (
    <section className="my-10 space-y-4">
      <Link
        href={"/"}
        className="my-2 flex items-center gap-4 hover:text-primary/80"
      >
        <Phone size={30} />
        <p className="text-lg">012 000 0000</p>
      </Link>
      <Link
        href={"/"}
        className="my-2 flex items-center gap-4 hover:text-primary/80"
      >
        <BsWhatsapp size={30} />
        <p className="text-lg">012 000 0000</p>
      </Link>
      <Link
        href="mailto:info@dyondzisanicommerce.co.za?subject=Enrolment%20inquiry&body=Good%20day,%0D%0AI%20would%20like%20to%20enquire%20about%20your%20services."
        className="my-2 flex items-center gap-4 hover:text-primary/80"
      >
        <Mail size={30} />
        <p className="text-lg">info@dyondzisanicommerce.co.za</p>
      </Link>
      <Link
        href={"/"}
        className="my-2 flex items-center gap-4 hover:text-primary/80"
      >
        <Map size={30} />
        <p className="text-lg">285 Erasmus Ave, Raslouw AH, Centurion</p>
      </Link>
      <Link
        href={"/"}
        className="my-2 flex items-center gap-4 hover:text-primary/80"
      >
        <Map size={30} />
        <p className="text-lg">
          Another location: 285 Erasmus Ave, Raslouw AH, Centurion
        </p>
      </Link>
    </section>
  );
};
export default ContactDetailsCard;
