import './Accomodation.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'

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
        <div>
            <Slideshow slides={accomodation.pictures} />
            <h1>{accomodation.title}</h1>
            <p>{accomodation.description}</p>
        </div>
    )
}

export default Accomodation