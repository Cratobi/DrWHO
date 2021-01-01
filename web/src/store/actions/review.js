import { REVIEW } from '../constants'

const review = {
  send   : {
    fetch      : payload => ({
      type    : REVIEW.SEND.FETCH,
      payload,
    }),
    create     : payload => ({
      type    : REVIEW.SEND.CREATE,
      payload,
    }),
    modify     : payload => ({
      type    : REVIEW.SEND.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : REVIEW.SEND.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : REVIEW.SEND.DEACTIVATE,
      payload,
    }),
  },
  save   : {
    replace    : payload => ({
      type    : REVIEW.SAVE.REPLACE,
      payload,
    }),
    addTop     : payload => ({
      type    : REVIEW.SAVE.ADDTOP,
      payload,
    }),
    addBottom  : payload => ({
      type    : REVIEW.SAVE.ADDBOTTOM,
      payload,
    }),
    modify     : payload => ({
      type    : REVIEW.SAVE.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : REVIEW.SAVE.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : REVIEW.SAVE.DEACTIVATE,
      payload,
    }),
    remove     : payload => ({
      type    : REVIEW.SAVE.REMOVE,
      payload,
    }),
  },
  status : {
    request : payload => ({
      type    : REVIEW.STATUS.REQUEST,
      payload,
    }),
    success : payload => ({
      type    : REVIEW.STATUS.SUCCESS,
      payload,
    }),
    failed  : payload => ({
      type    : REVIEW.STATUS.FAILED,
      payload,
    }),
  },
}

export default review
