import React from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
  return (
<section style={{backgroundColor: '#eee'}}>
  <div className="text-center container py-5">
    <h4 className="mt-4 mb-5"><strong>Categories</strong></h4>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img alt='Smartwatch' src="https://img.freepik.com/foto-gratis/mujer-holografia-tecnologia-portatil-smartwatch_53876-97923.jpg?w=1060&t=st=1668987894~exp=1668988494~hmac=af7a79b848236381440ab252f92d35f2df90e6cc2e5c75ed38bcfe3c672f4191" className="w-100" />
          </div>
          <div className="card-body">
            <Link to="/categories/smartwatch" className="text-reset">
              <h5 className="card-title mb-3">Smartwatch</h5>
            </Link>
              <Link className="text-reset" to="/categories/smartwatch">View products</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img alt='Smart Speakers' src="https://img.freepik.com/foto-gratis/altavoz-inteligente-control-casa-tecnologia-innovadora_53876-97093.jpg?w=1060&t=st=1668984942~exp=1668985542~hmac=fbe2a8c59dee4de231f6d37e6f82189bf0752ca8d92c0f37d17274b671d914bd" className="w-100" />
          </div>
          <div className="card-body">
            <Link className="text-reset">
              <h5 className="card-title mb-3">Smart Speakers</h5>
            </Link>
            <Link className="text-reset">
              <p>View products</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img alt='Security Systems' src="https://img.freepik.com/foto-gratis/mujer-cerca-comprobando-camara-seguridad_23-2148994177.jpg?w=1060&t=st=1668987247~exp=1668987847~hmac=8fb9fa52b9eb26b260b3eded622b63d6f12c93be82f2a611f480a037e92d960f" className="w-100" />
          </div>
          <div className="card-body">
            <Link className="text-reset">
              <h5 className="card-title mb-3">Security Systems</h5>
            </Link>
            <Link className="text-reset">
              <p>View products</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img alt='Gaming' src="https://img.freepik.com/foto-gratis/punto-vista-joven-feliz-celebrando-su-victoria-juego-disparos-linea-controlador-inalambrico_482257-17356.jpg?w=1060&t=st=1668986379~exp=1668986979~hmac=e8fe2f2d4ceefceeb67b99dda5f83a91a0d20cde418c7bf5254b336c34ea327c" className="w-100" />
          </div>
          <div className="card-body">
            <Link className="text-reset">
              <h5 className="card-title mb-3">Gaming</h5>
            </Link>
            <Link className="text-reset">
              <p>View Products</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img alt='Headphones' src="https://img.freepik.com/foto-gratis/carismatica-moderna-joven-atractiva-chica-afroamericana-corte-pelo-afro-escuchando-musica-auriculares_1258-85160.jpg?w=1060&t=st=1668986672~exp=1668987272~hmac=0c43b86e7ac01c65f1d2a35fdb4a58cb80c82a4b3c8206f5bc754fc75f638091" className="w-100" />
          </div>
          <div className="card-body">
            <Link className="text-reset">
              <h5 className="card-title mb-3">Headphones</h5>
            </Link>
            <Link className="text-reset">
              <p>View products</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Products