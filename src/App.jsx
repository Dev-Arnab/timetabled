import "./App.css";
import Calender from "./components/Calender";

const App = () =>{
  return (
    <div className="App">
      <h1>Itinerary for a 7 Day Trip to Memphis, Tennessee</h1>
      <h2>Welcome to Memphis, Dev! Check out the calender to know the city</h2>
      <Calender />
    </div>
  )
}

export default App