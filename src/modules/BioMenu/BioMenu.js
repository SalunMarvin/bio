import React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import './BioMenu.scss'

@inject('BioController')
@observer
export class BioMenu extends React.Component {
  @observable personId = ''

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  handleInputChange = (event) => {
    let key = event.target.name
    let value = event.target.value

    return this[key] = value
  }

  loadBio = (id) => {
    this.bioController.loadProfileFromBio(id)
  }

  integrateLinkedIn = () => {
    let authurl = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78rknub4ani6mz&redirect_uri=http%3A%2F%2Flocalhost%3A8083%2Fauth&state=2522abcde12345&scope=r_basicprofile"

    window.location.href = authurl
  }

  render() {
    return (
      <section className='menuSection'>
      
          <div className='navbar-brand'>
            <img src='https://s3-us-west-2.amazonaws.com/bio-media/static/torrebio-imagetype.png' alt="Bio" className='menuLogo' />
          </div>
          <div className='socialIntegrationMenu'>
              <div className="form-inline">
              <div className="form-group mb-2" style={{ fontSize: '18px'}}>
                PersonID:
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <input name="personId" type="text" className="form-control" onChange={this.handleInputChange} value={this.personId} placeholder="eg. torrenegra" />
            </div>
            <button className="btn btn-dark mb-2" onClick={() => this.loadBio(this.personId)}>Load Bio</button>
            {this.bioController.loaded &&
              <button className="btn btn-light mb-2" style={{ marginLeft: '5px' }} onClick={() => this.integrateLinkedIn()}>Integrate LinkedIn</button>
            }
            </div>
          </div>
        
      </section>
    )
  }
}
