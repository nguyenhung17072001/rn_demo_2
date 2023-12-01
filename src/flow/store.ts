import { observable, action } from 'mobx';

const counterStore = observable({
  count: 0,
  increment: action(function () {
    counterStore.count++;
  }),
  decrement: action(function () {
    counterStore.count--;
  }),
});

export default counterStore;

