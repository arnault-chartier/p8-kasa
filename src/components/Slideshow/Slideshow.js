import './Slideshow.css'
import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'

function Slideshow({ slides }) {

    // Déclaration du useState "currentIndex" initialisé à 0 (première slide)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fonction pour passer à la slide précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        )
    }

    // Fonction pour passer à la slide suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        )
    }

    // Affichage des flèches et du compteur si plusieurs slides
    const showControls = slides.length > 1

    return (
        <div className='slideshow'>
            {/* Affiche le bouton "slide précédente" seulement si plusieurs slides */}
            {showControls && (
                <button onClick={prevSlide} className='slideshow-prev-button'>
                    <img src={arrowLeft} alt="Photo précédente" />
                </button>
            )}
            {/* Affiche l'image actuelle */}
            <img src={slides[currentIndex]} className='slideshow-slide' alt={`Photo ${currentIndex + 1}`} />
            {/* Affiche le bouton "slide suivante" seulement si plusieurs slides */}
            {showControls && (
                <button onClick={nextSlide} className='slideshow-next-button'>
                    <img src={arrowRight} alt="Photo suivante" />
                </button>
            )}
            {/* Affiche le compteur seulement si plusieurs slides */}
            {showControls && (
                <div className='slideshow-counter'>
                    {currentIndex + 1}/{slides.length}
                </div>
            )}
        </div>
    )
}

export default Slideshow