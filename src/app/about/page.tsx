const About = () => {
  return (
    <main className="container my-8 grid gap-4 lg:grid-cols-3 ">
      <section className="col-span-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Who is Dyondzisani Commerce?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Dyondzisani is a Xitsonga word that addresses a group of people to
          teach. The company was founded by Teleni Mellisah Chauke, an
          accountant, in 2022 while providing extra accounting lessons to
          learner from Grade 8-12. The company grew in providing all commerce
          subjects Accounting, Business Studies and Economics for{" "}
          <em className="font-semibold text-primary">IEB and CAPS</em> .
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Why Choose Dyondzisani Commerce?
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          One of our greatest strengths are:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>We have a heart for teaching</li>
          <li>
            Our team have practical commerce exposure in the following
            industries Health, Manufacturing, entertainment, Education, Energy,
            Logistics
          </li>
          <li>We obtain BCom Qualifications</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We firmly believe that commerce is what truly makes the world go
          round. Irrespective which career or entrepreneurial path your child
          chooses to follow, their path will land them in commerce. An early
          introduction of economics, business and accounting gives your child a
          distinct tool to start exercising daily commerce decisions at their
          level.
        </p>
      </section>
      <section className="col-span-2 grid gap-3 md:grid-cols-2 lg:col-auto lg:grid-cols-1">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground">
            Dyondzisani Commerce strive for academic excellence in commercial
            subjects for Grade 8-12 IEB and CAPS. This will be achieved through
            providing classes and tutoring sessions to learners who wish to
            obtain academic excellence.
          </p>
        </div>
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground">
            Dyondzisani Commerce strive for academic excellence in commercial
            subjects for Grade 8-12 IEB and CAPS. This will be achieved through
            providing classes and tutoring sessions to learners who wish to
            obtain academic excellence.
          </p>
        </div>
      </section>
    </main>
  );
};
export default About;
