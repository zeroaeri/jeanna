// src/app/page.tsx
import Hero from "@/components/hero";
import FolderTabs from "@/components/foldertabs";
import TechStack from "@/components/techstack";
import ContactFooter from "@/components/contactfooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Replaced ShowcaseGrid with your new tactile UI */}
      <section id="work" className="py-24 px-6 md:px-16 flex justify-center">
        <FolderTabs />
      </section>
      
      <TechStack />
      <ContactFooter />
    </main>
  );
}