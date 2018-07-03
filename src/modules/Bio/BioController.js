import { observable, action } from 'mobx'
import axios from 'axios'

export class BioController {
  @observable loaded = false
  @observable merging = false
  @observable profile = {}
  @observable strengths = []
  @observable awards = []
  @observable jobs = []
  @observable projects = []
  @observable publications = []
  @observable education = []
  @observable inProfile = [
    { sectionName: 'About', sectionCategory: 'Torre Bio', id: 'aboutbio' },
    { sectionName: 'Jobs', sectionCategory: 'Torre Bio', id: 'jobsbio' },
    { sectionName: 'Education', sectionCategory: 'Torre Bio', id: 'educationbio' },
    { sectionName: 'Skills', sectionCategory: 'Torre Bio', id: 'skillsbio' },
    { sectionName: 'Recommendations', sectionCategory: 'Torre Bio', id:'recommendationsbio' },
  ]
  @observable notInProfile = [
    { sectionName: 'Jobs', sectionCategory: 'LinkedIn', id: 'jobslinkedin' },
    { sectionName: 'Education', sectionCategory: 'LinkedIn', id: 'educationlinkedin' },
    { sectionName: 'Skills', sectionCategory: 'LinkedIn', id: 'skillslinkedin' },
    { sectionName: 'About', sectionCategory: 'LinkedIn', id: 'aboutlinkedin' },
    
  ]

  @action loadProfileFromBio = (id) => {
    axios.post('https://torrebio-backend.herokuapp.com/get-bio/', { personId: id})
      .then(response => {
        this.profile = {
          name: response.data.person.name,
          professionalHeadline: response.data.person.professionalHeadline,
          location: response.data.person.location,
          avatar: response.data.person.picture,
          recommendationsWeight: parseInt(response.data.person.weight),
          about: response.data.person.summaryOfBio,
          achievements: response.data.achievements,
        }

        this.strengths = response.data.strengths
        this.awards = response.data.achievements
        this.jobs = response.data.jobs
        this.projects = response.data.projects
        this.publications = response.data.publications
        this.education = response.data.education

        this.loaded = true
      });
  }
}