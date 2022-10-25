## SearchBar

- ant-design

```tsx
import React from 'react';
import SearchBar from './SearchBar.tsx';
import 'antd/dist/antd.less';

export default () => (
  <SearchBar
    selectOptions={[
      { label: 'qweqwe', value: '1' },
      { label: 'dasdasdas', value: '2' },
    ]}
    autoCompleteOptions={[
      {
        title: 'liam',
        options: [
          {
            label: '123123123',
            value: '1',
          },
          {
            label: 'ewqeqweqweqw',
            value: '2',
          },
        ],
      },
      {
        title: 'evan',
        options: [
          {
            label: '3',
            value: '3',
          },
          {
            label: '4',
            value: '4',
          },
        ],
      },
    ]}
  />
);
```

- global components

```tsx
import React from 'react';
import GlobalSearchBar from './global.tsx';

export default () => <GlobalSearchBar />;
```
