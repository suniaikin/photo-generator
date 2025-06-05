import styled from 'styled-components'

type ButtonProps = {
	$variant: 'primary' | 'secondary'
	$size?: 'default' | 'large'
}

export const ButtonStyled = styled.button<ButtonProps>`
    width: ${props => props.$size === 'large' ? '180px' : '86px'};
    height: ${props => props.$size === 'large' ? '40px' : '30px'};
    @media (max-width: 967px) {
        width: ${props => props.$size === 'large' ? '100%' : '86px'};
    }
    border-radius: 5px;
    font-size: ${props => props.$size === 'large' ? '12px' : '10px'};
    font-weight: bold;
    cursor: pointer;
    background: ${props => props.$variant === 'primary' ? '#4E71FE' : '#fff'};
    color: ${props => props.$variant === 'primary' ? '#fff' : '#4E71FE'};
    border: ${props => props.$variant === 'primary' ? 'none' : '2px solid #4E71FE'};

`

export const ButtonsBox = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
`