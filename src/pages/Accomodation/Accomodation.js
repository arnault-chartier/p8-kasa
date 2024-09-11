import './Accomodation.css'
import { useLoaderData, redirect } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import Title from '../../components/Title/Title'
import Host from '../../components/Host/Host'
import Tags from '../../components/Tags/Tags'
import Collapse from '../../components/Collapse/Collapse'
import Rate from '../../components/Rate/Rate'
import arrowUpDesktop from '../../assets/arrow-up-desktop.svg'

// Fonction loader pour récupérer les données du logement 
// (préchargement des données nécessaires avant le rendu du composant)
export async function accomodationLoader({ params }) {
    // Récupération de l'ID du logement depuis l'URL "/property/:id"
    const { id } = params
    try {
        // Appel à l'API pour récupérer les données du logement en fonction de l'ID
        const response = await fetch(`http://localhost:8080/api/properties/${id}`)
        if (!response.ok) {
            // Redirige vers la page d'erreur si la réponse n'est pas correcte
            throw new Error('Logement non trouvé')
        }
        // Conversion de la réponse en JSON
        const accomodation = await response.json()

        // Vérifie si les données de l'hébergement sont valides (vérifie que l'objet a un ID)
        if (!accomodation || !accomodation.id) {
            return redirect('/error') // Redirige vers la route d'erreur
        }
        return accomodation
    } catch (error) {
        // Capture les erreurs réseau ou autres exceptions et redirige vers la page d'erreur
        console.error('Erreur lors de la récupération du logement :', error)
        return redirect('/error') // Redirige en cas d'erreur
    }
}

function Accomodation() {
    // Récupère les données de l'hébergement via le loader
    const accomodation = useLoaderData()

    return (
        <main className='accomodation-main'>
            <Slideshow slides={accomodation.pictures} />
            <section className='accomodation-description'>
                <div className='accomodation-description_main'>
                    <div className='accomodation-description_title-tags'>
                        <Title title={accomodation.title} location={accomodation.location} />
                        <Tags tags={accomodation.tags} />
                    </div>
                    <div className='accomodation-description_host-rate'>
                        <Host name={accomodation.host.name} picture={accomodation.host.picture} />
                        <Rate rating={accomodation.rating} />
                    </div>
                </div>
                <div className='collapses-container'>
                    <Collapse title='Description' arrowUp={arrowUpDesktop}>
                        {/* Description passée en tant que children */}
                        <p>{accomodation.description}</p>
                    </Collapse>
                    <Collapse title='Équipements' arrowUp={arrowUpDesktop}>
                        {/* Liste des équipements passée en tant que children */}
                        <ul>
                            {accomodation.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </section>
        </main>
    )
}

export default Accomodation