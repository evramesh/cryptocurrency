import CryptoItem from '../CryptocurrencyItem'
import './index.css'

const CryptoList = props => {
  const {send} = props

  return (
    <div className="currency">
      <h1 className="head">Cryptocurrency Tracker</h1>
      <img
        alt="cryptocurrency"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      />
      <ul className="ul">
        <li className="li">
          <h4 className="item">Coin Type</h4>
          <h4 className="item">USD</h4>
          <h4 className="item">EURO</h4>
        </li>
        {send.map(next => (
          <CryptoItem key={next.id} ways={next} />
        ))}
      </ul>
    </div>
  )
}

export default CryptoList
