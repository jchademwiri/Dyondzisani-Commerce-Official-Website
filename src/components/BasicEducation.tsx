import ServiceCard from "./ServiceCard";

import { basicEducationService } from "@/data/services";

export const BasicEducation = () => {
  return (
    <section className="my-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {basicEducationService.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}
    </section>
  );
};
