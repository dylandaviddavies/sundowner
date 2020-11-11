// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../app/button/button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<app-button [loading]="loading" [style]="style" [size]="size" [color]="color">Submit</app-button>`,
  props: args,
});

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Outline = Template.bind({});
Outline.args = {
  style: 'outline',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
