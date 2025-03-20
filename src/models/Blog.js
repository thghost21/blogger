export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.published = data.published
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.body = data.body
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get first30() {
    return this.body.substring(0, 150)
  }
}