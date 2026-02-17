import React from "react";
import styles from "./AppCheckboxGroup.module.scss";
import AppCheckbox from "@/components/ui/forms/AppCheckbox/AppCheckbox.tsx";
import cn from "@/helpers/sn.ts";

interface ICheckboxRenderProps<T> {
  option: T;
  isActive: boolean;
  isDisabled: boolean;
  onChange: (value: string | number) => void;
}

interface IProps<T extends Record<string, unknown>> {
  options: T[];
  value?: (string | number)[];
  onChange?: (values: (string | number)[]) => void;
  renderCheckbox?: (props: ICheckboxRenderProps<T>) => React.ReactNode;
  variant?: IUiVariants;
  size?: IUiSizes;
  isDisabled?: boolean;
  valueKey?: keyof T;
  labelKey?: keyof T;
  disabledKey?: keyof T;
  checkboxGroupClassName?: string;
  checkboxGroupOptionClassName?: string;
}

function AppCheckboxGroup<T extends Record<string, unknown>>({
  options,
  value = [],
  onChange,
  renderCheckbox,
  variant = 'primary',
  size = 'medium',
  isDisabled = false,
  valueKey = 'value' as keyof T,
  labelKey = 'label' as keyof T,
  disabledKey = 'isDisabled' as keyof T, // key for option disabled
  checkboxGroupClassName = '',
  checkboxGroupOptionClassName = '',
}: IProps<T>) {

  const handleCheckboxChange = (optionValue: string | number) => {
    if (!onChange) return;

    const isChecked = value.includes(optionValue);
    const newValues = isChecked
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];

    onChange(newValues);
  };

  return (
    <div className={cn(styles.appCheckboxGroup, checkboxGroupClassName)}>
      {options.map((option) => {
        const optionValue = option[valueKey] as string | number;
        const optionLabel = option[labelKey] as string;
        const optionDisabled = option[disabledKey] as boolean;
        const isActive = value.includes(optionValue);

        if (renderCheckbox) {
          return (
            <div key={optionValue} className={cn(styles.appCheckboxGroupOption, checkboxGroupOptionClassName, (optionDisabled || isDisabled) && styles['disabled'])}>
              {renderCheckbox({
                option,
                isActive,
                isDisabled: optionDisabled,
                onChange: handleCheckboxChange,
              })}
            </div>
          );
        }

        return (
          <AppCheckbox
            className={checkboxGroupOptionClassName}
            key={optionValue}
            label={optionLabel}
            isChecked={isActive}
            isDisabled={isDisabled || optionDisabled}
            variant={variant}
            size={size}
            onChange={() => handleCheckboxChange(optionValue)}
          />
        );
      })}
    </div>
  );
}

export default AppCheckboxGroup;