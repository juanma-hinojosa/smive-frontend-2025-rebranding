import Marquee from "react-fast-marquee";

function MarqueeComponent({images = [], ...props}) {
  return (
    <section className="max-w-[1280px] mx-auto py-[15px]">
      <Marquee {...props}>
        {images.map(({ marca, img }, index) => (
           <figure key={index} className="mx-[20px] flex flex-col items-center">
            <img
              src={img}
              alt={`Logo de ${marca}`}
              className="w-[120px] h-auto object-contain "
            />
           </figure>
        ))}
      </Marquee>
    </section>

  )
}

export default MarqueeComponent