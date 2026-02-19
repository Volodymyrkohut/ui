import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import AppModal from './AppModal'
import AppModalContent from './components/AppModalContent/AppModalContent'
import AppButton from '@/components/ui/buttons/AppButton/AppButton'

const meta = {
  title: 'UI/AppModal',
  component: AppModal,
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
} satisfies Meta<typeof AppModal>

export default meta
type Story = StoryObj<typeof meta>

// Footer через actions
export const WithActions: Story = {
  render: () => {
    function Demo() {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <>
          <AppButton variant="primary" size="medium" onClick={() => setIsOpen(true)}>
            Відкрити модальне вікно
          </AppButton>
          <AppModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small">
            <AppModalContent>
              <h2 style={{ margin: '0 0 12px' }}>Підтвердження</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>
                Ви впевнені що хочете продовжити? Цю дію не можна скасувати.
              </p>
              <AppModalContent.Footer
                actions={[
                  { label: 'Підтвердити', variant: 'primary', onClick: () => setIsOpen(false) },
                  { label: 'Скасувати', variant: 'secondary', onClick: () => setIsOpen(false) },
                ]}
              />
            </AppModalContent>
          </AppModal>
        </>
      )
    }
    return <Demo />
  },
}

// Footer через children — повна кастомізація
export const WithFooterChildren: Story = {
  render: () => {
    function Demo() {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <>
          <AppButton variant="primary" size="medium" onClick={() => setIsOpen(true)}>
            Відкрити модальне вікно
          </AppButton>
          <AppModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="medium">
            <AppModalContent>
              <h2 style={{ margin: '0 0 12px' }}>Заголовок модалки</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <AppModalContent.Footer>
                <AppButton size="small" variant="secondary" onClick={() => setIsOpen(false)}>
                  Закрити
                </AppButton>
              </AppModalContent.Footer>
            </AppModalContent>
          </AppModal>
        </>
      )
    }
    return <Demo />
  },
}

export const Small: Story = {
  render: () => {
    function Demo() {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <>
          <AppButton variant="primary" size="medium" onClick={() => setIsOpen(true)}>Small</AppButton>
          <AppModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small">
            <AppModalContent>
              <h2 style={{ margin: '0 0 12px' }}>Small modal</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>Lorem ipsum dolor sit amet.</p>
              <AppModalContent.Footer
                actions={[{ label: 'Закрити', variant: 'secondary', onClick: () => setIsOpen(false) }]}
              />
            </AppModalContent>
          </AppModal>
        </>
      )
    }
    return <Demo />
  },
}

export const Medium: Story = {
  render: () => {
    function Demo() {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <>
          <AppButton variant="primary" size="medium" onClick={() => setIsOpen(true)}>Medium</AppButton>
          <AppModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="medium">
            <AppModalContent>
              <h2 style={{ margin: '0 0 12px' }}>Medium modal</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>Lorem ipsum dolor sit amet.</p>
              <AppModalContent.Footer
                actions={[{ label: 'Закрити', variant: 'secondary', onClick: () => setIsOpen(false) }]}
              />
            </AppModalContent>
          </AppModal>
        </>
      )
    }
    return <Demo />
  },
}

export const Large: Story = {
  render: () => {
    function Demo() {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <>
          <AppButton variant="primary" size="medium" onClick={() => setIsOpen(true)}>Large</AppButton>
          <AppModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="large">
            <AppModalContent>
              <h2 style={{ margin: '0 0 12px' }}>Large modal</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>Lorem ipsum dolor sit amet.</p>
              <AppModalContent.Footer
                actions={[{ label: 'Закрити', variant: 'secondary', onClick: () => setIsOpen(false) }]}
              />
            </AppModalContent>
          </AppModal>
        </>
      )
    }
    return <Demo />
  },
}
