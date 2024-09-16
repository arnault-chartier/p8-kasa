import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from './Collapse'
import '@testing-library/jest-dom'

// Mock d'une image de flèche pour éviter les erreurs de chargement
const arrowUpMock = 'arrowUp.svg'

describe('Collapse Component', () => {

    // Test 1 : Vérifie que le titre passé en props est correctement affiché
    it('Should display the correct title', () => {

        // Rend le composant Collapse avec un titre spécifique
        render(<Collapse title="Test Title" arrowUp={arrowUpMock} />)

        // Recherche l'élément qui contient le texte du titre
        const titleElement = screen.getByText('Test Title')

        // Vérifie que l'élément du titre est bien présent dans le document
        expect(titleElement).toBeInTheDocument()
    })

    // Test 2 :  Vérifie que le Collapse s'ouvre/ferme et applique les bonnes classes
    it('Should toggle content visibility and apply the correct classes on button click', () => {

        // Rend le composant Collapse avec du contenu enfant
        render(<Collapse title="Test Toggle" arrowUp={arrowUpMock}>Test Content</Collapse>)

        // Sélection des éléments
        const button = screen.getByRole('button')
        const contentElement = screen.getByTestId('collapse-content')
        const arrow = screen.getByRole('img')

        // Vérifie que le contenu et la flèche n'ont pas la classe 'open' au départ (collapse fermé)
        expect(contentElement).not.toHaveClass('open')
        expect(arrow).not.toHaveClass('open')

        // Simule un clic sur le bouton pour ouvrir le collapse
        fireEvent.click(button)

        // Vérifie que la classe 'open' est appliquée au contenu et à la flèche après l'ouverture
        expect(contentElement).toHaveClass('open')
        expect(arrow).toHaveClass('open')

        // Simule un autre clic pour refermer le collapse
        fireEvent.click(button)

        // Vérifie que la classe 'open' est retirée après la fermeture
        expect(contentElement).not.toHaveClass('open')
        expect(arrow).not.toHaveClass('open')
    })
})