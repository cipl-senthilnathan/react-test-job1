import { observable, action } from 'mobx';
// import agent from '../agent';

class UserStore {

  @observable currentUser;
  @observable loadingUser;
  @observable updatingUser;
  @observable updatingUserErrors;

  @action pullUser() {
    this.loadingUser = true;
    // return agent.Auth.current()
    //   .then(action(({ user }) => { this.currentUser = user; }))
    //   .finally(action(() => { this.loadingUser = false; }))
    this.loadingUser = true;
    let id=Math.floor(1000 + Math.random() * 9000);
    var user={"user":{"id":id,"email": 'satheeshkumar@gmail.com',"password":'satheesh'}}
    this.currentUser = user;
    this.loadingUser = false;
    return user;
  }

  @action updateUser(newUser) {
    this.updatingUser = true;
    // return agent.Auth.save(newUser)
    //   .then(action(({ user }) => { this.currentUser = user; }))
    //   .finally(action(() => { this.updatingUser = false; }))
  }

  @action forgetUser() {
    this.currentUser = undefined;
  }

}

export default new UserStore();
