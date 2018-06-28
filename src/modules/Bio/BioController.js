import { observable, action } from 'mobx'
import axios from 'axios'

export class BioController {
  @observable loaded = false
  @observable profile = {}
  @observable strengths = []
  @observable awards = []
  @observable jobs = []
  @observable projects = []
  @observable publications = []
  @observable education = []

  @action loadProfileFromBio = (id) => {
    axios.post('http://127.0.0.1:8083/get-bio/', { personId: id})
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