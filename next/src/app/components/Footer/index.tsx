export default function Footer() {
  return (
    <footer className='rounded-t-3xl bg-black px-6 pt-10 pb-8 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className="grid grid-cols-4 text-sm gap-10">
          <div className="space-y-5">
            <div className="space-y-6">
              <h4 className="font-gilmer font-bold text-xl">Guadalajara HQ</h4>
              <p className="text-xs text-c-gray-200 leading-5">
                Av. Américas 1250, Planta Baja-B, San Miguel de la Colina, Zapopan, Jalisco, México, C.P. 45160
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-xs">Nombre pendiente</p>
              <ul className="text-xs text-c-gray-200 leading-5 space-y-1">
                <li>(+52) 33 3642 2224</li>
                <li>gdl@aresarquitectos.com</li>
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-6">
              <h4 className="font-bold text-xl">CDMX</h4>
              <p className="text-xs text-c-gray-200 leading-5">
                Insurgentes Sur 1079, Colonia del Valle Centro, Benito Juarez, Ciudad de, México, C.P. 03100
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-xs">Zyanya Quero</p>
              <ul className="text-xs text-c-gray-200 leading-5 space-y-1">
                <li>(+52) 33 3642 2224</li>
                <li>cdmx@aresarquitectos.com</li>
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-6">
              <h4 className="font-bold text-xl">L35 Barcelo﻿na</h4>
              <p className="text-xs text-c-gray-200 leading-5">
                Avda. Diagonal 466, 6ª planta 08006 BARCELONA
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-xs">Sonia Sanz</p>
              <ul className="text-xs text-c-gray-200 leading-5 space-y-1">
                <li>(+34) 93 2922 299</li>
                <li>bcn@L35.com</li>
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-6">
              <h4 className="font-bold text-xl">L35 Madrid</h4>
              <p className="text-xs text-c-gray-200 leading-5">
                Plaza de la Marina Española, 3 28013 MADRID
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-xs">Alejandro Lorca</p>
              <ul className="text-xs text-c-gray-200 leading-5 space-y-1">
                <li>(+ 34) 91 5474 96</li>
                <li>mad@L35.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-20 pb-8">
          <h4 className="font-bold text-xl">Mapa de navegación</h4>
        </div>
        <div className="grid grid-cols-4 text-sm gap-10">
          <ul className="font-bold text-base text-c-gray-200 space-y-3">
            <li><a href="#" className="hover:underline">Proyectos</a></li>
            <li><a href="#" className="hover:underline">El Estudio</a></li>
            <li><a href="#" className="hover:underline">Cultura Ares</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
          <ul className="font-bold text-base text-c-gray-200 space-y-3">
            <li><a href="#" className="hover:underline">Usos Mixtos</a></li>
            <li><a href="#" className="hover:underline">Centros comerciales</a></li>
            <li><a href="#" className="hover:underline">Vivienda</a></li>
            <li><a href="#" className="hover:underline">Hoteles</a></li>
            <li><a href="#" className="hover:underline">Master plan</a></li>
          </ul>
          <ul className="font-bold text-base text-c-gray-200 space-y-3">
            <li><a href="#" className="hover:underline">LATAM</a></li>
            <li><a href="#" className="hover:underline">Retail</a></li>
            <li><a href="#" className="hover:underline">Deportivo</a></li>
            <li><a href="#" className="hover:underline">Movilidad</a></li>
            <li><a href="#" className="hover:underline">Renovaciones y expansiones</a></li>
          </ul>
          <ul className="font-bold text-base text-c-gray-200 space-y-3">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Linkedin</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
        <div className="pt-20">
          <div className="grid grid-cols-4 text-sm gap-10">
            <p className="font-bold text-xs text-c-gray-200">Ares 2025 ©</p>
            <a href="#" className="font-bold text-xs text-c-gray-200 hover:underline">Uso de cookies</a>
            <a href="#" className="font-bold text-xs text-c-gray-200 hover:underline">Aviso de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}