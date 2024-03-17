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
                <img src="https://dfinnova.com/wp-content/themes/yootheme/cache/dc/lechugas-dc273b01.jpeg" alt="Lechugas" />
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
                <img src="https://www.infocampo.com.ar/wp-content/uploads/2021/03/rabanito-infocampo.jpg" alt="rabanito" />
                <p>Rabanito</p>
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