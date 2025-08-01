import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent-default">Moinul Faisal</span>
            </h1>
            <p className="max-w-[550px] mb-9 px-4 text-white/80 text-justify xl:px-0">
              I excel at crafting digital products & services. I am Passionate about creating intuitive and engaging user interface & experiences. Specialize in transforming your imagination into beautifully crafted products.
            </p>
            {/* button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-default rounded-full flex items-center justify-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover-transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order xl:order-none mb:8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
