import Logo from "/images/smive-logo-nav.jpg"

function EstadisticasSection() {
  return (
    <section className="max-w-[1280px] mx-auto py-[50px] px-[20px]">
      {/* Fondo Estadísticas */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2885cc] mb-4">
            SMIVE: Construcción de confianza, mantenimiento de calidad!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            En SMIVE, nos especializamos en ofrecer soluciones integrales de refacciones y mantenimiento que garantizan la durabilidad y eficiencia de sus proyectos de construcción. Nuestro compromiso con la excelencia se refleja en cada detalle, desde la selección de materiales de alta calidad hasta la implementación de técnicas innovadoras.
          </p>
        </div>
        <div className="w-full h-auto">
          <img
            src={Logo}
            alt="Logo SMIVE Refacciones y Mantenimiento"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Contenedor de estadísticas */}
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] bg-[#2885cc] rounded-[10px] text-white">
        <figure className="p-[50px] bg-[#47a3e5] rounded-l-[10px] flex flex-col justify-center items-center text-left">
          <h3 className="text-lg font-semibold mb-2">NUESTRAS ESTADÍSTICAS</h3>
          <p className="text-sm">Nos enorgullece nuestro trabajo</p>
        </figure>
        <figure className="p-[50px] flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-bold mb-2">500+</h3>
          <p className="text-sm">Proyectos en Progreso</p>
        </figure>
        <figure className="p-[50px] flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-bold mb-2">1200+</h3>
          <p className="text-sm">Proyectos Completados</p>
        </figure>
        <figure className="p-[50px] flex flex-col justify-center items-center text-center rounded-r-[10px]">
          <h3 className="text-3xl font-bold mb-2">15</h3>
          <p className="text-sm">Años de Experiencia</p>
        </figure>
      </div>
    </section>
  )
}

export default EstadisticasSection
