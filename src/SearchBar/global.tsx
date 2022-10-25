import React, { useEffect, useState } from 'react';
import DropDown from './DropDown';
import './global.less';
import Button from './Button';
import classNames from 'classnames';
import { SearchOutlined } from '@ant-design/icons';

function globalSearchBar() {
  const [dropDownValue, setDropDownValue] = useState(['1']);
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  return (
    <div className="global-search-bar">
      <DropDown
        options={[
          { label: 'qweqwe', value: '1' },
          { label: 'dasdasdas', value: '2' },
        ]}
        onChange={(v: any) => setDropDownValue(v)}
        value={dropDownValue}
      />
      {/* 组件无法满足功能使用，自定义开发组件实现 */}
      <div className="search-bar-auto-conplete">
        <input onFocus={() => setPopoverVisible(true)} onBlur={() => setPopoverVisible(false)} />
        <SearchBarPopover
          visible={popoverVisible}
          recentSearchs={['1', '2']}
          suggestions={[
            {
              title: 'liam',
              suggestion: [{ label: '123123' }, { label: '123123' }, { label: '123123' }],
            },
            {
              title: 'evan',
              suggestion: [{ label: '123123' }, { label: '123123' }, { label: '123123' }],
            },
          ]}
        />
      </div>
      <div className="search-button-parent">
        <Button text="" />
        <div className="search-icon">
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

function SearchBarPopover({ visible, recentSearchs, suggestions }: any) {
  const recentSearch = () => {
    return (
      <>
        <div className="popover-title">Recent Search</div>
        {recentSearchs.map((search: any, index: any) => {
          return (
            <div key={index} className="popover-item">
              {search}
            </div>
          );
        })}
      </>
    );
  };

  const searchSuggestion = () => {
    return (
      <>
        {suggestions?.map((item: any) => {
          return (
            <React.Fragment key={item.title}>
              <div className="popover-title">{item.title}</div>
              {item.suggestion.map((item: any, index: number) => {
                return (
                  <div key={index} className="popover-item">
                    <div>{item?.label}</div>
                    <div>{item?.number}</div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  console.log(visible);

  return (
    <div
      className={classNames('search-bar-auto-popover', {
        'search-bar-auto-popover-hidden': !visible,
      })}
    >
      {recentSearch()}
      {searchSuggestion()}
    </div>
  );
}

export default globalSearchBar;
