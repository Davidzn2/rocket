import { useState } from 'react'
import AirtableDataFetcher from './Components/dataFetcher';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AirtableDataFetcher />

    </>
  )
}

export default App
