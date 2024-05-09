import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: [
        './Introduction.mdx',
        './Licence.mdx',
        '../src/**/__docs__/*.stories.tsx',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'Documentation',
    },
}

export default config
