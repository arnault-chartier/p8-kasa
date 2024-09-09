import './Title.css'

function Title({ title, location }) {
    return (
        <div className="title-container">
            <h1 className="accomodation-title">{title}</h1>
            <p className="accomodation-location">{location}</p>
        </div>
    )
}

export default Title