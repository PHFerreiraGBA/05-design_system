import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@phdesignsys/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Custom title',
  },
  argTypes: {
    variant: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          "The heading will always be an `h2` by default, but it's possible to change its type through the property `as`",
      },
    },
  },
}
