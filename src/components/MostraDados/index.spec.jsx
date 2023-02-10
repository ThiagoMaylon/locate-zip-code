const { render, screen } = require("@testing-library/react")
const { MostraDados } = require(".")

const mockDados = {
    city: "São Paulo",
    state: "SP",
    district: "centro",
    address: 'Avenida São Paulo'
}

describe('<MostraDados />', () => {
    it('shold render the components', () => {
        render(<MostraDados dadosApi={mockDados}/>)
        const heading = screen.getByText('São Paulo SP');
        const p1 = screen.getByText('distrito: centro');
        const p2 = screen.getByText('Avenida São Paulo');

        screen.debug()
        expect(heading).toBeInTheDocument();
        expect(p1).toBeInTheDocument();
        expect(p2).toBeInTheDocument();
    })
}) 