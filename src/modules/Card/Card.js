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

  renderOrganizations(organizations) {
    return organizations && organizations.map((organization, index) => {
      if (index != (organizations.length - 1)) {
        return organization.name  + ', '
      } else {
        return organization.name
      }
    });
  }

  render() {
    return ( 
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h5 className="card-title"><i className='material-icons'>star</i> <b>{this.props.title}</b></h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.renderOrganizations(this.props.organizations)}</h6>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text">{this.props.recommendations || 0} recommendations</p>
        </div>
      </div>
    )
  }
}
