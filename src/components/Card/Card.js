import './Card.css'

function Card({ title, cover }) {
    return (
        <div className='accomodation-card'>
            <img src={cover} alt={title} className='card-image' />
            <p className='card-title'>{title}</p>
        </div>
    )
}

export default Card