import { Provider } from 'react-redux';
import AppContainer from './appContainer'
import configureStore from './store'


const AppointmentApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <HelloWorldContainer />
    <AppContainer/>
  </Provider>
);

export default AppointmentApp;