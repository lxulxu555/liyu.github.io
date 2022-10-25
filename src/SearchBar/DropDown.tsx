import React, { useEffect, useState } from 'react';
import './DropDown.scss';
import classNames from 'classnames';

interface Option {
  label: string;
  value: string;
}

type Size = 'small' | 'large';
type Type = 'multiple' | 'single';

interface IProps {
  options: Option[];
  size?: Size;
  width?: number;
  onChange: Function;
  value: string[];
  type?: Type;
}

export default function DropDown({
  options,
  size,
  value,
  width = 0,
  onChange,
  type = 'single',
}: IProps) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectOption, setSelectOption] = useState<Option[]>([]);

  useEffect(() => {
    setSelectOption(options.filter((option) => value.indexOf(option.value) >= 0));
  }, [value]);

  const changeOptions = (option: Option) => {
    let cloneSelectOption: Option[] = JSON.parse(JSON.stringify(selectOption));
    const findCurrentSelectIndex = cloneSelectOption.findIndex((x) => x.value === option.value);
    if (findCurrentSelectIndex === -1) {
      type === 'single' ? (cloneSelectOption = [option]) : cloneSelectOption.unshift(option);
    } else if (cloneSelectOption.length !== 1) {
      cloneSelectOption.splice(findCurrentSelectIndex, 1);
    }
    setSelectOption(cloneSelectOption);
    onChange(cloneSelectOption.map((x) => x.value));
  };

  const isSelectCheckBox = (option: Option) => {
    return selectOption.findIndex((x) => x.value === option.value) !== -1;
  };

  const preventDefault = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={classNames('c-dropdown', `c-dropdown--${size}`, {
        'c-dropdown--multiple': type === 'multiple',
      })}
      onClick={() => setOpenDropDown((prev) => !prev)}
    >
      <div className="c-dropdown__container">
        {selectOption.map((option) => {
          return <span key={option.label}>{option.label} </span>;
        })}
      </div>
      <div
        className={classNames('c-dropdown__options-container', {
          'c-dropdown--active': openDropDown,
        })}
      >
        {options.map((option) => {
          return (
            <div
              key={option.value}
              className="c-dropdown__option"
              onClick={() => changeOptions(option)}
            >
              <label className="c-checkbox">
                <input
                  type="checkbox"
                  checked={isSelectCheckBox(option)}
                  onClick={preventDefault}
                  readOnly
                />
                <span className="c-checkmark"></span>
              </label>
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
