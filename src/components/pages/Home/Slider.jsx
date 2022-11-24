import React from 'react'
import "./Home.css"

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/vector-gratis/concepto-compras-linea-aplicacion-redes-sociales-smartphone-bolsa-compras-carro-regalo-apto-promocion-tiendas-digitales-web-publicitaria-ilustracion-vectorial_548887-122.jpg?w=1380&t=st=1669160729~exp=1669161329~hmac=c02d53c713df9d159a4e7b222eb13c97700d703c1dfe6e802d6025357ff6faf9" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/vector-gratis/banner-concepto-lunes-cibernetico-estilo-neon-moda-letrero-luminoso-publicidad-nocturna-publicidad-rebajas-ventas-lunes-cibernetico-ilustracion-vectorial-sus-proyectos_60438-2115.jpg?w=1060&t=st=1669156106~exp=1669156706~hmac=a7e2823e99a48dab5b4b898dd535ebf87a3ce1e781d2e1a3c49d25d85efe9ccb" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/vector-gratis/innovadores-dispositivos-electronicos-tecnologia-electronica-iconos-isometricos-reloj-inteligente-auriculares-realidad-virtual-purpura_1284-29227.jpg?w=740&t=st=1669156237~exp=1669156837~hmac=598e4e275dc7757f2d0ad9d6a330a160c8b3263e10a42a170d8c4a227ffc9d58" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Slider