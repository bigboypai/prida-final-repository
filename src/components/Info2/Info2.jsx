import './Info2.scss'

const Info = () => {
  return (
    <div className='info-container-bg'>
      <div className='info-container__section' id='mision-vision'>
        <h2 className='info-container__section-heading'> MISIÓN Y VISIÓN </h2>
        <p style={{fontSize: '18px'}}  className='info-container__section-paragraph'> En nuestra empresa, nos comprometemos a ofrecer solidez y confianza a cada uno de nuestros clientes mediante la provisión constante de productos de alta calidad y seguridad alimentaria a lo largo de todo el año. </p>
        <p style={{fontSize: '18px'}}  className='info-container__section-paragraph'> Nuestra visión es ser una empresa agrícola productiva e innovadora que expande su línea de productos más allá de las fronteras, con el objetivo de ofrecer calidad y frescura inigualables a nuestros clientes.. </p>
      </div>
      <div className='info-container__section'>
        <h2 className='info-container__section-heading' id='contacto'> CONTACTO </h2>
        <p style={{fontSize: '18px'}}  className='info-container__section-paragraph'> Tienes un negocio y te gustaría que seamos tu proveedor? </p>
        <a href='https://wa.me/50683019087' target='_blank'>
          <button className='icsb'> MÁS INFO </button>
        </a>
      </div>
    </div>
  )
}

export default Info