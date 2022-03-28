import React from "react";
const url = "https://623ae79df8827fbe47aaf15a.mockapi.io/Tab";
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      jobs: [],
      value: 0,
    };
  };
  
  fetchData = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    this.setState({ jobs: newData });
    this.setState({ loading: false });
  };
  render() {
    if (this.state.loading)
      return (
        <div>
          <h3>Experience Details</h3>
          <button onClick={this.fetchData}>Click to show Experience</button>
        </div>
      );
    const { company, title, duties, dates } = this.state.jobs[this.state.value];
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textDecoration: "underline" }}>Experience</h1>

          <div>
            {this.state.jobs.map((item: any, index: any) => {
              return (
                <button
                  key={item.id}
                  onClick={() => this.setState({ value: index })}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
        </div>
        <section style={{ marginLeft: "400px" }}>
          <h3>*{title}</h3>
          <h4>*{company}</h4>
          <h5>*{dates}</h5>
          <h4>*{duties}</h4>
        </section>
      </>
    );
  }
}
export default App;
// import React, { useEffect, useState } from "react";
// const url = "https://623ae79df8827fbe47aaf15a.mockapi.io/Tab";
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [value, setValue] = useState(1);
//   const fetchData = async () => {
//     const response = await fetch(url);
//     const newData = await response.json();
//     setJobs(newData);
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   if (loading)
//     return (
//       <div>
//         <h3>Loading...</h3>
//       </div>
//     );
//   const { company, title, duties, dates } = jobs[value];
//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         <h1 style={{ textDecoration: "underline" }}>Experience</h1>

//         <div>
//           {jobs.map((item: any, index) => {
//             return (
//               <button key={item.id} onClick={() => setValue(index)}>
//                 {item.company}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//       <section style={{ marginLeft: "400px" }}>
//         <h3>*{title}</h3>
//         <h4>*{company}</h4>
//         <h5>*{dates}</h5>
//         <h4>*{duties}</h4>
//       </section>
//     </>
//   );
// }

// export default App;
