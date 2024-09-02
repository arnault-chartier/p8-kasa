import './Home.css'
import Banner from '../../components/Banner/Banner'
import PropertiesCards from '../../components/PropertiesCards/PropertiesCards'
import HomeBannerBackground from '../../assets/home-banner-background.png'

function Home() {
    return (
        <main className='home-main'>
            <Banner bannerText='Chez vous, partout et ailleurs' bannerBackground={HomeBannerBackground} />
            <PropertiesCards />
        </main>

    )
}

export default Home