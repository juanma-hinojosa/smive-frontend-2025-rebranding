import ButtonBorderComponent from "../../buttons/button-border/buttonComponent"
import PortadaProyect from "/images/sanvicente-project.png"

function CardProjectComponent() {
  return (
    <article
      className="rounded-[10px] overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.3)] border border-transparent transition duration-300 hover:shadow-none hover:border-[#007BFF]"
    >
      {/* Imagen */}
      <div className="h-[200px]">
        <img
          src={PortadaProyect}
          alt="Portada de proyecto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-[15px] bg-white text-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Proyecto 1</h2>
        <ButtonBorderComponent to="/contacto">Ver</ButtonBorderComponent>
      </div>
    </article>
  )
}

export default CardProjectComponent
