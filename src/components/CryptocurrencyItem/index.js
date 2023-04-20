import './index.css'

const CryptoItem = props => {
  const {ways} = props
  console.log(ways)
  return (
    <li className="list">
      <div className="mini1">
        <img className="icon" alt={ways.currencyName} src={ways.currencyLogo} />
        <p className="para">{ways.currencyName}</p>
      </div>
      <div className="mini2">
        <p className="para">{ways.usdValue}</p>
        <p className="para">{ways.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoItem
