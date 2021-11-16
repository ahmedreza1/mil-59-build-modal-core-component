import React from 'react'
import { Meta, Story } from '@storybook/react'
import { myModal as Modal, Props } from '../src/components/Modal/Modal'

const meta: Meta = {
    title: 'Layout/Modal',
    component: Modal,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: "Open Modal"
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Modal {...args} />

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
    variant: "Large",
    children: "I am Large"
}




























