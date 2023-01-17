import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={2}/>
      <Habit completed={3}/>
    </div>
  )
}

export default App


// Componente: Reaproveitar / isolar
// Propriedade: Uma informação enviada para modficar um componente visual ou comportamentalmente.