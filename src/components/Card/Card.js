import './Card.css'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
    return (
        <Link to={`/property/${id}`} className='accomodation-card'>
            <img src={cover} alt={title} className='card-image' />
            <p className='card-title'>{title}</p>
        </Link>
    )
}

export default Card