import './Host.css'

function Host({ name, picture }) {
    return (
        <div className="host-container">
            <p className="host-name">{name}</p>
            <img src={picture} alt={name} className="host-picture" />
        </div>
    )
}

export default Host