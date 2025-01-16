import { useState } from "react";
import Menu from "./components/Menu";
import Start from "./components/Start";
import mockData from "./data/mockData";
import detailQuiz from "./components/detailQuiz";

const App = () => {  
  const [started,setStarted] = useState(false);
  const [selected,setSelected] = useState(null);
  const [quizMode,setQuizMode] = useState(false);

  //시작페이지
  const handleStart = (value) => {
    setStarted(value);
  }
  //데이터카테고리
  const handleSelected = (obj)=> {
    setSelected(obj);
    setQuizMode(true);
  }

  return (
    <div className='app'>
      {
      !started && 
      <Start onStart={handleStart}/>
      }
      {
        started && !quizMode &&
        <Menu 
        categories={mockData.categories} 
        onSelected={handleSelected} 
        onStart={handleStart}
        />
      }
      {
        quizMode &&
        <detailQuiz selected={selected} />
      }
    </div>
  );
};

export default App;