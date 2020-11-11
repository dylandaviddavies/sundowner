import { CheckboxComponent } from './checkbox.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  moduleMetadata: {
    declarations: [CheckboxComponent],
  },
  template: `<app-checkbox [checked]="checked">Accept Terms & Conditions</app-checkbox>`,
  props: args,
});

export const Basic = Template.bind({});
