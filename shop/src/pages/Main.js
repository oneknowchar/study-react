import Card from '../components/Card.js';

function Main(){
  let shoese = null;  //temp

  return (
    <div>
      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          {
            shoese ? shoese.map((shoese, i)=>{
              return (
                <Card shoese={shoese}></Card>
              )
            }) : null
          }
        </div>
      </div>
    </div>
  );
}

export default Main;