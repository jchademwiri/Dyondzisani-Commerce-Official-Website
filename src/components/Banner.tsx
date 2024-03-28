import Link from "next/link";
import { Button } from "./ui/button";
import { CardDescription } from "./ui/card";
import { graduate, whatsappIcon } from "@/data/images";
import Image from "next/image";

const Banner = () => {
  return (
    <section id="home" className=" container py-24 md:py-4">
      <div className="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold sm:text-5xl ">
            IT & Computer Science Academic Support in South Africa.
          </h1>
          <CardDescription className="py-4 text-lg sm:text-xl">
            Ace your IT and computer science assignments with Edurite`&apos;s
            expert help. We offer high-quality, customized assistance for all
            South African students. Get step-by-step solutions, insightful
            explanations, and valuable resources to boost your grades and
            achieve academic success.
          </CardDescription>
          <div className="flex gap-2">
            <Button>
              <Link href={"/"} className=" flex items-center gap-2">
                Let&apos;s Chat Now
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M34.8718 5.94511C32.9921 4.05251 30.7546 2.5523 28.2897 1.53168C25.8246 0.511067 23.181 -0.00952856 20.5128 0.000132025C16.9459 0.00361701 13.4423 0.94364 10.3531 2.72606C7.26395 4.50847 4.69764 7.07073 2.91113 10.1562C1.12462 13.2417 0.180667 16.7422 0.173744 20.3069C0.166846 23.8718 1.09726 27.3758 2.87179 30.4682L0 41L10.7692 38.1813C13.7429 39.8346 17.0844 40.7158 20.4872 40.7438C25.8967 40.744 31.0872 38.6087 34.9287 34.8029C38.7705 30.9973 40.9526 25.829 41 20.4232C40.9821 17.7257 40.4313 15.0582 39.3797 12.5738C38.3282 10.0893 36.7962 7.83674 34.8718 5.94511ZM20.5128 37.2331C17.4813 37.2352 14.5052 36.4208 11.8974 34.8757L11.2821 34.4913L4.89744 36.1825L6.58974 29.9557L6.17949 29.315C3.99808 25.796 3.18395 21.5994 3.89133 17.5204C4.59872 13.4416 6.77849 9.76363 10.0177 7.18338C13.2569 4.60311 17.3305 3.29975 21.4669 3.5202C25.6033 3.74062 29.5154 5.46956 32.4615 8.37947C35.6821 11.5267 37.5256 15.8197 37.5897 20.3207C37.5492 24.8202 35.7321 29.1216 32.5338 32.2891C29.3359 35.4563 25.0154 37.2334 20.5128 37.2331ZM29.7692 24.5744C29.2564 24.3182 26.7692 23.0882 26.3077 22.9344C25.8462 22.7807 25.4872 22.6782 25.1538 23.1907C24.6523 23.8777 24.1128 24.5363 23.5385 25.1638C23.2564 25.5226 22.9487 25.5482 22.4359 25.1638C19.5121 24.0092 17.0762 21.8823 15.5385 19.142C15 18.2451 16.0513 18.2963 17.0256 16.3745C17.0977 16.2358 17.1351 16.0821 17.1351 15.926C17.1351 15.77 17.0977 15.6162 17.0256 15.4776C17.0256 15.2213 15.8718 12.7101 15.4615 11.7107C15.0513 10.7113 14.641 10.8651 14.3077 10.8395H13.3077C13.0486 10.8434 12.7933 10.9027 12.559 11.0131C12.3246 11.1236 12.1166 11.2828 11.9487 11.4801C11.3734 12.0392 10.9246 12.715 10.6327 13.462C10.3408 14.209 10.2125 15.0099 10.2564 15.8107C10.4172 17.7277 11.1396 19.5548 12.3333 21.0638C14.5185 24.3331 17.5131 26.9814 21.0256 28.7513C22.8679 29.826 25.009 30.2755 27.1282 30.0325C27.8338 29.8926 28.5023 29.6059 29.0897 29.1908C29.6774 28.7759 30.171 28.2419 30.5385 27.6238C30.879 26.8694 30.9862 26.0307 30.8462 25.2151C30.6154 24.9588 30.2821 24.8307 29.7692 24.5744Z"
                    fill="#ffffff"
                  />
                </svg>
              </Link>
            </Button>
            <Button variant={"link"}>
              <Link href={"/"} className="text-foreground">
                074 049 1433
              </Link>
            </Button>
          </div>
        </div>
        {/* <div className='h-96 md:h-auto w-full rounded-sm overflow-hidden'> */}
        <Image
          alt="Edurite student celebration"
          className="h-auto w-full overflow-hidden rounded-sm object-cover"
          priority
          placeholder="blur"
          blurDataURL="/images/graduate.webp"
          src={graduate}
          height={6000}
          style={{
            objectFit: "contain",
          }}
          width={4000}
        />
        {/* </div> */}
      </div>
    </section>
  );
};
export default Banner;

// <section className="position: relative flex h-[500px] flex-col justify-center gap-5 bg-background bg-[url('/images/my-hero-bg.webp')] bg-cover bg-fixed bg-center py-20 ">
//   {/* bg-background bg-[url('/images/hero-bg.jpg') */}
//   <div className="z-index: 1 absolute bottom-0 left-0 right-0 top-0 bg-background opacity-20"></div>
//   <div className=" position: z-index: 2 relative m-auto w-[90%] max-w-7xl">
//     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
//       Who is Dyondzisani Commerce?
//     </h1>
    // <p className="max-w-[600px] text-xl leading-7 [&:not(:first-child)]:my-6">
    //   Dyondzisani is a Xitsonga word that addresses a group of people to
    //   teach. The company was founded by Teleni Mellisah Chauke, an
    //   accountant, in 2022 while providing extra accounting lessons to
    //   learner from Grade 8-12. The company grew in providing all commerce
    //   subjects Accounting, Business Studies and Economics for{" "}
    //   <em className="font-semibold text-primary">IEB and CAPS</em> .
    // </p>
//   </div>
// </section>
