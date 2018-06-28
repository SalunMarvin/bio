import React from 'react'
import { inject, observer } from 'mobx-react'
import './Awards.scss'
import { Card } from '../Card/Card'

@inject('BioController')
@observer
export class Awards extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  renderCards() {
    let cardsDOM = this.bioController && this.bioController.awards

    return cardsDOM.map((card, index) => {
      return (
        <Card
          key={'award_card_' + index}
          title={card.name}
          description={card.contributions}
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
                <p><span className='sectionTitle'>Achievements / Awards</span></p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
            { this.bioController.awards && this.renderCards() }
            </div>
          </div>
        </div>
      </section>
    )
  }
}
