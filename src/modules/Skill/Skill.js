import React from 'react'
import { inject, observer } from 'mobx-react'
import './Skill.scss'

@inject('BioController')
@observer
export class Skill extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  render() {
    return (
      <div className='skillBadge' key={'div-skill' + this.props.name}>
          <span className="badge badge-pill badge-secondary">{this.props.name} ({this.props.weight})</span>
      </div>
    )
  }
}
