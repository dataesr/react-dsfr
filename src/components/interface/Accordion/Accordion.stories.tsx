import { ComponentStory } from '@storybook/react';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon

export default {
  title: 'Accordéon - Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
};

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const SimpleAccordion = Template.bind({});
SimpleAccordion.args = {
  children: [
    <AccordionItem title="first line accordion" initExpand>
      Accordion Item #1
    </AccordionItem>,
    <AccordionItem title="second line accordion">
      Accordion Item #2
    </AccordionItem>,
    <AccordionItem title="third line accordion">
      <article>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid architecto assumenda autem deleniti eius error
          eum exercitationem hic libero modi mollitia numquam obcaecati
          provident quis quisquam, repellendus tempore
          temporibus ullam.
        </p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid architecto assumenda autem deleniti eius error
        eum exercitationem hic libero modi mollitia numquam obcaecati
        provident quis quisquam, repellendus tempore
        temporibus ullam.
      </article>
    </AccordionItem>,
  ],
};
SimpleAccordion.storyName = 'Accordéon simple';
