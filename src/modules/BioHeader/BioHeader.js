import React from 'react'
import { inject, observer } from 'mobx-react'
import './BioHeader.scss'

@inject('BioController')
@observer
export class BioHeader extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  render() {
    return (
      <section className='bioHeaderSection'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 headerInfo'>
              <h1>Hello,</h1>
              <div>
                <p>
                <span className='headerName'>
                  my name is { this.bioController.profile && this.bioController.profile.name }
                </span>
                </p>
                <p>
                <span className='headerPosition'>
                { this.bioController.profile && this.bioController.profile.professionalHeadline }
                </span>
                  </p>
                  <p>
                <span className='headerCity'>
                { this.bioController.profile && this.bioController.profile.location }
                </span>
                </p>
              </div>
            </div>
            <div className='col-md-3'>
              <img className='headerAvatar' src={this.bioController.profile && this.bioController.profile.avatar} alt='Avatar' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 headerSocialIcons'>
              <span className="socicon-mail inline-socicon"></span>
              <span className="socicon-twitter inline-socicon"></span>
              <span className="socicon-linkedin inline-socicon"></span>
              <span className="socicon-facebook inline-socicon"></span>
              <span className="socicon-whatsapp inline-socicon"></span>
            </div>
          </div>
        </div>
        <div> 
          <div className='headerBackground'> 
          </div>
        </div>
      </section>
    )
  }
}
