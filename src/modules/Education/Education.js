import React from 'react'
import { inject, observer } from 'mobx-react'
import './Education.scss'
import { Card } from '../Card/Card'

@inject('BioController')
@observer
export class Education extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  renderCards() {
    let cardsDOM = this.bioController && this.bioController.education

    return cardsDOM.map((card, index) => {
      let description = null
    
      card.contributions ? description = card.contributions : description = card.additionalInfo
        
      return (
        <Card
          key={'award_card_' + index}
          title={card.name}
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
                <p><span className='sectionTitle'>Education</span></p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
            { this.bioController.education && this.renderCards() }
            </div>
          </div>
        </div>
      </section>
    )
  }
}
