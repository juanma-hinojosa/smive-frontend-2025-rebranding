import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/homepage/home'
import ServicesPage from "./pages/servicespage/services"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* rutas publicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
