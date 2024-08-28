import './HomeBanner.css'
import BackgroundImage from '../../assets/home-banner-background.png'

function HomeBanner() {
    return (
        <section className='banner'>
            <img className='banner-image' src={BackgroundImage} alt='Image de la bannière'></img>
            <p className='banner-text'>Chez vous, partout et ailleurs</p>
        </section>
    )
}

export default HomeBanner