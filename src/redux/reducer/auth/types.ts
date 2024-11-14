import { FormValues } from '../../../screens/Register/type';

  export interface AuthState {
    userInfo: FormValues | null;
    poll: Array<string> | []
  }

