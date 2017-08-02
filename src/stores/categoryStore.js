import { observable, action,computed } from 'mobx';


class categoryStore {
  @observable values = [{
  name: "onion",
  date: new Date(),
  id: 1
}, {
  name: "pepper",
  date: new Date(),
  id: 2
}, {
  name: "broccoli",
  date: new Date(),
  id: 3
}];

  @action setId(id) {
    this.values.id = id;
  }

  @action setName(name) {
    this.values.name = name;
  }

  @action setDate(date) {
    this.values.date = date;
  }

  @action reset() {
    this.values.id = '';
    this.values.name = '';
    this.values.date = '';
  }

  @computed get fullName(){
    return this.values;
  }
}

export default new categoryStore();
