const BreadcrumbTwo = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="m-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#" className="home">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active about" aria-current="page">
            About
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbTwo;
