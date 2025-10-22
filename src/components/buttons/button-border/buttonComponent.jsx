import "./buttonBorder.css"
import { Link } from "react-router-dom";

function ButtonBorderComponent({to, children}) {
  return (
    <Link to={to} className="custom-link">
      {children}
    </Link>
  )
}

export default ButtonBorderComponent