import { USER } from '../constants'

const user = {
  send   : {
    fetch      : payload => ({
      type    : USER.SEND.FETCH,
      payload,
    }),
    create     : payload => ({
      type    : USER.SEND.CREATE,
      payload,
    }),
    modify     : payload => ({
      type    : USER.SEND.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : USER.SEND.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : USER.SEND.DEACTIVATE,
      payload,
    }),
  },
  save   : {
    replace    : payload => ({
      type    : USER.SAVE.REPLACE,
      payload,
    }),
    addTop     : payload => ({
      type    : USER.SAVE.ADDTOP,
      payload,
    }),
    addBottom  : payload => ({
      type    : USER.SAVE.ADDBOTTOM,
      payload,
    }),
    modify     : payload => ({
      type    : USER.SAVE.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : USER.SAVE.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : USER.SAVE.DEACTIVATE,
      payload,
    }),
    remove     : payload => ({
      type    : USER.SAVE.REMOVE,
      payload,
    }),
  },
  status : {
    request : payload => ({
      type    : USER.STATUS.REQUEST,
      payload,
    }),
    success : payload => ({
      type    : USER.STATUS.SUCCESS,
      payload,
    }),
    failed  : payload => ({
      type    : USER.STATUS.FAILED,
      payload,
    }),
  },
}

export default user
