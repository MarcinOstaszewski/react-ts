import { Provider } from "react-redux";
import { store } from '../redux';
import RepositoriesList from './RepositoriesList';

const Main = () => {
    return <Provider store={store}>
        <h1>Search for a Package</h1>
        <RepositoriesList />
    </Provider>
}

export default Main;