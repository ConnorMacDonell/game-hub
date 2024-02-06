export interface Platform {
  id: number,
  slug: string,
  name: string
}

export default interface Game {
  id: number,
  slug: string,
  name: string,
  background_image: string,
  parent_platforms: { platform: Platform }[]
}