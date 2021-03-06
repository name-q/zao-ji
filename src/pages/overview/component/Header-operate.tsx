

import React from 'react';

import './Header-operate.less'
import SearchInput from '@/compon/search-input';
import { CloseCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';

import { asyncSend } from '@/kit/ipc'
class HeaderOperate extends React.Component<any, any> {

  render() {
    return (
      <div className='headerOperate'>

        <div className='leftArea'>
          <div className='closeMinusButton'>
            <CloseCircleTwoTone
              twoToneColor={['#fc605c', '#f3e1e1']}
            />
            <MinusCircleTwoTone
              twoToneColor={['#fdbc40', '#f8f393']}
            />
          </div>
          <div className='closeMinusButtonX'>
            <div className='close'
              onClick={() => asyncSend('exit')}
            />
            <div className='minus'
              onClick={() => asyncSend('minimize')}
            />
          </div>
        </div>

        <div className='rightArea'>
          <SearchInput />
        </div>

      </div>
    );
  }

}

export default HeaderOperate