import { render } from "@testing-library/react";
import { ExerciseList } from "views/ExerciseList";

describe("ExerciseList", function () {
  it("should render", function () {
    const { getByTestId } = render(<ExerciseList />);

    expect(getByTestId("ExerciseList")).toBeDefined();
  });
});
