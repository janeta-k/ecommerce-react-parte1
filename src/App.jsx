import React from "react";
//Components
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";


class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a BlueStore"/>
      </>
    )
  }
}

export default App
