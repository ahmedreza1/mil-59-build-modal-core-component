import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, Props } from '../src/components/Text/Text';

const meta: Meta = {
    title: "Layout/Text",
    component: Text,
    argTypes: {
        children: {
            defaultValue: "This is a text component"
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const Headers = () => (
    <React.Fragment>
        <Text header={1}>This is an h1</Text>
        <Text header={2}>This is an h2</Text>
        <Text header={3}>This is an h3</Text>
    </React.Fragment>
);

export const DifferentStyles = () => (
    <React.Fragment>
        <Text bold>Bold</Text>
        <Text italic>Italic</Text>
        <Text underline>Underline</Text>
        <Text bold italic underline>All Three</Text>
    </React.Fragment>
);

export const DifferentCasing = () => (
    <React.Fragment>
        <Text upper>upper case</Text>
        <Text lower>LOWER CASE</Text>
        <Text pascal>first letter upper case</Text>
    </React.Fragment>
);

export const TextInsideOfText = () => (
        <Text>
            This is the story of how <Text bold inline pascal>captain barnacles</Text> defeated 
            the <Text italic upper inline>evil monster</Text> and became 
            the <Text inline underline pascal>king of the pirates.</Text>
        </Text>
);