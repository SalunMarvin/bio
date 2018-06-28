import { observable, action } from 'mobx'

export class BioController {
  @observable profile = {
    name: 'Jobson'
  }

  @action loadProfileFromBio = () => {
    profile = {
      name: 'Salun Marvin'
    }
  }
}