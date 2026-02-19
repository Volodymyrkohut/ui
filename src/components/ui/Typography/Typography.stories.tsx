import type { Meta, StoryObj } from '@storybook/react-vite'
import Typography from './Typography'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'largeTitle',
        'title2',
        'title1',
        'title3',
        'subTitle1',
        'subTitle2',
        'subTitle2Strong',
        'body2',
        'body1',
        'body1Strong',
        'caption1',
      ],
    },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: 'body1',
    children: 'Приклад тексту',
  },
}

// Всі варіанти — головна story для дизайн-команди
export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const groups: { label: string; items: { variant: React.ComponentProps<typeof Typography>['variant']; spec: string }[] }[] = [
      {
        label: 'Display',
        items: [
          { variant: 'largeTitle', spec: '40px / 52px / 600' },
          { variant: 'title2',     spec: '28px / 36px / 600' },
          { variant: 'title1',     spec: '24px / 32px / 600' },
          { variant: 'title3',     spec: '24px / 32px / 600' },
        ],
      },
      {
        label: 'Subtitle',
        items: [
          { variant: 'subTitle1',      spec: '20px / 28px / 600' },
          { variant: 'subTitle2',      spec: '16px / 22px / 400' },
          { variant: 'subTitle2Strong', spec: '16px / 22px / 600' },
        ],
      },
      {
        label: 'Body',
        items: [
          { variant: 'body2',      spec: '16px / 21px / 400' },
          { variant: 'body1',      spec: '14px / 19px / 400' },
          { variant: 'body1Strong', spec: '14px / 19px / 600' },
        ],
      },
      {
        label: 'Small',
        items: [
          { variant: 'caption1', spec: '12px / 15px / 400' },
        ],
      },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {groups.map(({ label, items }) => (
          <div key={label}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 16 }}>
              {label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map(({ variant, spec }) => (
                <div key={variant} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', alignItems: 'baseline', gap: 24, borderBottom: '1px solid #f3f4f6', paddingBottom: 12 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#374151', fontFamily: 'monospace' }}>{variant}</span>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>{spec}</span>
                  </div>
                  <Typography variant={variant}>
                    Зручне бронювання житла у Буковелі
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}

export const WithColor: Story = {
  name: 'Color prop',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Typography variant="body1">Default (inherit)</Typography>
      <Typography variant="body1" color="var(--G500)">color="var(--G500)"</Typography>
      <Typography variant="body1" color="var(--R500)">color="var(--R500)"</Typography>
      <Typography variant="body1" color="#9ca3af">color="#9ca3af"</Typography>
    </div>
  ),
}
