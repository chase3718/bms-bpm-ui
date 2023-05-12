import React from "react";
import { render } from "@testing-library/react";

import { Field } from "./Field";

describe("Field", () => {
	test("Renders the Field component", () => {
		render(<Field></Field>);
	});
});
