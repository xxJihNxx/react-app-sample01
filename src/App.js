import React from 'react';

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onClick={() => {console.log("I am clicke!!")}} />
//      </React.Fragment>
//    )
//  }
//}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meou!!</div>
}
export default App;
