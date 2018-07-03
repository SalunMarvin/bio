import React from 'react'
import { inject, observer } from 'mobx-react'
import './LoadData.scss'

@inject('BioController')
@observer
export class LoadData extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  render() {
    return (
      <div className='container' style={{ textAlign: 'center', fontSize: '20px' }}>
        <div className='jumbotron'>
          <h1 className='display-4'>Welcome!</h1>
          <p className='lead'>This is a simple website where you can find Torre Bio's profiles details.</p>
          <hr className='my-4' />
          <p>Use the form at the right side on the top at this page, and search for a Torre Bio profile. The information you need will be shown here.</p>
        </div>

        <div className='alert alert-secondary' role='alert'>
          No data available - Search for a PersonID in Header form or create a new Bio account <a href='https://torre.bio/' target='_blank'>here</a>.
        </div>
      </div>
    )
  }
}
