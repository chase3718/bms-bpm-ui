import React from "react";
import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
	test("Renders the Button component", () => {
		render(<Button></Button>);
	});
});
