import React from 'react'
import { inject, observer } from 'mobx-react'
import './Jobs.scss'
import { Card } from '../Card/Card'

@inject('BioController')
@observer
export class Jobs extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  renderCards() {
    let cardsDOM = this.bioController && this.bioController.jobs

    return cardsDOM.map((card, index) => {
      let description = null
      let name = null
    
      card.contributions ? description = card.contributions : description = card.additionalInfo
      card.role ? name = card.role : name = card.name
        
      return (
        <Card
          key={'award_card_' + index}
          title={name}
          description={description}
          recommendations={card.recommendations}
          organizations={card.organizations || []}
        />
      )
    })
  }

  render() {
    return (
      <section className='bioAboutSession'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div style={{ textAlign: 'center' }}>
                <p><span className='sectionTitle'>Jobs</span></p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
            { this.bioController.jobs && this.renderCards() }
            </div>
          </div>
        </div>
      </section>
    )
  }
}
