import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="position: relative flex h-[500px] flex-col justify-center gap-5 bg-background bg-[url('/images/hero-bg.jpg')] bg-cover bg-fixed bg-center py-20 ">
      {/* bg-background bg-[url('/images/hero-bg.jpg') */}
      <div className="z-index: 1 absolute bottom-0 left-0 right-0 top-0 bg-background opacity-80"></div>
      <div className=" position: z-index: 2 relative m-auto w-[90%] max-w-7xl text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Who is Dyondzisani Commerce?
        </h1>
        <p className="mx-auto max-w-[900px] text-xl leading-7 [&:not(:first-child)]:my-6">
          Dyondzisani is a Xitsonga word that addresses a group of people to
          teach. The company was founded by Teleni Mellisah Chauke, an
          accountant, in 2022 while providing extra accounting lessons to
          learner from Grade 8-12. The company grew in providing all commerce
          subjects Accounting, Business Studies and Economics for{" "}
          <em className="font-semibold text-primary">IEB and CAPS</em> .
        </p>
      </div>
    </section>
  );
};
export default Banner;
