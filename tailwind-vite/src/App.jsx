import './App.css'
import Card from './components/card'

function App() {
  // let myObj = {
  //   name: 'Mohd Ajlal',
  //   age: 23,
  //   isMarried: false,
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Mohd Ajlal" />
      <Card />
    </>
  )
}

export default App
