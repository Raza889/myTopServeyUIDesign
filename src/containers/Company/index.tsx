import React from "react"
import { observer, inject } from "mobx-react"
import { IStoreProps } from "stores/RootStore"
import Routes from "./routes"

//TODO: Using observer just to test the fnctinality mobx store
 @observer
class CompanyContainer extends React.Component<IStoreProps> {

  constructor(props: IStoreProps) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default inject("stores")(CompanyContainer)
