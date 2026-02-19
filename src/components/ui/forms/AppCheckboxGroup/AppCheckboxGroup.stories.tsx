import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import AppCheckboxGroup from './AppCheckboxGroup'
import AppOptionCard from '@/components/ui/forms/AppOptionCard/AppOptionCard'

const meta = {
  title: 'UI/AppCheckboxGroup',
  component: AppCheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppCheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

const defaultOptions = [
  { value: 1, label: 'Опція 1' },
  { value: 2, label: 'Опція 2' },
  { value: 3, label: 'Опція 3' },
  { value: 4, label: 'Опція 4', isDisabled: true },
]

function Controlled(props: React.ComponentProps<typeof AppCheckboxGroup>) {
  const [value, setValue] = useState<Array<string | number>>(props.value ?? [])
  return <AppCheckboxGroup {...props} value={value} onChange={setValue} />
}

export const Primary: Story = {
  render: () => <Controlled options={defaultOptions} value={[1]} variant="primary" />,
}

export const Secondary: Story = {
  render: () => <Controlled options={defaultOptions} value={[1]} variant="secondary" />,
}

export const AllDisabled: Story = {
  render: () => (
    <AppCheckboxGroup options={defaultOptions} value={[1]} variant="primary" isDisabled />
  ),
}

// Показує як підключити дані з нестандартними ключами
const customOptions = [
  { id: 'a', title: 'Тариф Standard', description: 'Базовий набір послуг' },
  { id: 'b', title: 'Тариф Premium', description: 'Розширений набір послуг' },
  { id: 'c', title: 'Тариф Business', description: 'Повний набір послуг', disabled: true },
]

export const CustomKeys: Story = {
  name: 'Custom valueKey / labelKey',
  render: () => (
    <Controlled
      options={customOptions}
      value={['a']}
      valueKey="id"
      labelKey="title"
      disabledKey="disabled"
    />
  ),
}

// Показує renderCheckbox — будь-який компонент замість дефолтного чекбоксу
const cardOptions = [
  { value: 1, label: 'Стандарт', description: 'Базовий набір послуг', price: 500 },
  { value: 2, label: 'Преміум', description: 'Розширений набір послуг', price: 1200 },
  { value: 3, label: 'Бізнес', description: 'Повний набір послуг', price: 2500 },
  { value: 4, label: 'Enterprise', description: 'Індивідуальні умови', isDisabled: true },
]

export const WithOptionCard: Story = {
  name: 'renderCheckbox → AppOptionCard',
  render: () => {
    function Demo() {
      const [value, setValue] = useState<Array<string | number>>([1])
      return (
        <AppCheckboxGroup
          options={cardOptions}
          value={value}
          onChange={setValue}
          renderCheckbox={({ option, isActive, isDisabled, onChange }) => (
            <AppOptionCard
              onClick={() => onChange(option.value as number)}
              isActive={isActive}
              isDisabled={isDisabled}
              title={option.label as string}
              description={option.description as string}
              price={option.price as number}
            />
          )}
        />
      )
    }
    return <Demo />
  },
}
