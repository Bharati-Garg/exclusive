const BreadcrumbTwo = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="m-5">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#" className="home">
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active about"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbTwo;
