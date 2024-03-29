import './Hero.scss'
// import background from '/background.png'

const Hero = () => {
    return (
        <div className='hero-container' id='inicio'>
            <div className='hero-container__title'>
                TE DAMOS LA BIENVENIDA
            </div>
            <div className='hero-container__text'>
                Somos responsables y apasionados productores y distribuidores de hortalizas y verduras al por mayor. Nos comprometemos a ofrecerte la más alta calidad y frescura en cada uno de nuestros productos, garantizando su inocuidad para un consumo seguro.
            </div>
            <a href='https://wa.me/50683019087' target='_blank' className='hero-container__cta'>
                <button className='hero-container__cta-button'>
                    MÁS INFO
                </button>
            </a>
        </div>
    )
}

export default Hero