import './index.css'

import {Component} from 'react'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, heads: 0, tails: 0}

  clickOnToss = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadsCount = heads
    let latestTailsCount = tails

    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      heads: latestHeadsCount,
      tails: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="coin-toss-main-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.clickOnToss}
          >
            Toss Coin
          </button>
          <div className="toss-details-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
