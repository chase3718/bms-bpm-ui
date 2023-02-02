import React from "react";
import "./style.scss";
import { FieldSet } from "../FieldSet";
import { Field } from "../Field";
import { Checkbox } from "../Checkbox";
import { Button } from "../old/Button";

/**
 * @function Page
 * @param {PageProps} props
 * @returns {JSX.Element} Page component
 * @description Page component
 * @example <Page id="Page" className="Page" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Page = () => {
	return (
		<FieldSet title="Login" width="200px">
			<Field labelText="First Name"></Field>
			<Field labelText="Last Name"></Field>
			<Field labelText="Email" type="email"></Field>
			<Field labelText="Password" type="password"></Field>
			<Checkbox labelText="Remember Password"></Checkbox>
			<Button text="Login" color="primary" />
		</FieldSet>
	);
};

Page.displayName = "Page";
