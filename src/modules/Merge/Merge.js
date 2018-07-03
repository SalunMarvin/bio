import React from 'react'
import { inject, observer } from 'mobx-react'
import './Merge.scss'
import BioLogo from '../../images/bioicon.png'

@inject('BioController')
@observer
export class Merge extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  saveInfo = () => {
    this.bioController.merging = false
    this.bioController.loaded = true
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id)
  }

  onDrop = (ev, list) => {
    let id = ev.dataTransfer.getData('id')

    if (list === 'inProfile') {
      let section = this.bioController.notInProfile.find(criteria => criteria.id === id)
      this.bioController.notInProfile.remove(section)
      this.bioController.inProfile.push(section)
    }

    if (list === 'notInProfile') {
      let section = this.bioController.inProfile.find(criteria => criteria.id === id)
      this.bioController.inProfile.remove(section)
      this.bioController.notInProfile.push(section)
    }
  }

  renderNotInProfile() {
    return this.bioController.notInProfile.map((section) => {
      let icon
      if (section.sectionCategory === 'LinkedIn') {
        icon = <span className='socicon-linkedin list-icon'></span>
      } else {
        icon = <img alt='bio' src={BioLogo} style={{ marginRight: '10px' }}/>
      }

      return (
        <li
          className='list-group-item draggable'
          draggable
          onDragStart = {(e) => this.onDragStart(e, section.id) }
          key={section.id}>
          { icon }
          { section.sectionName }
        </li>
      )
    })
  }

  renderInProfile() {
    return this.bioController.inProfile.map((section) => {
      let icon
      if (section.sectionCategory === 'LinkedIn') {
        icon = <span className='socicon-linkedin list-icon'></span>
      } else {
        icon = <img alt='bio' src={BioLogo} style={{ marginRight: '10px' }}/>
      }

      return (
        <li
          className='list-group-item draggable'
          draggable
          onDragStart = {(e) => this.onDragStart(e, section.id) }
          key={section.id}>
          { icon }
          { section.sectionName }
        </li>
      )
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p className='title'>Merging LinkedIn information:</p>
            <p className='description'>Choose which kind of data you want to show on your profile. Drag & Drop the items to the accordingly list:</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div
              className='card padding-10 droppable'
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, 'notInProfile')}
              >
              <p className='text-info'>Data <b>NOT</b> in your profile</p>
              <ul className='list-group'>
                { this.renderNotInProfile() }
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='card padding-10 droppable'
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, 'inProfile')}
            >
            <p className='text-info'>Data in your profile</p>
              <ul className='list-group'>
                  { this.renderInProfile() }
                </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button type='button' onClick={() => this.saveInfo()} className='btn btn-success margin-5 float'>Save</button>
            <button type='button' onClick={() => this.saveInfo()} className='btn btn-danger margin-5 float'>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}
