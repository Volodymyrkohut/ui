import type { Meta, StoryObj } from '@storybook/react-vite'
import AppInput from './AppInput'
import IconBell from '@/components/ui/icons/IconBell'

const meta = {
  title: 'UI/AppInput',
  component: AppInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Введіть своє імʼя',
    placeholder: 'Іван Іваненко',
    size: 'medium',
  },
}

export const WithStartIcon: Story = {
  args: {
    label: 'Пошук',
    placeholder: 'Введіть запит',
    startIcon: <IconBell />,
    size: 'medium',
  },
}

export const WithEndIcon: Story = {
  args: {
    label: 'Телефон',
    placeholder: '+380',
    endIcon: <IconBell />,
    size: 'medium',
  },
}

export const WithBothIcons: Story = {
  args: {
    label: 'З двома іконками',
    placeholder: 'Введіть текст',
    startIcon: <IconBell />,
    endIcon: <IconBell />,
    size: 'medium',
  },
}

export const WithError: Story = {
  args: {
    label: 'Електронна пошта',
    value: 'not-an-email',
    error: 'Введіть коректну електронну пошту',
    size: 'medium',
  },
}

export const WithHelp: Story = {
  args: {
    label: 'Пароль',
    placeholder: '••••••••',
    help: 'Мінімум 8 символів, одна велика літера',
    size: 'medium',
  },
}

export const Loading: Story = {
  args: {
    label: 'Перевірка...',
    value: 'ivan@example.com',
    isLoading: true,
    size: 'medium',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Заблоковане поле',
    value: 'Не редагується',
    isDisabled: true,
    size: 'medium',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <AppInput label="Small" placeholder="Введіть текст" size="small" endIcon={<IconBell />} />
      <AppInput label="Medium" placeholder="Введіть текст" size="medium" endIcon={<IconBell />} />
      <AppInput label="Large" placeholder="Введіть текст" size="large" endIcon={<IconBell />} />
    </div>
  ),
}
