import React from 'react'
import { inject, observer } from 'mobx-react'
import './Recommendations.scss'
import { Skill } from '../Skill/Skill';

@inject('BioController')
@observer
export class Recommendations extends React.Component {

  constructor(props) {
    super(props)
    this.bioController = props.BioController
  }

  renderStrengths() {
    let strengthsDOM = this.bioController && this.bioController.strengths

    let resultArray = strengthsDOM.sort(function(a, b) {
      if(a.weight > b.weight) return -1;
      if(a.weight < b.weight) return 1;
      return 0;
    });

    return resultArray.map((strength, index) => {
      return (<Skill key={'skill' + index + strength.name} name={strength.name} weight={parseFloat(strength.weight).toFixed(2)} />)
    })
  }

  render() {
    return (
      <section className='bioRecommendationsSection'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div style={{ textAlign: 'center' }}>
                <p><span className='sectionTitle'>Recommendations</span></p>
                <p><span className='recommendationWeight'>{ this.bioController.profile && this.bioController.profile.recommendationsWeight || ''} <i className='material-icons'>poll</i></span>
                <br /><span className='recommendationWeightDetails'>total recommendation weight</span></p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              { this.bioController.strengths && this.renderStrengths() }
            </div>
          </div>
        </div>
      </section>
    )
  }
}
