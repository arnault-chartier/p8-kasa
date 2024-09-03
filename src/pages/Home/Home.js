import './Home.css'
import Banner from '../../components/Banner/Banner'
import Properties from '../../components/Properties/Properties'
import HomeBannerBackground from '../../assets/home-banner-background.png'

function Home() {
    return (
        <main className='home-main'>
            <Banner bannerText='Chez vous, partout et ailleurs' bannerBackground={HomeBannerBackground} />
            <Properties />
        </main>

    )
}

export default Home