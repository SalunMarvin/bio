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
      <div className='container' style={{ textAlign: 'center', fontSize: '20px'}}>
        No data available - Search for a PersonID in Header form.
      </div>
    )
  }
}
