import styled from 'styled-components'

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);;
        justify-content: center;
        margin: 0 auto;
    };
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);;
        justify-content: center;
        margin: 0 auto;
    };

   
`
