import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptoList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isActive: true, newList: []}

  componentDidMount() {
    this.getDate()
  }

  getDate = async () => {
    const {newList, isActive} = this.state
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updated = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({newList: updated, isActive: false})
  }

  render() {
    const {isActive, newList} = this.state
    return (
      <div className="container">
        {isActive ? (
          <div data-testid="loader">
            <Loader type="Lines" color="#ffffff" height={150} width={150} />
          </div>
        ) : (
          <CryptoList send={newList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
