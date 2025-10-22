import "./buttonBg.css"
import { Link } from "react-router-dom";

function ButtonBgComponent({to, children}) {
  return (
    <Link to={to} className="custom-link-bg">
      {children}
    </Link>
  )
}

export default ButtonBgComponent