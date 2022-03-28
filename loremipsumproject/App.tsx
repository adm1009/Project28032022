import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data";
class App extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    const details : string[]=[]
    this.state = {
      text:details,
      count:0
    }
  }
  
  datashowHandler = (e: any) => {
    e.preventDefault();
    // let amount = parseInt(count);
    let amount = this.state.count;
    if (this.state.count < 0) {
      amount = 1;
    }
    if (this.state.count > 8) {
     amount = 8;
    }
    if (this.state.count === 0){
      amount = 0;
    }
    this.setState({text:data.slice(0,amount)})
  };
  render(){
  return (
    <div>
      <h2>Getting bored with lorem ipsum,Here is fun for u...</h2>
      <h3>Paragraphs:-</h3>
      <form onSubmit={this.datashowHandler}>
        <input
          type="number"
          name="amount"
          value={this.state.count}
          onChange={(e: any) => this.setState({count:e.target.value})}
        />
        <input type="submit" value="Generate"/>
      </form>
      <h4>
        {this.state.text.map((item:any, index:any) => {
          return <><div key={index}>{item}</div>
          <hr />
          </>
        })}
      </h4>
    </div>
  );
}
}
export default App;

// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import data from "./data";
// function App() {
//   const details : string[]=[]
//   const [text, setText] = useState(details);
//   const [count, setCount] = useState(0);
//   const datashowHandler = (e: any) => {
//     e.preventDefault();
//     // let amount = parseInt(count);
//     let amount = count;
//     if (count < 0) {
//       amount = 1;
//     }
//     if (count > 8) {
//      amount = 8;
//     }
//     if (count === 0){
//       amount = 0;
//     }
//     setText(data.slice(0,amount))
//   };
//   return (
//     <div>
//       <h2>Getting bored with lorem ipsum,Here is fun for u...</h2>
//       <h3>Paragraphs:-</h3>
//       <form onSubmit={datashowHandler}>
//         <input
//           type="number"
//           name="amount"
//           value={count}
//           onChange={(e: any) => setCount(e.target.value)}
//         />
//         <input type="submit" value="Generate" />
//       </form>
//       <h4>
//         {text.map((item, index) => {
//           return <><div key={index}>{item}</div>
//           <hr />
//           </>
//         })}
//       </h4>
//     </div>
//   );
// }

// export default App;
