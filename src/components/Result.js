import D from '../public-assets/D.png';
import C from '../public-assets/C.png';
import B from '../public-assets/B.png';
import A from '../public-assets/A.png';
import './Result.css';

const Result = ({onHome,onResult,score}) => {
  let level = '';
  let img = '';
  let message='';

  if (score<=1){
    level = 'D';
    img = D;
    message = '"아쉬운 결과였어요"';
  } else if( score ===2) {
    level = 'C';
    img = C;
    message= '"무난합니다"'
  } else if( score >= 3 && score <= 4 ) {
    level = 'B';
    img = B;
    message= '"좋아요! 꽤 잘 하셨습니다"'
  } else{
    level = 'A';
    img = A;
    message= '"훌륭합니다! 정말 잘 하셨어요"'
  }

  return (
    <div className='result'>
      <div className='title-wrap'>
      <h2>테스트 결과</h2>
      </div>
      <div className='level'>
        <p>Level</p>
        <p>{level}</p>
        <img src={img} className={level} alt='level image'></img>
        <p>{message}</p>
      </div>
      <button onClick={()=>{onHome(); onResult();}} className='r-btn'>Restart</button>
    </div>
  );
};

export default Result;