
export interface IMint {
  _id: string,
  name: string,
  slug: string,
  behavior: string,
  description: string,
  isEnabled: boolean,
  createdAt: string,
  updatedAt: string,
  __v: number,
  order: number,
  campaignId: string,
}

export interface IDoc {
  _id:  string,
  videos: IVideo[]
}

export interface IVideo {
  previewImage: string
  url: string
}