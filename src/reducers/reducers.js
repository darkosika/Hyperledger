import {SELECT_ACCOUNT} from '../actions/index';
export default(state={},action)=>{
    switch(action.type){
            case SELECT_ACCOUNT:
        return [action.payload.data,...state]
    default:
    return state;
    }
}