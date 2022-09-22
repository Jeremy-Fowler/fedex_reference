export class Bird {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.timesWatched = data.timesWatched
  }

  get Template() {
    return `
    <div class="col-md-4">
      <img
        src="${this.imgUrl}"
        alt="" class="img-fluid">
      <div class="d-flex justify-content-between">
        <span>${this.name}</span>
        <span>👀 ${this.timesWatched}</span>
      </div>
    </div>
    `
  }
}