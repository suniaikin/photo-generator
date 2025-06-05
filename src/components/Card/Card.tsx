import {
	Container,
	Image,
	UnderImageBox,
	Title,
	Description,
		} from './Card.ts'

import { ButtonStyled, ButtonsBox } from '../Button/Button.ts'


type CardProps = {
	image: string
	title: string
	description: string
}

const Card = (props: CardProps) => {
	return (
		<Container>
			<Image $src={props.image} />
			<UnderImageBox>
				<Title>{props.title}</Title>
				<Description>{props.description}</Description>
				<ButtonsBox>
					<ButtonStyled $variant="primary">See more</ButtonStyled>
					<ButtonStyled $variant="secondary">Save</ButtonStyled>
				</ButtonsBox>
			</UnderImageBox>
		</Container>
	)
}

export default Card
