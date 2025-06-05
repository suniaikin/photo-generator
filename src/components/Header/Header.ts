import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 970px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;

`

export const HeaderWrapper = styled.div`
    display: flex;
    background-color: #e5e3e3;
    width: 100%;
    justify-content: center;
    padding: 0 20px;
    @media (max-width: 967px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;

`

export const Logo = styled.img`
  height: 60px;
    @media (max-width: 967px) {
        width: 100%;
        justify-content: center;
    }

`

export const HeaderTitle = styled.h1`
	text-align: center;
	font-size: 30px;
`

