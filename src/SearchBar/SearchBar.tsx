import React, { ReactNode } from 'react';
import { AutoComplete, Button, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.less';

interface LabeledValue {
  value: string;
  label: ReactNode;
}

interface AutoCompleteOptions {
  title: string;
  options: LabeledValue[];
}

export interface ISearchBarProps {
  selectOptions?: LabeledValue[];
  autoCompleteOptions?: AutoCompleteOptions[];
}

const SearchBar: React.FC<ISearchBarProps> = ({ selectOptions, autoCompleteOptions }) => {
  const renderAutoOptionTitle = (title: string) => <span>{title}</span>;

  const renderAutoOptionitem = (option: LabeledValue) => ({
    value: option.value,
    label: <span>{option.label}</span>,
  });

  const autoOption = () => {
    return autoCompleteOptions?.map((autoItem) => ({
      label: renderAutoOptionTitle(autoItem.title),
      options: autoItem.options.map((autoOption) => renderAutoOptionitem(autoOption)),
    }));
  };

  return (
    <div className="ant-search-bar">
      <Input.Group compact size="large">
        <Select
          className="ant-search-bar-select"
          popupClassName="ant-search-bar-select-popup"
          size="large"
        >
          {selectOptions?.map((select) => (
            <Select.Option key={select.value} value={select.value}>
              {select.label}
            </Select.Option>
          ))}
        </Select>
        <AutoComplete popupClassName="ant-search-bar-auto-complete-popup" options={autoOption()}>
          <Input type="text" placeholder="Search" size="large" />
        </AutoComplete>
        <Button icon={<SearchOutlined style={{ fontSize: 25 }} />} size="large"></Button>
      </Input.Group>
    </div>
  );
};

export default SearchBar;
