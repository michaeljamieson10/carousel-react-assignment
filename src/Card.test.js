 import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
// smoke test
test('it renders without crashing', () =>{
  render(<Card />)
})
test('snapshot', () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot() 
})
it("works when you click on the right arrow", function() {
  // const { queryByTestId, queryByAltText } = render(<Carousel />);
   const { getByText } = render(<Card />);
  // expect the first image to show, but not the second
  console.log(getByText(`Image`, {exact:false}));
  // expect(getByText("Image")).toBeInTheDocument();
  // expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  // expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // // move forward in the carousel
  // const rightArrow = queryByTestId("right-arrow");
  // fireEvent.click(rightArrow);

  // // expect the second image to show, but not the first
  // expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  // expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
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
