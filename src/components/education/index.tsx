export const Education = () => {
  return(
    <section className=" text-slate-200 flex flex-col gap-6 items-center py-2 px-6 my-20 ">
    <h1 className="text-2xl">Education</h1>
    <div className="flex justify-between md:h-48 w-full max-md:flex-col ">
      <div className="md:rounded-l-lg md:w-1/3 bg-neutral-700 bg-opacity-40 flex flex-col items-center justify-center 
       gap-3 py-4 px-20 max-md:rounded-t-lg">
        <p className="text-xl w-32  text-center">2022 - 2024</p>
        <h1 className="text-3xl">Tecnólogo</h1>
      </div>
      <div className="md:rounded-r-lg flex flex-col gap-3 justify-center w-full bg-neutral-800 bg-opacity-40 py-4 px-20 max-md:rounded-b-lg max-md:text-center">
        <h1 className="text-xl"> Análise e Desenvolvimento de Sistemas</h1>
        <p> Universidade Estácio de Sá</p>
        <p>Alcântara - RJ</p>
      </div>
    </div>
    <div className="flex justify-between md:h-48 w-full max-md:flex-col ">
      <div className="md:rounded-l-lg md:w-1/3 bg-neutral-700 bg-opacity-40 flex flex-col items-center justify-center 
        gap-3 py-4 px-20 max-md:rounded-t-lg">
          <p className="text-xl w-32 text-center">2022 - 2024</p>
          <h1 className="text-3xl">Técnico</h1>
        </div>
        <div className="md:rounded-r-lg flex flex-col gap-3 justify-center w-full bg-neutral-800 bg-opacity-40 py-4 px-20 max-md:rounded-b-lg max-md:text-center">
          <h1 className="text-xl">Técnico em eletrotécnica</h1>
          <p>Escola Técnica Estadual Henrique Lage - FAETEC ETEHL</p>
          <p>Barreto - RJ</p>
        </div>
    </div>
  </section>
  )
}