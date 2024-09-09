import './Rate.css'
import activeStar from '../../assets/star-active.svg'
import inactiveStar from '../../assets/star-inactive.svg'

function Rate({ rating }) {

    // Tableau de 5 éléments correspondant aux étoiles
    const stars = Array.from({ length: 5 }, (_, index) => index + 1)

    return (
        <div className='rate'>
            {stars.map((star) => (
                <img
                    key={star}
                    // Affichage conditionnel en fonction de la position de l'étoile
                    src={star <= rating ? activeStar : inactiveStar}
                    alt={star <= rating ? 'Étoile activée' : 'Étoile désactivée'}
                    className='rate-star'
                />
            ))}
        </div>
    )
}

export default Rate