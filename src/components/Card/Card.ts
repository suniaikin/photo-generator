import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding-top: 10px;
    width: 300px;
    align-items: center;
	min-height: 350px;
	height: 100%;
    margin: 0 auto;
    justify-self: center;

`

type ImageProps = {
	$src: string
}

export const Image = styled.div<ImageProps>`
    background-image: url(${props => props.$src});
    background-size: cover;
    background-position: center;
    height: 170px;
    min-width: 280px;
    border-radius: 12px;

`
export const UnderImageBox = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
	min-height: 170px;
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    overflow-wrap: anywhere;
`

export const Description = styled.p`
    font-size: 12px;
    color: #abb3ba;
    line-height: 1.6;
    margin-top: 12px;
	min-height: 40px;
	height: 100%;
    overflow-wrap: anywhere;
`





