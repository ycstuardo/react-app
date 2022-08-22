const Card = (props) => {
    return (
      <>
        <div className="card">
          <img src={props.src} alt={props.alt}></img>
          <h4>{props.name}</h4>
          <h6>{props.category}</h6>
        </div>
      </>
    );
  };
  export default Card;
  