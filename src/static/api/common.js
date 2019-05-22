import { post } from '../../utils/http';
class CommonApi{
   userLogin = preload => post('web/user/login', preload)
}
export default new CommonApi()