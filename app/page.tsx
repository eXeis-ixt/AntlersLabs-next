import Hero from "@/components/Hero";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
import { FeaturesSectionWithHoverEffects } from "../components/Feature";
import { TextHoverEnter } from "@/components/TextHover";

export default function Home() {
  return (
    <>
      <Hero
        title="Antlers Labs"
        desc="Antlers Labs delivers high-impact tools that streamline workflows, boost productivity, and deliver tangible results for your business."
        gradient="Stop settling for generic solutions."
      />

      <div className=" container">
        <section className=" mt-[60px]  ">
          <div>
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col  items-center max-w-sm mx-auto p-4 relative">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

              <h1 className=" text-center font-thin text-6xl hover:underline">
             <TextHoverEnter className=" text-6xl">Features</TextHoverEnter>
              </h1>
            </div>
          </div>

          <FeaturesSectionWithHoverEffects />
        </section>
      </div>
    </>
  );
}
