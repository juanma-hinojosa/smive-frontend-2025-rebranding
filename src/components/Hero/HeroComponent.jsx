import ButtonBgComponent from "../buttons/button-bg/buttonComponent"
import ButtonBorderComponent from "../buttons/button-border/buttonComponent"
import "./HeroComponent.css"

function HeroComponent() {
  return (
    <section className="bg-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Tu aliado en mantenimiento y refaccion
          </h1>
          <p className="hero-subtitle">
            En SMIVE ofrcemos soluciones integrales para mantener tus proytectos de comnstruccion en perfecto estado, con caliad ny eficiencia. garatizada
          </p>

          <div className="hero-buttons">
            <ButtonBorderComponent to="/contacto">Contactanos</ButtonBorderComponent>

            <ButtonBgComponent to="/productos">Ver productos</ButtonBgComponent>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent