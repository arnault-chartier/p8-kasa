import './CardsContainer.css'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

function CardsContainer() {

    // Déclaration du useState "accomodations" initialisé avec un tableau vide
    const [accomodations, setAccomodations] = useState([])

    // Fonction asynchrone pour récupérer les données des logements
    const fetchAccomodations = async () => {
        try {
            // Appel à l'API pour récupérer les données des logements
            const response = await fetch('http://localhost:8080/api/properties')
            // Conversion de la réponse en JSON
            const accomodationsData = await response.json()
            // Mise à jour de "accomodations" avec les données JSON extraites
            setAccomodations(accomodationsData)
        } catch (error) {
            // Gestion des erreurs potentielles
            console.error('Erreur lors de la récupération des logements :', error)
        }
    }

    // Utilisation de useEffect pour appeler "fetchAccomodations" au montage du composant
    useEffect(() => {
        fetchAccomodations()
    }, []) // Tableau vide en dépendance pour que le code ne s'exécute qu'une seule fois au montage

    return (
        <section className='cards-section'>
            {accomodations.map((accomodation) => (
                // Le tableau "accomodations" est parcouru et un composant "Card" est créé pour chaque logement
                <Card
                    key={accomodation.id}
                    id={accomodation.id}
                    title={accomodation.title}
                    cover={accomodation.cover} />
            ))}
        </section>
    )
}

export default CardsContainer
