import React from "react";
import { render } from "@testing-library/react";

import { FieldSet } from "./FieldSet";

describe("FieldSet", () => {
	test("Renders the FieldSet component", () => {
		render(<FieldSet></FieldSet>);
	});
});
