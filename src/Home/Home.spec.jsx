import { getByText, render, screen, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {Home} from './Home'

jest.spyOn(global, 'fetch').mockImplementation(() => 
    Promise.resolve({
        json: () => Promise.resolve({
            city: 'São Paulo',
            state: 'SP',
            address: 'Avenida Paulista'
        })
    })
);
describe('<Home />', () => {
    it('should h1 tag render', async () => {
        const {renderHome} = render(<Home />);

        await act(async () => {
            await waitForElement(() => getByText('São Paulo'))
        })
        
    })
})