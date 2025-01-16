import back from '../public-assets/back.png';
import daily from '../public-assets/daily.png';
import car from '../public-assets/car.png';
import food from '../public-assets/food.png';
import './Menu.css';

const Menu = ({categories,onSelected,onStart}) => {
  const imgArr = [daily, car, food];
  return (
    <div className='menu'>
      <img onClick={()=>onStart(false)} src={back} className='back'></img>
      <h2>퀴즈 카테고리</h2>
      <div className='category'>
        {
          categories.map((obj,idx)=>{
            return <div onClick={()=>{onSelected(obj)}} key={obj}>
                      <img src={imgArr[idx]} className='daily'/> 
                      <p>{obj.name}</p>
                    </div>
          })
        }
      </div>
    </div>
  );
};

export default Menu;