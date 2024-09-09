import './About.css'
import Banner from "../../components/Banner/Banner"
import AboutBannerBackground from '../../assets/about-banner-background.png'
import CollapsesContainer from "../../components/CollapsesContainer/CollapsesContainer"

function About() {
    return (
        <main className="about-main">
            <Banner bannerBackground={AboutBannerBackground} />
            <CollapsesContainer />
        </main>
    )
}

export default About