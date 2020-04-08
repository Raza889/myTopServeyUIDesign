import React from "react"
import { observer, inject } from "mobx-react"
import { IStoreProps } from "stores/RootStore"
import MSTButton from "components/UI/Button"

//TODO: Useless Class componet but will be used in future
@observer
class AppContainer extends React.Component<IStoreProps> {

  // constructor(props: IStoreProps) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <MSTButton title="Go to Company Page" fontStyle="regular" type="Filled" size="lg" to="/company" />
        <MSTButton title="Go to User Page" fontStyle="regular" type="Filled" size="lg" to="/user" />
      </div>
    )
  }
}

export default inject("stores")(AppContainer)
