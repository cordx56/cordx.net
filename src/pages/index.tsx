import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => (
  <>
    <Header />
    <main className="container mx-auto text-center">
      <Services />
      <Contact />
    </main>
  </>
);

export default Index;
