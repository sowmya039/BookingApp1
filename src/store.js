import { createStore, applyMiddleware } from 'redux';
import localstorageMiddleware from './localStorageMiddleware';
import reducer from './reducer';
export default function configureStore() {
  const initialState = [
    {
      name: 'Room 1',
      selected: true,
      adults: 1,
      children: 0
    },
    {
      name: 'Room 2',
      selected: false,
      adults: 1,
      children: 0
    },
    {
      name: 'Room 3',
      selected: false,
      adults: 1,
      children: 0
    },
    {
      name: 'Room 4',
      selected: false,
      adults: 1,
      children: 0
    }
  ];
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(localstorageMiddleware)
  );

  return store;
}
