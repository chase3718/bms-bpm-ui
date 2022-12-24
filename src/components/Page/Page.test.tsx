import React from "react";
import { render } from "@testing-library/react";

import { Page } from "./Page";

describe("Page", () => {
	test("Renders the Page component", () => {
		render(<Page></Page>);
	});
});
