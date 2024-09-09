import './Accomodation.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import Title from '../../components/Title/Title'
import Host from '../../components/Host/Host'
import Tags from '../../components/Tags/Tags'
import Rate from '../../components/Rate/Rate'
import Collapse from '../../components/Collapse/Collapse'
import arrowUpDesktop from '../../assets/arrow-up-desktop.svg'
import arrowDownDesktop from '../../assets/arrow-down-desktop.svg'

function Accomodation() {

    // Récupération de l'ID du logement depuis l'URL "/property/:id"
    const { id } = useParams()

    // Déclaration du useState "accomodation" initialisé à null
    const [accomodation, setAccomodation] = useState(null)

    // Fonction asynchrone pour récupérer les données du logement
    const fetchAccomodation = async () => {
        try {
            // Appel à l'API pour récupérer les données du logement en fonction de l'ID
            const response = await fetch(`http://localhost:8080/api/properties/${id}`)
            // Conversion de la réponse en JSON
            const accomodationData = await response.json()
            // Mise à jour de "accomodation" avec les données extraites
            setAccomodation(accomodationData)
        } catch (error) {
            // Gestion des erreurs potentielles
            console.error('Erreur lors de la récupération du logement :', error)
        }
    }

    // Utilisation de useEffect pour appeler "fetchAccomodation" au montage du composant
    useEffect(() => {
        fetchAccomodation()
    }, [id]) // Le useEffect se déclenche à chaque changement de l'ID dans l'URL

    // Vérification si les données du logement ne sont pas encore chargées, affiche un message de chargement
    if (!accomodation) {
        return <p>Chargement du logement...</p>;
    }

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
                    <Collapse title='Description' arrowDown={arrowDownDesktop} arrowUp={arrowUpDesktop}>
                        {/* Description passée en tant que children */}
                        <p>{accomodation.description}</p>
                    </Collapse>
                    <Collapse title='Équipements' arrowDown={arrowDownDesktop} arrowUp={arrowUpDesktop}>
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