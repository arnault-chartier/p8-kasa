import './CollapsesContainer.css'
import Collapse from "../Collapse/Collapse"
import arrowUpDesktop from '../../assets/arrow-up-desktop.svg'
import arrowDownDesktop from '../../assets/arrow-down-desktop.svg'

// Tableau de données des collapses
const collapsesData = [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

function CollapsesContainer() {
    return (
        <section className='collapses-section'>
            {/* Utilisation de map pour générer les composants Collapse à partir du tableau de données */}
            {collapsesData.map((collapse, index) => (
                <Collapse
                    key={index}
                    title={collapse.title}
                    arrowDown={arrowDownDesktop}
                    arrowUp={arrowUpDesktop}
                >
                    {/* Contenu passé en tant que children */}
                    <p>{collapse.content}</p>
                </Collapse>
            ))}
        </section>
    )
}

export default CollapsesContainer