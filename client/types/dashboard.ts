import {IBoilerPart} from "@/types/boilerparts";

export interface IDashboardSlider {
  items: IBoilerPart[]
  spinner:boolean
  goToPartPage?: boolean
}
