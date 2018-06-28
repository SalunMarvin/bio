import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { BioController } from './BioController'
import './Bio.scss'

import { BioHeader } from '../BioHeader/BioHeader'
import { BioRecommendations } from '../BioRecommendations/BioRecommendations'
import { About } from '../About/About'
import { Awards } from '../Awards/Awards'
import { Jobs } from '../Jobs/Jobs'
import { Education } from '../Education/Education'

export default class Bio extends Component {
  constructor(props) {
    super(props)
    this.bioController = new BioController(this.store)
  }

  render() {
    return (
      <Provider BioController={this.bioController}>
        <div>
          <BioHeader {...this.props} />
          <BioRecommendations {...this.props} />
          <About {...this.props} />
          <Awards {...this.props} />
          <Jobs {...this.props} />
          <Education {...this.props} />
        </div>
      </Provider>
    )
  }
}