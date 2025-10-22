import TitleSectionComponent from "../HeaderSection/TitleSection"
import "./SectionReview.css"

function SectionReview() {
  return(
    <section className="review-section">
      <div className="section-maxwidth">
        <TitleSectionComponent 
          title="Lo que dicen nuestros clientes"
          subtexto="En Smive Refacciones, nos enorgullece ofrecer a nuestros clientes una experiencia de compra excepcional. Aquí te presentamos algunas razones por las que somos la elección preferida para tus necesidades de refacciones automotrices:"
        />
      </div>
    </section>
  )
}

export default SectionReview