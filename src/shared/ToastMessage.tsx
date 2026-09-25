import { toast } from "sonner";
import * as CONFIG_CONST from "../constants/config.constants"

const ToastMessage = (message: string) => {
  toast.dismiss(CONFIG_CONST.TOAST_ID);

  toast(message, {
    id: CONFIG_CONST.TOAST_ID,
    duration: CONFIG_CONST.TOAST_DURATION,
  });
};

export default ToastMessage;