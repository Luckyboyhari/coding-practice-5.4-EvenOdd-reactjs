// Write your code here
import {Component} from 'react'
import './index.css'
class EvenOddApp extends Component {
  state = {count: 0}
  getRandomNumber = () => Math.ceil(Math.random() * 100)
  onIncrement = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }
  render() {
    const {count} = this.state
    const message = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head"> Count {count}</h1>
          <p className="para"> Count is {message}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
