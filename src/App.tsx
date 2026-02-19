import styles from "./App.module.scss";
import AppButton from "@/components/ui/buttons/AppButton/AppButton.tsx";
import useModal from "@/components/ui/modals/AppModal/hooks/useModal.ts";
import IconBell from "@/components/ui/icons/IconBell.tsx";
import AppInput from "@/components/ui/forms/AppInput/AppInput.tsx";
import AppModalContent from "@/components/ui/modals/AppModal/components/AppModalContent/AppModalContent.tsx";
import AppModal from "@/components/ui/modals/AppModal/AppModal.tsx";
import AppCheckboxGroup from "@/components/ui/forms/AppCheckboxGroup/AppCheckboxGroup.tsx";
import { useState } from "react";
import AppOptionCard from "@/components/ui/forms/AppOptionCard/AppOptionCard.tsx";


const options = [
  { value: 1, label: 'Опція 1', description: 'Lorem ipsum adipisicing elit.' },
  { value: 2, label: 'Опція 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', isDisabled: true },
  { value: 3,  label: 'Опція 3', description: 'Lorem ipsum consectetur adipisicing elit.',  },
  { value: 4, label: 'Опція 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { value: 5, label: 'Опція 5', description: 'Lorem ipsum dolor sit amet, ' },
]


const customOptions = [
  { key: 1, name: <strong>Опція 1</strong> },
  { key: 2, name: 'Опція 2' },
  { key: 3, name: 'Опція 3' },
  { key: 4, name: 'Опція 4', disabled: true, },
  { key: 5, name: 'Опція 5', disabled: true },
]

function App() {
  const { isOpen, onClose, onOpen } = useModal();

  const [selectedValues, setSelectedValues] = useState<Array<number | string>>([1]);
  const [selectedValues2, setSelectedValues2] = useState<Array<number | string>>([3]);

  return (
    <div className={styles.app}>
      <h3>Кнопки</h3>
      <div className={styles.appButtons}>
        <AppButton variant="primary" size="small" href={'/'} startIcon={<IconBell/>}>Оформити</AppButton>
        <AppButton variant="primary" size="medium" isUppercase >Продовжити Покупку</AppButton>
        <AppButton variant="primary" size="large" to={'/'} isUppercase endIcon={<IconBell/>}>Бронювати зараз</AppButton>
        <AppButton variant="secondary" size="small">Продовжити</AppButton>
        <AppButton variant="secondary" size="medium">Продовжити</AppButton>
        <AppButton variant="secondary" size="large" isUppercase startIcon={<IconBell/>}>Бронювати зараз</AppButton>
        <AppButton variant="secondary" size="small" isDisabled startIcon={<IconBell/>} href={''}>Disabled Link</AppButton>
        <AppButton variant="secondary" size="medium" isDisabled isUppercase>Disabled Button</AppButton>
        <AppButton variant="secondary" size="large" isLoading>Купити</AppButton>
      </div>

      <h3>Інпути</h3>
      <div className={styles.appButtons}>
        <AppInput size="small" error={"Це поле обов'язкове"} value={'Hello'} label={'Введіть своє імя'} endIcon={<IconBell/>}/>
        <AppInput size="medium" help={"Зверніть увагу"} value={'Hello'} label={'Введіть своє імя'} endIcon={<IconBell/>}/>
        <AppInput size="large" value={''} label={'Введіть своє імя'}/>
        <AppInput size="small" value={''} placeholder={"Введіть своє імя"} label={'Введіть своє імя'}/>
        <AppInput size="medium" value={''} placeholder={"Введіть своє імя"} label={'Введіть своє імя'} isDisabled/>
        <AppInput size="large" value={''} placeholder={"Введіть своє імя"} label={'Введіть своє імя'} isDisabled/>
      </div>


      <h3>Чекбокси</h3>
      <AppCheckboxGroup
        labelKey={'name'}
        valueKey={'key'}
        disabledKey={'disabled'}
        options={customOptions}
        value={selectedValues}
        onChange={(values) => {
          setSelectedValues(values)
        }}
      />

      <AppCheckboxGroup
        variant={'secondary'}
        labelKey={'name'} //
        valueKey={'key'}

        options={customOptions}
        value={selectedValues}
        onChange={(values) => {
          setSelectedValues(values)
        }}
      />


      <h3>Чекбокси з кастомними виглядами</h3>
        {/* IN this way we can build custom views of checkbox*/}
        <AppCheckboxGroup
          options={options}
          value={selectedValues2}
          onChange={setSelectedValues2}
          renderCheckbox={({ option, isActive, isDisabled, onChange }) => (
            <AppOptionCard
              onClick={() => onChange(option.value)}
              isActive={isActive}
              isDisabled={isDisabled}
              title={option.label}
              description={option.description}
              price={option.price}
            />
          )}
        />


      <h3>Модальне вікно</h3>
      <AppButton onClick={onOpen}>Open modal</AppButton>
      <AppModal isOpen={isOpen} onClose={onClose} size={'medium'} >
        <AppModalContent>
          <h2>Modal title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, expedita?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, expedita?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, expedita?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, expedita?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, expedita?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, expedita?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, expedita?</p>
          <AppButton size="small" onClick={onClose} variant="secondary">Close</AppButton>
        </AppModalContent>
      </AppModal>







      {/*<div>*/}
      {/*  <AppCheckbox label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="primary" size="small"/>*/}
      {/*  <AppCheckbox label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="secondary" size="small"/>*/}
      {/*  <AppCheckbox label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="primary" size="medium"/>*/}
      {/*  <AppCheckbox label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="secondary" size="medium"/>*/}
      {/*  <AppCheckbox label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="primary" size="large"/>*/}
      {/*  <AppCheckbox label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="secondary" size="large"/>*/}
      {/*  <AppCheckbox isDisabled={true} label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="primary"*/}
      {/*               size="medium"/>*/}
      {/*  <AppCheckbox isDisabled={true} label={'Ви погоджуєтесь з умовами?'} isChecked={true} variant="secondary"*/}
      {/*               size="medium"/>*/}
      {/*</div>*/}
    </div>
  )
}

export default App
