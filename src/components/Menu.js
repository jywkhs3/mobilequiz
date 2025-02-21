import daily from '../public-assets/daily.png';
import car from '../public-assets/car.png';
import food from '../public-assets/food.png';
import back from '../public-assets/back.png';
import './Menu.css';

const Menu = ({categories,onSelected,onBack}) => {
  const imgArr = [daily, car, food];
  return (
    <div className='menu'>
      <img onClick={onBack} src={back} className='back' alt='뒤로가기'/>
      <h2>카테고리</h2>
      <div className='category'> 
        {
          categories.map((obj,idx)=>{
            // console.log(categories);
            return <div onClick={()=>{onSelected(obj)}} key={idx}>
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