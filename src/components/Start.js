import './Start.css';

const Start = ({onStart}) => {
  return (
    <div className='start'>
      <div className='wrap'>
        <h1>English Word Test</h1>
        <p>나의 영어실력을 테스트해 보세요.</p>
      </div>
      <button onClick={()=>{onStart(true)}} className='start-btn'>Start</button>
    </div>
  );
};

export default Start;