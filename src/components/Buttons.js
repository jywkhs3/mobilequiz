

const Buttons = ({selected}) => {
  return (
    <div className="buttons">
      <button className='hint-btn'>hint</button>
      <button className='sub-btn' onClick={()=>selected.flashcards}>submit</button>
    </div>
  );
};

export default Buttons;