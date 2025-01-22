import type { Preview } from "@storybook/react";
import '@/styles/globals.css'; // replace with the name of your tailwind css file


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
