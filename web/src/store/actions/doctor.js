import { DOCTOR } from '../constants'

const doctor = {
  send   : {
    fetch      : payload => ({
      type    : DOCTOR.SEND.FETCH,
      payload,
    }),
    create     : payload => ({
      type    : DOCTOR.SEND.CREATE,
      payload,
    }),
    modify     : payload => ({
      type    : DOCTOR.SEND.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : DOCTOR.SEND.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : DOCTOR.SEND.DEACTIVATE,
      payload,
    }),
  },
  save   : {
    replace    : payload => ({
      type    : DOCTOR.SAVE.REPLACE,
      payload,
    }),
    addTop     : payload => ({
      type    : DOCTOR.SAVE.ADDTOP,
      payload,
    }),
    addBottom  : payload => ({
      type    : DOCTOR.SAVE.ADDBOTTOM,
      payload,
    }),
    modify     : payload => ({
      type    : DOCTOR.SAVE.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : DOCTOR.SAVE.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : DOCTOR.SAVE.DEACTIVATE,
      payload,
    }),
    remove     : payload => ({
      type    : DOCTOR.SAVE.REMOVE,
      payload,
    }),
  },
  status : {
    request : payload => ({
      type    : DOCTOR.STATUS.REQUEST,
      payload,
    }),
    success : payload => ({
      type    : DOCTOR.STATUS.SUCCESS,
      payload,
    }),
    failed  : payload => ({
      type    : DOCTOR.STATUS.FAILED,
      payload,
    }),
  },
}

export default doctor
