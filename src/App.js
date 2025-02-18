import { useState } from "react";
import Menu from "./components/Menu";
import Start from "./components/Start";
import mockData from "./data/mockData";
import DetailQuiz from "./components/DetailQuiz";
import Result from "./components/Result";

const App = () => {  
  const [started,setStarted] = useState(false);
  const [selected,setSelected] = useState(null);
  const [quizMode,setQuizMode] = useState(false);
  const [exitMode,setExitMode] = useState(false);
  const [score,setScore] = useState(0);

  //시작페이지
  const handleStart = (value) => {
    setStarted(value);
  }
  //퀴즈카테고리선택
  const handleSelected = (obj)=> {
    setSelected(obj);
    setQuizMode(true);
  }
  //뒤로 가기 버튼
  const handleBack = ()=>{
    if(quizMode){
      //퀴즈모드에서 Menu
      setQuizMode(false);
    } else if(selected){
      //카테고리 화면에서 처음상태
      setSelected(null);
    } else{
      setStarted(false);
    }
  }
  //홈버튼
  const handleHome =()=>{
    setStarted(false);
    setQuizMode(false);
    setSelected(null);  
  }
  const handleResult = (final)=>{
    setScore(final);
    setExitMode(true);
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
        onBack={handleBack}
        />
      }
      {
        quizMode && !exitMode &&
        <DetailQuiz selected={selected} 
        flashcard={selected.flashcards}
        onExit={()=>{setQuizMode(false); setSelected(null);}}
        onResult={handleResult}
        onBack={handleBack}
        onHome={handleHome}
        onReset={()=>{setExitMode(false);}}
        />
      }
      {
        exitMode && 
        <Result 
        onHome={handleHome}
        onResult={()=>setExitMode(false)}
        score ={score}
        />
      }
    </div>
  );
};

export default App;