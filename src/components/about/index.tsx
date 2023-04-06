export const About = () => {
  return(
    <section className=" text-slate-200 flex justify-center mx-auto px-2 px-6 md:py-20 max-md:py-6" id="about">
        <div className="flex justify-center gap-10 md:gap-24 p-4 rounded-lg bg-neutral-800 bg-opacity-40 max-md:flex-col">
          <div className="flex flex-col md:w-2/3 max-md: items-center gap-8">
            <h1 className="text-2xl">About</h1>
            <p>
               Estou no mercado de trabalho desde 2014, quando atuei por 2 anos como Estoquista 
               na Loja First Class Cama, Mesa e Banho (2014 - 2015). Depois trabalhei por 7 anos na empresa Santo Antônio Transportes, 
               onde tive os cargos de Jovem Aprendiz, Fiscal e Auxiliar Operacional (2016 - 2023). No início de 2022 matriculei-me no 
               curso Tecnólogo em Análise e Desenvolvimento de Sistemas, com o foco em tornar-me um desenvolvedor Full Stack. 
               Já tenho conhecimentos consideráveis em HTML, CSS, TailwindCSS, JavaScript, ReactJS, NodeJS, Express, MongoBD e Git. 
               Essas competências podem ser confirmadas no meu repositório do GitHub, que contém alguns dos meus projetos. 
               Pensando em facilitar esta análise, separei abaixo 3 projetos como demonstração.
               Espero que meu perfil seja compatível com as skills que procura. Fique à vontade para entrar em contato através dos canais que disponibilizei e, 
               desde já, agradeço!
            </p>
          </div>
          <div className="flex flex-col gap-8 md:w-96 max-md: items-center">
            <h1 className="text-2xl">Information</h1>
            <div className="flex gap-5">
              <div className=" font-semibold flex flex-col gap-3">
                <h4>AGE:</h4>
                <h4>EMAIL:</h4>
                <h4>PHONE:</h4>
                <h4>ADDRESS:</h4>
                <h4>LANGUAGE:</h4>
              </div>
              <div className="flex flex-col gap-3">
                <p>27</p>
                <p>luankriok18@gmail.com</p>
                <p>+55 (21) 973742623</p>
                <p>São Gonçalo - RJ</p>
                <p>Portuguese</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}