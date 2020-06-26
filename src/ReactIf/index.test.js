import React from 'react';
import renderer from 'react-test-renderer';
import ReactIf from './index';
import { describe, expect, it } from '@jest/globals';

describe.each([
	true,
	1,
	-1,
	'abc',
	{},
	{ a: 1 },
	[],
	['a'],
	(() => {
		return true;
	})(),
])('Render "when" boolean value is true', (condition) => {
	const placeHolderComponent = <span>Hello World</span>;
	it(`Renders child component if condition is ${condition}`, () => {
		const testComponent = (
			<ReactIf when={condition}>{placeHolderComponent}</ReactIf>
		);
		const tree = renderer.create(testComponent).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe.each([undefined, false, 0, '', null])(
	'Render "when" boolean value is false',
	(condition) => {
		const placeHolderComponent = <span>Hello World</span>;
		it(`Renders null if condition is ${condition}`, () => {
			const testComponent = (
				<ReactIf when={condition}>{placeHolderComponent}</ReactIf>
			);
			const tree = renderer.create(testComponent).toJSON();
			expect(tree).toMatchSnapshot();
		});
	}
);

describe.each([
	[false, false, null],
	[false, true, null],
	[true, false, null],
	[true, true, 'Child Component'],
])('Render nested ReactIfs', (outerCondition, innerCondition, output) => {
	const placeHolderComponent = <span>Hello World</span>;
	const innerReactIf = (
		<ReactIf when={innerCondition}>{placeHolderComponent}</ReactIf>
	);
	const testComponent = <ReactIf when={outerCondition}>{innerReactIf}</ReactIf>;
	it(`OuterCondition: ${outerCondition} and InnerCondition: ${innerCondition} = Output ${output}`, () => {
		const tree = renderer.create(testComponent).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
