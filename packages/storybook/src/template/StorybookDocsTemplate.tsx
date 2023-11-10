import { ArgsTable, Stories, PRIMARY_STORY, Primary as PrimaryStory } from '@storybook/addon-docs';
import React from 'react';
import { h } from "@stencil/core"

export const docsPage = (component: string, Readme: string) => {
	return {
		page: () => h(
			<div>
				<h1>{component}</h1>

				<h2>Playground</h2>
				<PrimaryStory />
				<ArgsTable story={PRIMARY_STORY} />

				<h2>Stories</h2>
				<Stories title="" includePrimary={false} />
				<Readme />
			</div>
		),
	};
};
