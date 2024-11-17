const FacilityContent = ({ detail }) => {
  return (
    <div>
      <div className="icon-bg">
        <span className="icon">{detail.icon}</span>
      </div>
      <h5 className="facility-title">{detail.title}</h5>
      <p className="facility-title">{detail.para}</p>
    </div>
  );
};

export default FacilityContent;
