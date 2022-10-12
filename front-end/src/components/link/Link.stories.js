import React from 'react';
import Link from './Link';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

// Helps with alignment
const Stack = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

// sets defaults for this component's stories
export default {
    component: Link,
    title: 'Link',
};

// TODO: return story
const Template = args => {
    return (
        <Stack>
            <Link url="https://raybans.com" display_name="RAYBANZ.COM"></Link>
            <Link {...args} />
            <UserAvatar alt="Wisdom's profile photo" src="https://yafghana.org/wp-content/uploads/2022/06/WISDOM-OKWEN.jpg" />
        </Stack>
    );
}

// I've pre-defined arguments for our Default story – feel free to edit!
export const Default = Template.bind({});
Default.args = {
    url: 'https://www.google.com',
    display_name: "OPEN GOOGLE"
}