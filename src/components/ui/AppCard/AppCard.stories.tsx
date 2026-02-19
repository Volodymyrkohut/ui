import type { Meta, StoryObj } from '@storybook/react-vite'
import AppCard from './AppCard'
import AppButton from '@/components/ui/buttons/AppButton/AppButton'

const meta = {
  title: 'UI/AppCard',
  component: AppCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevated'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppCard>

export default meta
type Story = StoryObj<typeof meta>

// Footer через actions — найпростіший варіант
export const WithActions: Story = {
  args: { variant: 'outlined' },
  render: (args) => (
    <AppCard {...args}>
      <AppCard.Header>Підтвердження бронювання</AppCard.Header>
      <AppCard.Body>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Перевірте деталі перед підтвердженням.
        </p>
      </AppCard.Body>
      <AppCard.Footer
        actions={[
          { label: 'Підтвердити', variant: 'primary', onClick: () => {} },
          { label: 'Скасувати', variant: 'secondary', onClick: () => {} },
        ]}
      />
    </AppCard>
  ),
}

// Footer через children — повна кастомізація
export const WithChildren: Story = {
  args: { variant: 'outlined' },
  render: (args) => (
    <AppCard {...args}>
      <AppCard.Header>Заголовок картки</AppCard.Header>
      <AppCard.Body>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Будь-який контент всередині — текст, форми, списки, зображення.
        </p>
      </AppCard.Body>
      <AppCard.Footer>
        <AppButton size="small" variant="primary">Підтвердити</AppButton>
        <AppButton size="small" variant="secondary">Скасувати</AppButton>
      </AppCard.Footer>
    </AppCard>
  ),
}

// Footer: actions + children поруч
export const ActionsWithExtra: Story = {
  name: 'Actions + extra children',
  args: { variant: 'outlined' },
  render: (args) => (
    <AppCard {...args}>
      <AppCard.Header>Деталі</AppCard.Header>
      <AppCard.Body>
        <p style={{ margin: 0, color: '#6b7280' }}>Зміст картки.</p>
      </AppCard.Body>
      <AppCard.Footer
        actions={[
          { label: 'Зберегти', variant: 'primary', onClick: () => {} },
        ]}
      >
        <AppButton size="small" variant="secondary" href="/">
          Детальніше
        </AppButton>
      </AppCard.Footer>
    </AppCard>
  ),
}

// Тільки body
export const BodyOnly: Story = {
  args: { variant: 'outlined' },
  render: (args) => (
    <AppCard {...args}>
      <AppCard.Body>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Картка без header і footer — тільки контент.
        </p>
      </AppCard.Body>
    </AppCard>
  ),
}

// Варіанти поруч для порівняння
export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <AppCard variant="outlined">
        <AppCard.Body>Outlined — рамка</AppCard.Body>
      </AppCard>
      <AppCard variant="elevated">
        <AppCard.Body>Elevated — тінь</AppCard.Body>
      </AppCard>
    </div>
  ),
}
