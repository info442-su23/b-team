import QuizInstructions from "./components/QuizInstructions.js";
import SeedSelect from "./components/SeedSelect.js";
import CompletePlantNewSeed from "./components/CompletePlantNewSeed.js";
import LandingPage from "./components/LandingPage.js";
import InstructionPage from "./components/InstructionPage.js";
import NavDemo from "./components/NavDemo.js";
import GardenPage from "./components/GardenPage.js";
import HomePage from "./components/HomePage.js";
import { Routes, Route, Navigate } from 'react-router-dom'
import QuizQuestion from "./components/QuizQuestion.js";
import QuizAnswer from "./components/QuizAnswer.js";
import QuizScore from "./components/QuizScore.js";
import DIY from "./components/DIY.js";


// working model
function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/navdemo" element={<NavDemo />} />
        <Route path="/seedselect" element={<SeedSelect />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/garden" element={<GardenPage />} />
        <Route path="/games" element={<QuizInstructions />} />
        <Route path="/quizquestion" element={<QuizQuestion />} />
        <Route path="/correctanswer1" element={<QuizAnswer />} />
        <Route path="/quizscore" element={<QuizScore />} />
        <Route path="/diy" element={<DIY />} />
      </Routes>
    </div>
  );
}

{/* <LandingPage /> */ }
{/* <InstructionPage /> */ }
{/* <NavDemo /> */ }
{/* <SeedSelect /> */ }
{/* <NavBar /> */ }
{/* <GardenPage /> */ }
{/* <HomePage /> */ }
{/* <QuizInstructions /> */ }

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