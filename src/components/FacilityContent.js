const FacilityContent = ({ detail }) => {
  return (
    <div>
      <div className="icon-bg">
        <div className="icon-black-bg">
          <span className="icon">{detail.icon}</span>
        </div>
      </div>
      <h5>{detail.title}</h5>
      <p>{detail.para}</p>
    </div>
  );
};

export default FacilityContent;
