import { Command } from '../constant';
import { Dispatch } from '@/redux/types';
import { getActionProxy } from '@/redux/action-util';
import Action from './action';

import { Fetch, removeStorageAll, history } from '@/kit/index'
import {asyncSend} from '@/kit/ipc'
import { message } from 'antd';

// eslint-disable-next-line
export default (dispatch: Dispatch) => {
  const actions = {
    action: getActionProxy(Action)(dispatch),

    /**
     * 初始化数据
     */
    async init() {
      let { result } = await Fetch('/api/ping', {
        noCache: true
      })
      if (result.code === 1) {
        let { data: { mail, nick, _id } } = result
        dispatch({
          type: Command.init,
          payload: {
            main: {
              mail, nick, _id
            }
          },
        })
        actions.action.getUserInfo()
        // 改变窗口大小
        asyncSend('changeWindowsSize', '1000,670')
      } else {
        message.error('请重新登入')
        removeStorageAll()
        history.push('/login')
      }

    },

    /**
     * 重置
     */
    async clean() {
      dispatch({ type: Command.clean });
    },
  };

  return { actions };
};
