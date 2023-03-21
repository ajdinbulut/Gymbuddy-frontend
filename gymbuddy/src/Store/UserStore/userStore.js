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
            addUser:action,
            Logout:action
        });
    }
    addUser(addedUser){
        console.log(addedUser)
        this.user.push(addedUser)
        this.isAuth = true;
    }
    Logout(){
        localStorage.removeItem('token');
        this.isAuth = false;
        this.user.pop();
    }
}
export const UserStore = new UserStoreImpl();