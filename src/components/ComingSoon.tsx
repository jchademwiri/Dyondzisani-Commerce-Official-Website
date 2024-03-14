import Link from "next/link";

const ComingSoon = () => {
  return (
    <section className="grid h-screen place-items-center text-center mx-10 ">
      <div>
        <h1 className="md:text-7xl text-4xl font-bold py-6">
          SITE UNDER <br /> CONSTRUCTION
        </h1>
        <p className="md:text-4xl text-2xl py-2 md:py-4  font-thin tracking-wider">
          WE ARE NEARLY READY
        </p>
        <div className="h-2 rounded-full w-full bg-accent my-2">
          <div className="h-2 rounded-full w-1/4 bg-primary"></div>
        </div>
        <h2 className="py-2 md:text-3xl text-xl font-semibold">
          Contact us Now
        </h2>
        <div className="py-2 md:py-4 grid md:grid-cols-2">
          <Link className="py-1 hover:text-primary" href="tel:+27657236771">
            +27 (0)65 723 6771
          </Link>
          <Link
            className="py-1 hover:text-primary"
            href="https://wa.me/27657236771"
            title="Let's Chat on Whatsapp: +27657236771"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </div>
      <footer className="md:my-5 my-10 py-5">
        <p>
          © Developed by{" "}
          <Link
            rel="noreferrer"
            target="_blank"
            title="We Would Love to work with your business, call us now "
            href={`https://www.jacobc.co.za/`}
            className="text-primary"
          >
            Playhouse Media Group
          </Link>
        </p>
      </footer>
    </section>
  );
};
export default ComingSoon;
