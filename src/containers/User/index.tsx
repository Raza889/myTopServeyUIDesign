import React from "react"
import { observer, inject } from "mobx-react"
import { IStoreProps } from "stores/RootStore"
import Routes from "./routes"

//TODO: Useless Class componet but will be used in future
 @observer
class UserContainer extends React.Component<IStoreProps> {

  // constructor(props: IStoreProps) {
  //   super(props)
  // }

  render() {
    return (
      <div>
         <Routes />
      </div>
    )
  }
}

export default inject("stores")(UserContainer)
