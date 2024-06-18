export interface Challenge {
  id: number,
  name: string;
  subtitle?: string,
  description: string,
  tags: string[],
  level: string,
  figma: string,
  ideas?: string,
  github: string,
  userStories: string[],
  iframe: string,
  areas: string[]
  image: string,
  categories: string[]
}
