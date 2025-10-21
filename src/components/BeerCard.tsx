export type Beer = {
  image: string,
  name: string,
  abv: string,
  volume: string,
  price: number,
  available: boolean
}

const BeerCard = (props: Beer) => {
  
  return (
    <div className='beerCard'>
    <img src={props.image} alt="Kép" />
    <div>
      <strong>
      <span>{props.name}</span>
      <span>{props.abv}</span>
      <span>{props.volume}</span>
      </strong>
    </div>
    <div>
      {props.price}
    </div>
    <div>
      {props.available ? <p className="available">Raktáron</p> : <p className="notAvailable">Nincs raktáron</p>}
    </div>
    </div>
  )
}

export default BeerCard