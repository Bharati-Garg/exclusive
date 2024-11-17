const CardContent = ({ details }) => {
  return (
    <div>
      <div className="card">
        <div className="icon-bg">
          <span className="icon">{details.icon}</span>
        </div>
        <h5 className="card-heading">{details.heading}</h5>
        <p className="card-para">{details.para}</p>
      </div>
    </div>
  );
};

export default CardContent;
