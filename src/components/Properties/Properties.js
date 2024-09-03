import './Properties.css'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

function Properties() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
            .then(response => response.json())
            .then(propertiesData => {
                setProperties(propertiesData)
            })
    }, [])

    return (
        <section className='properties-section'>
            {properties.map(property => (
                <Card key={property.id} title={property.title} cover={property.cover} />
            ))}
        </section>
    )
}

export default Properties