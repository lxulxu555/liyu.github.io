## Button

### 对比项：button 配合 icon 使用

- ant.design

```tsx
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.less';
import './index.less';

export default () => (
  <div className="box">
    <h4>可点击查看细节交互</h4>
    <Button type="primary" icon={<SearchOutlined />}>
      Primary
    </Button>
  </div>
);
```

- global components

```tsx
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'chemical-components-diff-poc';
import './index.scss';

export default () => (
  <div>
    <h4>可点击查看细节交互</h4>
    <button className="c-btn c-btn--primary">
      <SearchOutlined />
      <span>Primary</span>
    </button>
  </div>
);
```
