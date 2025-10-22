function CardServicesComponent({ img, title, parrafo }) {
  return (
    <article className="bg-[#667384] text-white rounded-xl p-10 border-2 flex flex-col lg:flex-row items-center text-center lg:text-left gap-6 hover:bg-white hover:text-[#667384] transition-colors duration-300">
      <img className="w-[100px]" src={img} alt={title} />
      <div className="mt-2.5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{parrafo}</p>
      </div>
    </article>
  )
}

export default CardServicesComponent;