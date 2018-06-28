import React from 'react'
import { inject, observer } from 'mobx-react'
import './About.scss'
import { Skill } from '../Skill/Skill';

@inject('BioController')
@observer
export class About extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  render() {
    return (
      <section className='bioAboutSession'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div style={{ textAlign: 'center' }}>
                <p><span className='sectionTitle'>About</span></p>
                <p><span className='recommendationWeight'>170 <i className='material-icons'>poll</i></span>
                <br /><span className='recommendationWeightDetails'>total recommendation weight</span></p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <Skill /><Skill /><Skill /><Skill /><Skill /><Skill /><Skill />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
