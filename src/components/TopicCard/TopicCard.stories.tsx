import { ComponentMeta, ComponentStory } from '@storybook/react';

import TopicCard from '.';
import { postMock } from './mock';

export default {
  title: 'Topic Card',
  components: TopicCard,
} as ComponentMeta<typeof TopicCard>;

const Template: ComponentStory<typeof TopicCard> = (args) => (
  <TopicCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  post: postMock,
};
