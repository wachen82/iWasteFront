import Button from "react-bootstrap/Button";

export const Page404 = () => {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="content_box_404">
                  <h3 className="h2">Look like you're lost</h3>
                  <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt=" stone age men scratching his head"
                  />

                  <p>the page you are looking for is not available!</p>

                  <a href="/" className="link_404">
                    <Button variant="primary" href="/">
                      Home Page
                    </Button>
                  </a>
                </div>
              </div>
              y
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
