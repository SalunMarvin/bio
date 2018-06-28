import React from 'react'
import { inject, observer } from 'mobx-react'
import './BioMenu.scss'

@inject('BioController')
@observer
export class BioMenu extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  render() {
    return (
      <section className='menuSection'>
        <nav className='navbar navbar-dropdown navbar-fixed-top navbar-expand-lg'>
          <div className='navbar-brand'>
            <img src='https://s3-us-west-2.amazonaws.com/bio-media/static/torrebio-imagetype.png' alt="Bio" className='menuLogo' />
          </div>
          <div className='socialIntegrationMenu navbar-text'>
            Load Bio Info | Integrate Linkedin Account
          </div>
        </nav>
      </section>
    )
  }
}
