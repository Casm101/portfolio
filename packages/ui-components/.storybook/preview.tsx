import React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
	(Story) => (
		<React.Fragment>
		<GlobalStyles />
		<Story />
		</React.Fragment>
	),
];


export default preview;
