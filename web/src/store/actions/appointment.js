import { APPOINTMENT } from '../constants'

const appointment = {
  send   : {
    fetch      : payload => ({
      type    : APPOINTMENT.SEND.FETCH,
      payload,
    }),
    create     : payload => ({
      type    : APPOINTMENT.SEND.CREATE,
      payload,
    }),
    modify     : payload => ({
      type    : APPOINTMENT.SEND.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : APPOINTMENT.SEND.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : APPOINTMENT.SEND.DEACTIVATE,
      payload,
    }),
    remove     : payload => ({
      type    : APPOINTMENT.SEND.REMOVE,
      payload,
    }),
  },
  save   : {
    replace    : payload => ({
      type    : APPOINTMENT.SAVE.REPLACE,
      payload,
    }),
    addTop     : payload => ({
      type    : APPOINTMENT.SAVE.ADDTOP,
      payload,
    }),
    addBottom  : payload => ({
      type    : APPOINTMENT.SAVE.ADDBOTTOM,
      payload,
    }),
    modify     : payload => ({
      type    : APPOINTMENT.SAVE.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : APPOINTMENT.SAVE.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : APPOINTMENT.SAVE.DEACTIVATE,
      payload,
    }),
    remove     : payload => ({
      type    : APPOINTMENT.SAVE.REMOVE,
      payload,
    }),
  },
  status : {
    request : payload => ({
      type    : APPOINTMENT.STATUS.REQUEST,
      payload,
    }),
    success : payload => ({
      type    : APPOINTMENT.STATUS.SUCCESS,
      payload,
    }),
    failed  : payload => ({
      type    : APPOINTMENT.STATUS.FAILED,
      payload,
    }),
  },
}

export default appointment
