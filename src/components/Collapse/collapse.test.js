import { render, screen } from "@testing-library/react"
import Collapse from "./Collapse"
import '@testing-library/jest-dom'

describe('Test du composant Collapse', () => {
    it('Vérifie que le titre app', () => {
        render(<Collapse title={'Test'} />)
        const title = screen.getByText('Test')
        expect(title).toBeInTheDocument()
    })
})