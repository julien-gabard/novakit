import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

// @ts-ignore
import DocumentationTemplate from './DocumentationTemplate.mdx'

const preview: Preview = {
    decorators: [
        Story => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            default: 'dark',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            page: DocumentationTemplate,
            theme: themes.dark,
        },
    },
}

export default preview
