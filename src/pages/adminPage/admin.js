import { Carousel } from "react-bootstrap";
import { AppNav } from "./AppNav";

export const Admin = () => {
  return (
    <div className="admin">
      <AppNav />
      <Carousel fade={true}>
        <Carousel.Item interval={1200} style={{ height: "500px" }}>
          <img
            className="d-block w-100 h-100"
            src="https://cdn.pixabay.com/photo/2017/08/30/07/52/money-2696219_960_720.jpg"
            alt="First slide "
          />
        </Carousel.Item>

        <Carousel.Item interval={1200} style={{ height: "500px" }}>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/coin-stacks-and-chart-graphs-on-a-chessboard-picture-id1061369956?k=6&m=1061369956&s=612x612&w=0&h=vYfvUslRYjTO48PDJyBZFS5fUHAuFlhAGsOtXvO6AMQ="
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={1200} style={{ height: "500px" }}>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/businessman-is-stacking-coins-picture-id183865137?k=6&m=183865137&s=612x612&w=0&h=1DpvwkYh7hJB8ieh-JyEr43kwBOVAU3iHj-NlTPg1dE="
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={1200} style={{ height: "500px" }}>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/man-counting-indian-500-rupee-notes-picture-id1171982977?k=6&m=1171982977&s=612x612&w=0&h=0UDSc8N39lI53gkLqcXUu7JZQL5ddn6TBnmygKR68o4="
            alt="Third slide "
          />
        </Carousel.Item>

        <Carousel.Item interval={1200} style={{ height: "500px" }}>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/money-savings-investment-making-money-for-future-financial-wealth-picture-id1130326185?k=6&m=1130326185&s=612x612&w=0&h=qEV-8ENTs7ePbQOf-A-5JLsAQ_LGfkt3ZUEfR_4EeNg="
            alt="Third slide "
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
