export class Account {
  // /**
  //  * @typedef AccountData
  //  * @property {string} id
  //  * @property {string} email
  //  * @property {string} name
  //  * @property {string} picture
  //  * 
  //  * @param {AccountData} data
  //  */
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.resume = data.resume
    this.graduated = data.graduated
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}

