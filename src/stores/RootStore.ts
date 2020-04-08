
import AppStore from "./AppStore"

export interface IRootStore {
  appStore: AppStore
}

export interface IStoreProps {
  stores?: IRootStore
}

export default class RootStore implements IRootStore {
  appStore: AppStore

  constructor() {
    this.appStore = new AppStore(this)
  }
}
