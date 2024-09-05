import './Properties.css'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

function Properties() {
    // Déclaration du useState "properties" initialisé avec un tableau vide
    const [properties, setProperties] = useState([])

    // Récupération des données lorsque le composant est monté
    useEffect(() => {
        // Appel à l'API pour récupérer les données des logements
        fetch('http://localhost:8080/api/properties')
            .then(response => response.json()) // Conversion de la réponse brute de l'API en JSON (promesse)
            .then(propertiesData => {
                // Mise à jour de "properties" avec les données JSON extraites (promesse)
                setProperties(propertiesData)
            })
            .catch(error => {
                // Gestion des erreurs potentielles
                console.error("Erreur lors de la récupération des logements :", error)
            })
    }, []) // Tableau vide en dépendance pour que le code ne s'exécute qu'une seule fois au montage

    return (
        <section className='properties-section'>
            {properties.map(property => ( // Le tableau "properties" est parcouru et un composant "Card" est créé pour chaque logement
                <Card key={property.id} title={property.title} cover={property.cover} />
            ))}
        </section>
    )
}

export default Properties