import GameSelection from "./components/GameSelection.js";
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
import QuizCorrectAnswer from "./components/QuizCorrectAnswer.js";
import QuizScore from "./components/QuizScore.js";
import DIY from "./components/DIY.js";
import SortScore from "./components/SortScore.js";
import CompostBin from "./components/CompostBin.js";
import QuestPrompt from "./components/QuestPrompt.js";
import SortQuestion from "./components/SortQuestion.js";
import QuestInstructions from "./components/QuestInstructions.js";
import QuestScore from "./components/QuestScore.js";
import SortInstructions from "./components/SortInstructions.js";
import SortCorrectAnswer from "./components/SortCorrectAnswer.js";
import QuizQuestionTest from "./components/QuizQuestionTest.js";
import SortIncorrectAnswer from "./components/SortIncorrectAnswer.js";

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
        <Route path="/games" element={<GameSelection />} />
        <Route path="/quizinstruction" element={<QuizInstructions />} />
        <Route path="/quizquestion" element={<QuizQuestion />} />
        <Route path="/quizquestiontest" element={<QuizQuestionTest />} />
        <Route path="/correctanswer" element={<QuizCorrectAnswer />} />
        <Route path="/quizscore" element={<QuizScore />} />
        <Route path="/questinstruction" element={<QuestInstructions />} />
        <Route path="/questprompt" element={<QuestPrompt />} />
        <Route path="/questscore" element={<QuestScore />} />
        <Route path="/sortinstructions" element={<SortInstructions />} />
        <Route path="/sortquestion" element={<SortQuestion />} />
        <Route path="/sortscore" element={<SortScore />} />
        <Route path="/compostbin" element={<CompostBin />} />
        <Route path="/diy" element={<DIY />} />
        <Route path="/compostbin" element={<CompostBin />} />
        <Route path="/sortcorrectanswer" element={<SortCorrectAnswer />} />
        <Route path="/sortincorrectanswer" element={<SortIncorrectAnswer />} />
      </Routes>
    </div>
  );
}

export default App;