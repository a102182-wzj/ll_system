import {
  Message
} from 'element-ui'
export default {
  doMessage(res, text) {
    switch (res) {
      case 'suc':
        Message({
          message: text,
          type: 'success'
        });
        break;
      case 'fail':
        Message.error(text);
        break;
      case 'normal':
        Message(text)
    }

  }
}