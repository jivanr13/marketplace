export class OfferModel {
  constructor(
    public id: string = '',
    public category: string = '',
    public user: string = '',
    public title: string = '',
    public pictureUrl: string = '',
    public description: string = '',
    public publishedOn: Date = null) {
  }
}
