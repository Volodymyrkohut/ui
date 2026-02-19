import type { Meta, StoryObj } from '@storybook/react-vite'
import AppButton from './AppButton'
import IconBell from '@/components/ui/icons/IconBell'

const meta = {
  title: 'UI/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

// --- Base variants ---

export const Primary: Story = {
  args: {
    children: 'Оформити',
    variant: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Продовжити',
    variant: 'secondary',
    size: 'medium',
  },
}

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <AppButton variant="primary" size="small">Small</AppButton>
      <AppButton variant="primary" size="medium">Medium</AppButton>
      <AppButton variant="primary" size="large">Large</AppButton>
    </div>
  ),
}

// --- Icon ---

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <AppButton variant="primary" size="medium" startIcon={<IconBell />}>
        Start Icon
      </AppButton>
      <AppButton variant="primary" size="medium" endIcon={<IconBell />}>
        End Icon
      </AppButton>
      <AppButton variant="primary" size="medium" startIcon={<IconBell />} endIcon={<IconBell />}>
        Both Icons
      </AppButton>
    </div>
  ),
}

// --- States ---

export const Loading: Story = {
  args: {
    children: 'Зберегти',
    variant: 'primary',
    size: 'medium',
    isLoading: true,
  },
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <AppButton variant="primary" size="medium" isDisabled>Primary Disabled</AppButton>
      <AppButton variant="secondary" size="medium" isDisabled>Secondary Disabled</AppButton>
    </div>
  ),
}

export const Uppercase: Story = {
  args: {
    children: 'Бронювати зараз',
    variant: 'primary',
    size: 'large',
    isUppercase: true,
    endIcon: <IconBell />,
  },
}

// --- Element types ---

export const AsLink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <AppButton variant="primary" size="medium" href="https://example.com">
        Та сама вкладка
      </AppButton>
      <AppButton variant="primary" size="medium" href="https://example.com" target="_blank">
        Нова вкладка
      </AppButton>
    </div>
  ),
}

export const FullWidth: Story = {
  args: {
    children: 'На всю ширину',
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}
