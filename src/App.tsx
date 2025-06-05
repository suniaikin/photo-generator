import {useState} from 'react'
import {GlobalStyles} from './styles/GlobalStyles.ts'
import Card from './components/Card/Card.tsx'
import {PageWrapper} from './components/PageWrapper/PageWrapper.ts'
import {CardsGrid} from './components/CardsGrid/CardsGrid.ts'
import {InputArea} from './components/InputArea/InputArea.ts'
import {ButtonStyled} from './components/Button/Button.ts'
import {HeaderTitle} from "./components/Header/Header.ts";
import desertImage from './assets/images/desert.svg?url'
import {faker} from '@faker-js/faker'
import {HeaderWrapper, Header, Logo} from './components/Header/Header.ts'
import logoImage from './assets/images/logo.svg'


function App() {
	const [cards, setCards] = useState([
		{
			id: `${Date.now()}-${Math.random()}`,
			title: 'Headline',
			image: desertImage,
			description: 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.' // описание
		}
	])
	
	const [titleInput, setTitleInput] = useState('')
	const [descriptionInput, setDescriptionInput] = useState('')
	
	const addCard = () => {
		const newId = `${Date.now()}-${Math.random()}` // генерация уникального id, к
		const newCard = {
			id: newId,
			title: titleInput || faker.lorem.sentence().substring(0, 24),
			image: `https://picsum.photos/300/170?random=${newId}`,
			description: descriptionInput || faker.lorem.sentence().substring(0, 68)
		}
		
		setCards([newCard, ...cards])
		setTitleInput('')
		setDescriptionInput('')
	}
	
	return (
		<>
			<GlobalStyles/>
			
			<HeaderWrapper>
				<Header>
					<Logo src={logoImage} alt="Логотип"/>
					<HeaderTitle>Photo Generator</HeaderTitle>
					
					<InputArea>
						<input
							type="text"
							placeholder="Title"
							value={titleInput}
							onChange={e => setTitleInput(e.target.value)}
							maxLength={20}
						/>
						<input
							type="text"
							placeholder="Description"
							value={descriptionInput}
							onChange={e => setDescriptionInput(e.target.value)}
							maxLength={56}
						/>
						
						<ButtonStyled $variant="primary" $size="large" onClick={addCard}>
							Generate New Card
						</ButtonStyled>
					</InputArea>
				</Header>
			</HeaderWrapper>
			<PageWrapper>
				<CardsGrid>
					{cards.map(card => (
						<Card
							key={card.id}
							title={card.title}
							image={card.image}
							description={card.description}
						/>
					))}
				</CardsGrid>
			</PageWrapper>
		</>
	)
}

export default App
