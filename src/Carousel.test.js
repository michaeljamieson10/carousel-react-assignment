 import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
// smoke test
test('it renders without crashing', () =>{
  render(<Carousel />)
})
test('snapshot', () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot() 
})
it("works when you click on the right arrow", function() {
  const { getByTestId ,queryByTestId, queryByAltText } = render(<Carousel />);
  // expect(getByTestId('left-arrow')).not.toBeInTheDocument();
  expect(queryByTestId('left-arrow')).toBeNull();
  // expect(toHaveClass("fas fa-chevron-circle-left fa-2x")).not.toBeInTheDocument();
  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  fireEvent.click(rightArrow);
  expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();
  expect(queryByTestId('right-arrow')).toBeNull();

});
it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  const leftArrow = queryByTestId("left-arrow");
  
  // // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  fireEvent.click(leftArrow);
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
});
// it("works when you click on the right arrow", function() {
//   const { queryByTestId, queryByAltText } = render(<Carousel />);

//   // expect the first image to show, but not the second
//   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
//   expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

//   // move forward in the carousel
//   const rightArrow = queryByTestId("right-arrow");
//   fireEvent.click(rightArrow);

//   // expect the second image to show, but not the first
//   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
//   expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
// });
