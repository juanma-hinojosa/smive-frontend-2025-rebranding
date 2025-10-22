import { imagesClientesLogo, imagesProvedoresElectricidad, imagesProvedoresPintura, } from "../../assets/js/array-img"
import ButtonBgComponent from "../../components/buttons/button-bg/buttonComponent"
import CardProjectComponent from "../../components/cards/CardProjects/CardProject"
import CardServicesComponent from "../../components/cards/CardServices/CardServicesComponet"
import EstadisticasSection from "../../components/estadisticas/EstadisticasSection"
import TitleSectionComponent from "../../components/HeaderSection/TitleSection"
import HeroComponent from "../../components/Hero/HeroComponent"
import MarqueeComponent from "../../components/marquee/MarqueComponent"
import SectionReview from "../../components/SectionReviews/SectionReview"
import "./home.css"
import Marquee from "react-fast-marquee";

function HomePage() {
  return (
    <>
      <main style={{ backgroundColor: "#f9f9f9" }} >
        <HeroComponent />


        {/* section estadisticas  */}
        <EstadisticasSection />


        {/* SECCION SERVICIOS  */}
        <section className="section-maxwidth">
          <TitleSectionComponent
            title="Nuestros Servicios"
            subtexto="En Smive Refacciones, nos enorgullece ofrecer a nuestros clientes una experiencia de compra excepcional. Aquí te presentamos algunas razones por las que somos la elección preferida para tus necesidades de refacciones automotrices:"
          />

          <div className="grid-services" >
            <CardServicesComponent
              img={"./images/construccion-1.png"}
              title="Mano de obra calificada"
              parrafo="Podemos y contamos con mano de obra capacita y eficiente"
            />

            <CardServicesComponent
              img={"./images/construccion-2.png"}
              title="Planos"
              parrafo="Realizamos planos de obras, contamos con arquitectos"
            />

            <CardServicesComponent
              img={"./images/construccion-3.png"}
              title="Mantenimiento"
              parrafo="Realizamos servicios de mantenimiento general y puesta en valor"
            />

            <CardServicesComponent
              img={"./images/construccion-4.png"}
              title="Pintura"
              parrafo="Aplicación profesional de pintura en interiores, exteriores e impermeabilazaciones"
            />
          </div>

          <ButtonBgComponent to="/services">Ver productos</ButtonBgComponent>
        </section>

        {/* SECCION PROYECTOS  */}
        <section className="section-maxwidth">
          <TitleSectionComponent
            title="Ultimos Proyectos"
            subtexto="En Smive Refacciones, nos enorgullece ofrecer a nuestros clientes una experiencia de compra excepcional. Aquí te presentamos algunas razones por las que somos la elección preferida para tus necesidades de refacciones automotrices:"
          />

          <div className="grid-projects" >
            <CardProjectComponent />
            <CardProjectComponent />
            <CardProjectComponent />
            <CardProjectComponent />
          </div>

          <ButtonBgComponent to="/projects">Ver mas</ButtonBgComponent>

        </section>

        {/* SECCION MARQUEE */}
        <MarqueeComponent
          images={imagesClientesLogo}
          speed={100}
          gradient={false}
          direction="right"
          autoFill={true}

        />

        {/* SECCION REVIEWS  */}
        <SectionReview />

        {/* SECCION MARQUEE */}
        <MarqueeComponent
          images={imagesProvedoresPintura}
          speed={50}
          gradient={true}
          gradientColor={[248,251,253]}
          gradientWidth={200}
          direction="right"
          autoFill={true}
        />

        <MarqueeComponent
          images={imagesProvedoresElectricidad}
          speed={80}
          gradient={true}
          gradientColor={[248,251,253]}
          gradientWidth={200}
          direction="right"
          autoFill={true}
        />


      </main>
    </>
  )
}

export default HomePage