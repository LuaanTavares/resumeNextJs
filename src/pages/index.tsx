import { About } from "@/components/about";
import { Courses } from "@/components/courses";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Navbar } from "@/components/navbar";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { NextSeo } from "next-seo";


export default function Home() {
  return (
    <>
      <NextSeo
        title="Luan Tavares"
        description="Olá! Seja bem vindo ao meu currículo profissional! Caso tenha interesse em saber mais sobre mim, por favor, entre em contato."
        openGraph={{
          title: "Luan Tavares",
          description:
           "Olá! Seja bem vindo ao meu currículo profissional! Caso tenha interesse em saber mais sobre mim, por favor, entre em contato.",
          images: [
            {
              url: "https://avatars.githubusercontent.com/u/113513445",
              width: 500,
              height: 300,
              alt: "img",
              type: "image/jpeg",
            },
          ],
          siteName: "Portfólio",
        }}
      />

      <Navbar />
      <Main />
      <div className="bg-black">
        <About />
        <Projects />
        <Skills />
        <Education />
        <Courses />
        <Footer />
      </div>
    </>
  );
}
