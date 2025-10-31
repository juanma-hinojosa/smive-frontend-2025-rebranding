import logoSmive from "/images/smive-logo-nav.jpg"

function FooterComponent() {
  return (
    <footer className="bg-[#f5f6fb] text-gray-700 py-10 px-6 md:px-16 lg:px-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logoSmive}
              alt="Nexus Asset Developments Ltd Logo"
              className="w-17 h-12 mr-2"
              loading="lazy"
            />
            <span className="font-semibold text-lg text-gray-800">SMIVE Refacciones y Mantenimiento.</span>
          </div>

          <p className="text-sm leading-relaxed">
            Descubre una empresa eficiente para todos tus proyectos inmobiliarios
            <strong> SMIVE Refacciones y Mantenimiento.</strong> Te invitamos a ver nuestros proyectos
            y ver cada etapa de los mismo hasta el resultado final.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              {/* <Icon icon="mdi:facebook" width="22" /> */}
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600">
              {/* <Icon icon="mdi:youtube" width="22" /> */}
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500">
              {/* <Icon icon="mdi:twitter" width="22" /> */}
            </a>
            <a href="#" aria-label="WordPress" className="hover:text-indigo-600">
              {/* <Icon icon="mdi:wordpress" width="22" /> */}
            </a>
          </div>
        </div>

        {/* Sister Concern */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Holiday Eco Resorts</a></li>
            <li><a href="#" className="hover:text-blue-600">Nexus International School</a></li>
            <li><a href="#" className="hover:text-blue-600">Nexus Trading Company BD Ltd</a></li>
            <li><a href="#" className="hover:text-blue-600">Nexus Bhawai Agro</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">Navegar</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-blue-600">About</a></li>
            <li><a href="/service" className="hover:text-blue-600">Service</a></li>
            <li><a href="/property" className="hover:text-blue-600">Property</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">Dhaka Office</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              {/* <Icon icon="mdi:map-marker" className="text-blue-600 mr-2 mt-0.5" /> */}
              House #58 (4th Floor), Road #13, Sector #12, Uttara, Dhaka-1230
            </li>
            <li className="flex items-start">
              {/* <Icon icon="mdi:phone" className="text-blue-600 mr-2 mt-0.5" /> */}
              +8801711263606, +8801911942828
            </li>
            <li className="flex items-start">
              {/* <Icon icon="mdi:email-outline" className="text-blue-600 mr-2 mt-0.5" /> */}
              nexusassetdevelopments@gmail.com <br /> info@nexusassetbd.com
            </li>
          </ul>

          <h3 className="font-semibold text-gray-900 mt-5 mb-2 text-lg">Gazipur Office</h3>
          <p className="text-sm flex items-start">
            {/* <Icon icon="mdi:map-marker" className="text-blue-600 mr-2 mt-0.5" /> */}
            Nexus Dream Tower #7/1, Bangalgus, Joydebpur, Gazipur - 1700.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-200 pt-5">
        © {new Date().getFullYear()} Nexus Asset Developments Ltd. All Rights Reserved.
      </div>
    </footer>
  )
}

export default FooterComponent