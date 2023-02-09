import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css'
import { store, StoreContext } from './app/stores/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StoreContext.Provider value={store}>
  <RouterProvider router={router} />
  </StoreContext.Provider>,
  document.getElementById('root')
);

//const root = ReactDOM.createRoot(
  //document.getElementById('root') as HTMLElement 
//);
//root.render(
 // <React.StrictMode>
  //  <App />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
