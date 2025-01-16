import C from '../public-assets/C.jpg';

const Result = () => {
  return (
    <div className='result'>
      <h2 className='test-result'>테스트 결과</h2>
      <div className='level'>
        <p>'C'등급(보통)</p>
        <img src={C} className='C'></img>
        <p>"무난합니다."</p>
      </div>
      <button className='restart'>Restart</button>
    </div>
  );
};

export default Result;