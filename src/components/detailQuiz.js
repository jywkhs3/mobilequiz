import Buttons from './Buttons';
import './detailQuiz.css';

const detailQuiz = ({selected}) => {
  return (
    <div className='hint'>
      {/* <img onClick={()=>onStart(false)} src={back} className='back'></img> */}
      {
        selected.map((obj)=>{
          return  <div> 
                    <p>{obj.name}</p>
                    <p>"{obj.question}"</p>
                    <p>{obj.hint}</p>
                    <input></input>
                  </div>
        })
      } 
    <Buttons/>  
    </div>
  );
};



export default detailQuiz;