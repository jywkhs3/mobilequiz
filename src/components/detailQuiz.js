import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import back from '../public-assets/back.png';
import './DetailQuiz.css';

const DetailQuiz = ({selected,flashcard,onResult,onBack,onHome,onReset}) => {
  const [currentIdx,setCurrentIdx] = useState(0);
  const [showHint,setshowHint] = useState(false);
  const [score,setScore] = useState(0); 
  const [answer,setAnswer] =useState('');

  //데이터 없을 경우
  if( !flashcard || flashcard.length === 0){
    return <p>퀴즈 데이터를 불러올 수 없습니다.</p>;
  }
  //input값 이벤트처리
  const handleInput=(e)=>{
    setAnswer(e.target.value);
    if(e.key === 'Enter'){
      handleNext();
    }
  }
  //퀴즈 점수 계산
  const handleNext = ()=> {
    let newScore = score;

    if(answer.trim().toLowerCase() === flashcard[currentIdx].answer.toLowerCase()){
      newScore = score +1;
      setScore((prevScore)=>prevScore +1);
    }
    if(currentIdx +1 < flashcard.length){
      setCurrentIdx(currentIdx+1);
      setAnswer('');
    }else{ 
      onResult(newScore);
    }
    setshowHint(false);
  }

  return (
    <div className='quiz'>
      <img onClick={onBack} src={back} className='back' alt='뒤로가기'></img>
      <h2>{selected.name}</h2>
      <div className='quiz-txt'> 
        <p>"{flashcard[currentIdx].question}"</p>
          {
            showHint &&
          <p className='hint-txt'>{flashcard[currentIdx].hint}</p>
          }
          <input type='text' value={answer} 
          onChange={handleInput}
          onKeyDown={handleInput}
          ></input>
      </div>
      <div className="btn-wrap">
        <button className='hint-btn' 
          onClick={()=>{setshowHint(!showHint)}}>
          {!showHint ? 'hint' : 'close'}
        </button>
        <button className='sub-btn' onClick={handleNext}>submit</button>
      </div> 
      <FontAwesomeIcon onClick={()=>{onHome(); onReset();}} icon={faHouse} className='home-btn'/>
    </div>
    
  );
};



export default DetailQuiz;