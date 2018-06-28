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
      <div style={{ float: 'left' }}>
          <span className="badge badge-pill badge-secondary">JavaScript (60,9)</span>
      </div>
    )
  }
}
