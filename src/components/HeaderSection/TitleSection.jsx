import "./TitleSection.css";
function TitleSectionComponent(props) {
  return (
    <div className="container-title-section">
      <h2 className="title-section">{props.title}</h2>
      <p className="subtexto-section" >{props.subtexto}</p>
    </div>
  )
}

export default TitleSectionComponent;