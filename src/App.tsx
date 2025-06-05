// React импорт функции состояния
import {useState} from 'react'

// Импортирую глобальные стили страницы
import {GlobalStyles} from './styles/GlobalStyles.ts'

// Импорт компонентов
import Card from './components/Card/Card.tsx'
import {PageWrapper} from './components/PageWrapper/PageWrapper.ts'
import {CardsGrid} from './components/CardsGrid/CardsGrid.ts'
import {InputArea} from './components/InputArea/InputArea.ts'
import {ButtonStyled} from './components/Button/Button.ts'
import {HeaderTitle} from "./components/Header/Header.ts";

// Импортирую исходную картинку по макету
import desertImage from './assets/images/desert.svg?url'

// Импорт faker для генерации случайного заголовка
import {faker} from '@faker-js/faker'

// Импорт хэдера
import {HeaderWrapper, Header, Logo} from './components/Header/Header.ts'
import logoImage from './assets/images/logo.svg'

// главная функция
function App() {

// задаю начальное состояние, рендерится при загрузке старницы
	const [cards, setCards] = useState([
		{
			id: `${Date.now()}-${Math.random()}`, // генерация уникального id
			title: 'Headline', // название карточки
			image: desertImage, // исходное изображение
			description: 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.' // описание
		}
	])
	
	const [titleInput, setTitleInput] = useState('')
	const [descriptionInput, setDescriptionInput] = useState('')
	
	// Функция добавления новой карточки, запускается при клике на "Сгенерировать фото"
	const addCard = () => {
		const newId = `${Date.now()}-${Math.random()}` // генерация уникального id, к
		// создаю объект для размещения данных, которые будут переданы как props в компонент Card (строка 91)
		const newCard = {
			id: newId, // уникальный id объекта
			title: titleInput || faker.lorem.sentence().substring(0, 24), // если поле заголовка пусток,
			image: `https://picsum.photos/300/170?random=${newId}`,
			description: descriptionInput || faker.lorem.sentence().substring(0, 68)
		}
		
		setCards([newCard, ...cards]) // отправляю новую карточку в общий массив
		setTitleInput('') // освобождаю строку ввода заголовка от введенных данных
		setDescriptionInput('') // освобождаю строку ввода описания от введенных данных
	}
	
	return (
		<>
			<GlobalStyles/>
			
			<HeaderWrapper>
				<Header>
					<Logo src={logoImage} alt="Логотип"/>
					<HeaderTitle>Фотогенератор</HeaderTitle>
					
					<InputArea>
						<input
							type="text"
							placeholder="Название"
							value={titleInput}
							onChange={e => setTitleInput(e.target.value)}
							maxLength={20}
						/>
						<input
							type="text"
							placeholder="Описание"
							value={descriptionInput}
							onChange={e => setDescriptionInput(e.target.value)}
							maxLength={56}
						/>
						
						<ButtonStyled $variant="primary" $size="large" onClick={addCard}>
							Сгенерировать фото
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
