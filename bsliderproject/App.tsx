import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const url = "https://623ae79df8827fbe47aaf15a.mockapi.io/slider";
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      people: [],
      index: 0,
    };
  }

  fetchData = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    this.setState({ people: newData });
    this.setState({ loading: false });
  };
  rightHandler = () => {
    if (this.state.index === this.state.people.length - 1) {
      alert("last review");
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };
  leftHandler = () => {
    if (this.state.index === 0) {
      alert("first review");
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };
  render() {
    if (this.state.loading) {
      return <><h2>Company Employees</h2>
      <button onClick={this.fetchData}>Click to see Management People</button>
      </>
    }

    const { id, image, title, quote, name } =
      this.state.people[this.state.index];
    return (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            position: "absolute",
            marginTop: "250px",
            marginLeft: "300px",
          }}
        >
          <FiChevronLeft onClick={this.state.leftHandler} />
        </div>
        <div>
          <h2 style={{ textDecoration: "underline" }}>Reviews</h2>
          <img
            src={image}
            alt={name}
            style={{ height: "300px", width: "500px" }}
          />
          <h3>{name}</h3>
          <h4>{title}</h4>
          <h5>"{quote}"</h5>
        </div>
        <div style={{ marginLeft: "650px", marginTop: "-260px" }}>
          <FiChevronRight onClick={this.state.rightHandler} />
        </div>
      </div>
    );
  }
}
export default App;
// import React, { useEffect, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// const url = "https://623ae79df8827fbe47aaf15a.mockapi.io/slider";
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [people, setPeople] = useState([]);
//   const [index, setIndex] = useState(0);
//   const fetchData = async () => {
//     const response = await fetch(url);
//     const newData = await response.json();
//     setPeople(newData);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   });
//   const rightHandler =() =>{
//     if(index===people.length - 1){
//       alert("last review")
//     }
//     else{
//       setIndex(index+1);
//     }
//   };
//   const leftHandler =() =>{
//     if(index === 0){
//       alert("first review")
//     }
//     else{
//       setIndex(index-1)
//     }
//   }
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   const { id, image, title, quote, name } = people[index];
//   return (
//     <div style={{textAlign:"center"}}>
//       <div style={{position:"absolute",marginTop:"250px",marginLeft:"300px"}}>
//         <FiChevronLeft onClick={leftHandler} />
//       </div>
//       <div>
//         <h2 style={{ textDecoration: "underline" }}>Reviews</h2>
//         <img
//           src={image}
//           alt={name}
//           style={{ height: "300px", width: "500px" }}
//         />
//         <h3>{name}</h3>
//         <h4>{title}</h4>
//         <h5>"{quote}"</h5>
//       </div>
//       <div style={{marginLeft:"650px" ,marginTop:"-260px"}}>
//         <FiChevronRight onClick={rightHandler}/>
//       </div>
//     </div>
//   );
// }

// export default App;
