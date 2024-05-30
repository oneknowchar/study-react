function Card(props){
  return (
    <div className="col-md-4">
      <img alt={props.shoese.id} src={props.shoese.image} width="80%" />
      <h4>{props.shoese.title}</h4>
      <p>{props.shoese.content}</p>
    </div>
  );
}

export default Card;