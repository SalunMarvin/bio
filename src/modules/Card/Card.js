import React from 'react'
import { inject, observer } from 'mobx-react'
import './Card.scss'

@inject('BioController')
@observer
export class Card extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  render() {
    return ( 
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h5 className="card-title"><i className='material-icons'>star</i> <b>Get hired by foreign companies</b></h5>
          <h6 className="card-subtitle mb-2 text-muted">Loqus Business Group, Scalable Path</h6>
          <p className="card-text">Contribution: A lot of studying, english training and persistence made me achieve this great goal I had.</p>
          <p className="card-text">1 recommendation</p>
        </div>
      </div>
    )
  }
}
