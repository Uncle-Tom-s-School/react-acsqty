import { useEffect, useState } from "react"
import type {Beer} from "./components/BeerCard"
import BeerCard from "./components/BeerCard"

const App = () => {
  const [data, setData] = useState<Beer[]>([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(kapveg => setData(kapveg))
},[])


  return (
    <div className="beerCardWrapper">
      {data.map(item => <BeerCard{...item}/>)}
    </div>
  )
}

export default App