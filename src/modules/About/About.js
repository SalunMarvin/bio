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

                <p>I'm a passionate developer and project manager. I have experience in a broad range of
                  technologies in both backend and frontend, plus leadership and people management acknowledge.
                  I'm currently looking for an opportunity to improve my
                  skills, get some new challenges and learn with closer friends and colleagues.</p>
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
