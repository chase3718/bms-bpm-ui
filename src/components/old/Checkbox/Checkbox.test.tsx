import React from "react";
import { render } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
	test("Renders the Checkbox component", () => {
		render(<Checkbox></Checkbox>);
	});
});
