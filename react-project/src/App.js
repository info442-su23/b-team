import NavBar from "./components/Nav.js"
import QuizInstructions from "./components/QuizInstructions.js";
import SeedSelect from "./components/SeedSelect.js";
import CompletePlantNewSeed from "./components/CompletePlantNewSeed.js";
import LandingPage from "./components/LandingPage.js";
import InstructionPage from "./components/InstructionPage.js";
import NavDemo from "./components/NavDemo.js";
import GardenPage from "./components/GardenPage.js";
import HomePage from "./components/HomePage.js";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <SeedSelect />
      </div>
      <Routes>
        <Route>
            <Route path="/home" element={<HomePage />} />
            {/* Add other routes for other components/pages */}
        </Route>
      </Routes>
    </BrowserRouter>

// app() structure?
{/*
function App() {
  return (
    <div className="App">
      <NavBar />
      <QuizInstructions />
      <SeedSelect />
      <CompletePlantNewSeed />
      <LandingPage />
      {/* <InstructionPage /> */}
      {/* <NavDemo /> */}
      {/* <SeedSelect /> */}
      {/* <NavBar /> */}
      {/* <GardenPage /> */}
    </div>
  );
}
*/}

// The original app.js code
{/* <div className="App">
  <NavBar />
  <SeedSelect />
</div> */}

// https://www.youtube.com/watch?v=i7oL_K_FmM8
// function setCookie(name, value){
//   const date = new Date();
//   date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires};`;
// }

// function getCookie(name){
//   const cDecoded = decodeURIComponent(document.cookie);
//   const cArray = cDecoded.split("; ");
//   let result = null;

//   cArray.forEach(element => {
//     if(element.indexOf(name) == 0){
//       result = element.substring(name.length + 1)
//     }
//   })
// }

export default App;