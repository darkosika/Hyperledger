import axios from 'axios';
export const SELECT_ACCOUNT='select_account';
export function selectAccount(values,callback){
    const request=axios.get(`http://10.0.155.123:3000/api/Member/`+ values.showAccount);
    return{
        type:SELECT_ACCOUNT,
        payload:request
    }
}