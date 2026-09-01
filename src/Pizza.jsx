const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image ? props.image: "https://i.pinimg.com/1200x/97/a8/14/97a81445e810015073e9ad30fa903042.jpg"} alt={props.name} />
    </div>
  );
};

export default Pizza;
