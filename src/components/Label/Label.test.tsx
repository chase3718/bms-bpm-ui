import React from "react";
import { render } from "@testing-library/react";

import { Label } from "./Label";

describe("Label", () => {
	test("Renders the Label component", () => {
		render(<Label></Label>);
	});
});
