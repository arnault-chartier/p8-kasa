import './Collapse.css'
import { useState } from 'react'

function Collapse({ title, children, arrowUp }) {
    // Déclaration du useState "isOpen" pour gérer l'ouverture ou la fermeture du collapse
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='collapse'>
            {/* En-tête du collapse contenant le titre et un bouton pour ouvrir/fermer */}
            <div className='collapse-header'>
                <h3 className='collapse-title'>{title}</h3>
                {/* Bouton qui inverse l'état de isOpen lorsqu'il est cliqué */}
                <button className='collapse-button' onClick={() => setIsOpen(!isOpen)}>
                    {/* Image de la flèche avec une classe conditionnelle pour la rotation */}
                    <img
                        className={`arrow ${isOpen ? 'open' : ''}`} // Ajout de la classe 'open' si le collapse est ouvert
                        src={arrowUp}
                        alt={isOpen ? 'Flèche pour replier' : 'Flèche pour dérouler'}
                    />
                </button>
            </div>
            {/* Ajout de la classe 'open' si le collapse est ouvert */}
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Collapse