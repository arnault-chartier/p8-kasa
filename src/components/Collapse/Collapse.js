import './Collapse.css'
import { useState } from 'react'

function Collapse({ title, children, arrowUp, arrowDown }) {
    // Déclaration du useState "isOpen" pour gérer l'ouverture ou la fermeture du collapse
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='collapse'>
            {/* En-tête du collapse contenant le titre et un bouton pour ouvrir/fermer */}
            <div className='collapse-header'>
                <h3 className='collapse-title'>{title}</h3>
                {/* Bouton qui inverse l'état de isOpen lorsqu'il est cliqué */}
                <button className='collapse-button' onClick={() => setIsOpen(!isOpen)}>
                    {/* Affichage de l'icône arrowDown si le collapse est ouvert, sinon arrowUp */}
                    <img
                        className='arrow'
                        src={isOpen ? arrowDown : arrowUp}
                        alt={isOpen ? 'Flèche pour replier' : 'Flèche pour dérouler'}
                    />
                </button>
            </div>
            {/* Affichage conditionnel du contenu (enfants) seulement quand isOpen est true */}
            {isOpen && <div className='collapse-content'>{children}</div>}
        </div>
    )
}

export default Collapse