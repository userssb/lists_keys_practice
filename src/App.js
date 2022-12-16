import UserProfile from './Components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Engineer',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Doctor',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Electrician',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Singamallaiah',
    role: 'Jumbangri',
  },
  {
    id: 5,
    imageUrl: 'https://i.ibb.co/qmGpm0Z/j.jpg',
    name: 'Chitti Thalli',
    role: 'Policia',
  },
]

const App = () =>
  userDetailsList.map(eachItem => (
    <UserProfile userDetails={eachItem} key={eachItem.id} />
  ))

export default App
