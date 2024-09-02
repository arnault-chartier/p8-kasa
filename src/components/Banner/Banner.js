import './Banner.css'

function Banner({ bannerText, bannerBackground }) {
    return (
        <section className='banner'>
            <img className='banner-image' src={bannerBackground} alt='Image de la bannière'></img>
            {bannerText && <p className='banner-text'>{bannerText}</p>}
        </section>
    )
}

export default Banner