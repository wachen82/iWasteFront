import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <>
      <Container>
        <div className="mt-4 badge bg-primary text-wrap justify-content-center ">
          <p className="fs-1 $font-family-sans-serif">
            At our Composting Site we are transferring biodegradable waste in to
            Quality Compost which is used in our Organic production
          </p>
        </div>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 justify-content-center mt-3 pt-5"
              src="picture1.jpg"
              alt="drone picture"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 justify-content-center mt-5 pt-5"
              src="picture2.jpg"
              alt="picture of greenhouse"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 justify-content-center mt-5 pt-5"
              src="picture3.jpg"
              alt="picture of tomatoes"
            />
            <Carousel.Caption>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>{" "}
      );
    </>
  );
};
