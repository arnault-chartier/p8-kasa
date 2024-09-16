import { render, screen } from '@testing-library/react'
import Banner from './Banner'
import '@testing-library/jest-dom'

// Mock de l'image de la bannière pour éviter les erreurs de chargement
const bannerBackgroundMock = 'bannerImage.jpg'

describe('Banner Component', () => {

    // Test 1 : Vérifie que l'image de la bannière est bien rendue
    it('Should display the banner image', () => {

        // Rend le composant Banner avec le mock de l'image comme prop
        render(<Banner bannerBackground={bannerBackgroundMock} />)

        // Recherche l'élément <img> dans le DOM en utilisant son attribut "alt"
        const bannerImage = screen.getByAltText('Image de la bannière')

        // Vérifie que l'élément image est bien présent dans le document
        expect(bannerImage).toBeInTheDocument()

        // Vérifie que l'attribut src de l'image correspond bien à la source
        expect(bannerImage).toHaveAttribute('src', bannerBackgroundMock)
    })

    // Test 2 : Vérifie que le texte de la bannière est bien affiché si passé en props
    it('Should display the banner text when provided', () => {

        // Définit un texte fictif à passer en prop
        const text = 'Bienvenue sur notre site'

        // Rend le composant Banner avec le texte et l'image en props
        render(<Banner bannerText={text} bannerBackground={bannerBackgroundMock} />)

        // Recherche l'élément qui contient le texte de la bannière
        const bannerText = screen.getByText(text)

        // Vérifie que le texte de la bannière est bien présent dans le document
        expect(bannerText).toBeInTheDocument()
    })

    // Test 3 : Vérifie que le texte n'est pas rendu si aucune valeur n'est passée en props
    it('Should not display banner text when bannerText is not provided', () => {

        // Rend le composant Banner sans passer de texte en props
        render(<Banner bannerBackground={bannerBackgroundMock} />)

        // Essaie de trouver un élément texte dans la bannière avec n'importe quel contenu
        const bannerText = screen.queryByText(/.+/) // Expression régulière qui correspond à tout contenu texte

        // Vérifie qu'il n'y a aucun élément texte dans le document
        expect(bannerText).not.toBeInTheDocument()
    })
})