import React from "react";
import { render } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
	test("Renders the input component", () => {
		render(<Input></Input>);
	});
});
