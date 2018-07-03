import React, { Component } from 'react'
import { inject, observer, Provider } from 'mobx-react'
import { BioController } from './BioController'
import './Bio.scss'

import { BioMenu } from '../BioMenu/BioMenu' 
import { BioHeader } from '../BioHeader/BioHeader'
import { Recommendations } from '../Recommendations/Recommendations'
import { About } from '../About/About'
import { Awards } from '../Awards/Awards'
import { Jobs } from '../Jobs/Jobs'
import { Education } from '../Education/Education'
import { LoadData } from '../LoadData/LoadData'
import { Merge } from '../Merge/Merge'

@observer
export default class Bio extends Component {
  constructor(props) {
    super(props)
    this.bioController = new BioController(this.store)
  }

  render() {
    return (
      <Provider BioController={this.bioController}>
        <div>
          <BioMenu {...this.props} />
          {this.bioController.loaded && <BioHeader {...this.props} />}
          {this.bioController.loaded && <Recommendations {...this.props} />}
          {this.bioController.loaded && <About {...this.props} />}
          {this.bioController.loaded && <Awards {...this.props} />}
          {this.bioController.loaded && <Jobs {...this.props} />}
          {this.bioController.loaded && <Education {...this.props} />}
          {!this.bioController.loaded && !this.bioController.merging && <LoadData />}
          {this.bioController.merging && <Merge />}
        </div>
      </Provider>
    )
  }
}