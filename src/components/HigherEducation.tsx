import ServiceCard from "./ServiceCard";

import { higherEducationService } from "@/data/services";

export const HigherEducation = () => {
  return (
    <section className="my-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {higherEducationService.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}
    </section>
  );
};
