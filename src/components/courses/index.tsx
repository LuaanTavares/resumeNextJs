export const Courses = () => {
  return(
    <section className=" text-slate-200 flex flex-col gap-6 items-center py-2 px-6 md:my-20 max-md:my-8">
    <h1 className="text-2xl">Courses</h1>
    <div className="flex justify-between md:h-48 w-full max-md:flex-col ">
      <div className="md:rounded-l-lg md:w-1/3 bg-neutral-700 bg-opacity-40 flex flex-col items-center justify-center 
       gap-3 py-4 px-20 max-md:rounded-t-lg">
        <p className="text-xl w-32  text-center">2023 - 2023</p>
        <h1 className="text-3xl">Curso</h1>
      </div>
      <div className="md:rounded-r-lg flex flex-col gap-3 justify-center w-full bg-neutral-800 bg-opacity-40 py-4 px-20 max-md:rounded-b-lg max-md:text-center">
        <h1 className="text-xl">Curso de JavaScript e TypeScript do básico ao avançado</h1>
        <p>Luiz Otávio Miranda</p>
        <p>Udemy</p>
      </div>
    </div>
    <div className="flex justify-between md:h-48 w-full max-md:flex-col ">
      <div className="md:rounded-l-lg md:w-1/3 bg-neutral-700 bg-opacity-40 flex flex-col items-center justify-center 
       gap-3 py-4 px-20 max-md:rounded-t-lg">
        <p className="text-xl w-32  text-center">2023 - 2023</p>
        <h1 className="text-3xl">Curso</h1>
      </div>
      <div className="md:rounded-r-lg flex flex-col gap-3 justify-center w-full bg-neutral-800 bg-opacity-40 py-4 px-20 max-md:rounded-b-lg max-md:text-center">
        <h1 className="text-xl">Git e GitHub</h1>
        <p>Tiago Matos</p>
        <p>YouTube</p>
      </div>
    </div>
  </section>
  )
}