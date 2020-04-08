import React from "react"
import {Provider, observer} from "mobx-react"
import RootStore from "stores/RootStore"
import Routes from "routes"

const rootStore = new RootStore()

//TODO
//Add Linter for better code styling
@observer
class App extends React.Component {
  render() {
    return (
      <Provider stores={rootStore}>
        <Routes />
      </Provider>
    )
  }
}

export default App;
