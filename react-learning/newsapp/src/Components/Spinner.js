import React, { Component } from 'react'
import loading from  './sample.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div class="text-center">
          <img src={loading} alt='loading'/>      
      </div>
    )
  }
}
