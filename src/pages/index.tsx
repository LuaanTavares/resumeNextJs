import { About } from "@/components/homePage/about";
import { Courses } from "@/components/homePage/courses";
import { Education } from "@/components/homePage/education";
import { Footer } from "@/components/homePage/footer";
import { Main } from "@/components/homePage/main";
import { Navbar } from "@/components/homePage/navbar";
import { Skills } from "@/components/homePage/skills";
import { Projects } from "@/components/homePage/projects";
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
