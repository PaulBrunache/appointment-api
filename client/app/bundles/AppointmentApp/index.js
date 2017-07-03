import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app'
import configureStore from './store'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


const AppointmentApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <LocaleProvider locale={enUS}>
      <App/>
    </LocaleProvider>
  </Provider>
);

export default AppointmentApp;