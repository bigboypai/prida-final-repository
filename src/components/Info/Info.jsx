import './Info.scss'

const Info = () => {
  return (
    <div className='info-container' id='quienes-somos'>
        <div className='info-container__section'>
            <h2 className='info-container__section-heading'> QUIENES SOMOS </h2>
            <p className='info-container__section-paragraph'> En AGROCOMERCIAL PRIDA, hemos estado comercializando nuestros vegetales durante más de 15 años en Supermercados, Restaurantes, Procesadoras de alimentos y distribuidores, asegurando la disponibilidad durante todo el año. </p>
            <p className='info-container__section-paragraph'> La mayoría de nuestros productos son cultivados en nuestras propias fincas, donde aplicamos las mejores prácticas agrícolas los 365 días del año para garantizar la máxima calidad, seguridad alimentaria y frescura en cada uno de nuestros vegetales. </p>
        </div>
        <div className='info-container__section' id='productos'>
            <h2 className='info-container__section-heading'> PRODUCTOS </h2>
            <div className='info-container__section-product__grid'>
              <div className='info-container__section-product__item'>
                <img src="https://www.elmueble.com/medio/2022/05/30/th-g-en-pixabay-lechuga_622bee59_1200x630.jpg" alt="Lechugas" />
                <p>Variedad en lechugas</p>
              </div>
              <div className='info-container__section-product__item'>
                <img src="https://www.diggers.com.au/cdn/shop/products/zucchini-tri-coloured-mix-s254_fc72ad55-41f4-4ced-802e-3bf503f77c27_1024x1024.jpg?v=1637122576" alt="zucchini" />
                <p>Zucchini</p>
              </div>
              <div className='info-container__section-product__item'>
                <img src="https://agrosemval.com/wp-content/uploads/2020/05/apio-tall-utah-ipc-01.jpg" alt="Apio" />
                <p>Apio</p>
              </div>
              <div className='info-container__section-product__item'>
                <img src="https://ejerciciosencasa.es/wp-content/uploads/2014/01/3-IMG_3965.jpg" alt="remolacha" />
                <p>Remolacha</p>
              </div>
              <div className='info-container__section-product__item'>
                <img src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2021-06/cebollino-tipos%C2%A9iStock.jpg" alt="Cebollino" />
                <p>Cebollino</p>
              </div>
              <div className='info-container__section-product__item'>
                <img src="https://i0.wp.com/semillasplantae.com/wp-content/uploads/2022/04/mail35.jpeg?fit=750%2C750&ssl=1" alt="apio" />
                <p>Apio</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Info

// productos: 
// lechugas de todas las variedadas
// zuchini
// apio
// remolacha
// cebollino
// rabanito