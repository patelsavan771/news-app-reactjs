import React, { Component } from 'react'
import Loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-5'>
        <img src={Loading} alt="loading gif" />
      </div>
    )
  }
}

export default Spinner