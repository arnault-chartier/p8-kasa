import './About.css'
import Banner from "../../components/Banner/Banner"
import AboutBannerBackground from '../../assets/about-banner-background.png'
import Values from "../../components/Values/Values"

function About() {
    return (
        <main className="about-main">
            <Banner bannerBackground={AboutBannerBackground} />
            <Values />
        </main>
    )
}

export default About