import './Values.css'
import Collapse from "../Collapse/Collapse"
import arrowUpDesktop from '../../assets/arrow-up-desktop.svg'
import arrowDownDesktop from '../../assets/arrow-down-desktop.svg'

function Values() {
    return (
        <section className='values-section'>
            <Collapse title="Fiabilité" arrowDown={arrowDownDesktop} arrowUp={arrowUpDesktop} content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" />
            <Collapse title="Respect" arrowDown={arrowDownDesktop} arrowUp={arrowUpDesktop} content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de  notre plateforme." />
            <Collapse title="Service" arrowDown={arrowDownDesktop} arrowUp={arrowUpDesktop} content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
            <Collapse title="Sécurité" arrowDown={arrowDownDesktop} arrowUp={arrowUpDesktop} content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </section>
    )
}

export default Values