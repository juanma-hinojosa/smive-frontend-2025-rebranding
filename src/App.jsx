import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/homepage/home'
import ServicesPage from "./pages/servicespage/services"
import FooterComponent from "./components/footer/footerComponent"
import NavbarComponent from "./components/Navbar/NavbarComponent"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          {/* rutas publicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
