import Marquee from "react-fast-marquee";

function MarqueeComponent({images = [], ...props}) {
  return (
    <section className="max-w-[1280px] mx-auto py-[50px] px-[20px]">
      <Marquee {...props}>
        {images.map(({ marca, img }, index) => (
           <figure key={index} className="mx-[20px] flex flex-col items-center">
            <img
              src={img}
              alt={`Logo de ${marca}`}
              className="w-[100px] h-auto object-contain"
            />
            {/* Opcional: mostrar nombre de marca */}
            {/* <figcaption className="text-xs text-gray-600 mt-2">{marca}</figcaption> */}
          </figure>
        ))}
      </Marquee>
    </section>

  )
}

export default MarqueeComponent