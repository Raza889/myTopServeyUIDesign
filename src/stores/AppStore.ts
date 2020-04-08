// import {observable, action, computed} from "mobx"
import { IRootStore } from "./RootStore"

export default class AppStore  {
  protected readonly rootStore: IRootStore

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore
  }
}
