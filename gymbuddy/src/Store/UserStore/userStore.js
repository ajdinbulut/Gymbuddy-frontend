import jwt from 'jwt-decode'
import { action, makeObservable, observable } from 'mobx';
const getToken = localStorage.getItem('token')
const model = getToken !== null ? jwt(getToken) : []
class UserStoreImpl{
    isAuth  = getToken !== null ? true : false;
    user = model;
    constructor(){
        makeObservable(this,{
            isAuth:observable,
            user:observable,
            addUser:action
        });
    }
    addUser(addedUser){
        this.user.push(addedUser)
        this.isAuth = true;
    }
}
export const UserStore = new UserStoreImpl();