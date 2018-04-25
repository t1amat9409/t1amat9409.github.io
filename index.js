(function(window){
  const {React,ReactDOM} = window;
  alert("Works");
  const App = (props) => {
    return(
      <h1>Hello App</h1>
    )
  }
  
  ReactDOM.render(<App version={"0.0.1"}/>, document.querySelector("#app"));
})(window)
