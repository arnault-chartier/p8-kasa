import './Collapse.css'
import { useState } from 'react'

function Collapse({ title, content, arrowUp, arrowDown }) {
    // Déclaration du useState "isOpen" pour gérer l'ouverture ou la fermeture du collapse
    const [isOpen, setIsOpen] = useState(false);

    // Affichage lorsque le collapse est ouvert (isOpen est true)
    return isOpen ? (
        <div className='collapse'>
            <div className='collapse-header'>
                <h3 className='collapse-title'>{title}</h3>
                {/* Bouton pour fermer le collapse, qui change l'état isOpen à false */}
                <button className='collapse-button' onClick={() => setIsOpen(false)}>
                    <img src={arrowDown} alt='Flèche pour dérouler' />
                </button>
            </div>
            {/* Contenu du collapse affiché seulement quand isOpen est true */}
            <p className='collapse-content'>{content}</p>
        </div>
    ) : (
        // Affichage lorsque le collapse est fermé (isOpen est false)
        <div className='collapse'>
            <div className='collapse-header'>
                <h3 className='collapse-title'>{title}</h3>
                {/* Bouton pour ouvrir le collapse, qui change l'état isOpen à true */}
                <button className='collapse-button' onClick={() => setIsOpen(true)}>
                    <img src={arrowUp} alt='Flèche pour replier' />
                </button>
            </div>
        </div>
    )
}

export default Collapse