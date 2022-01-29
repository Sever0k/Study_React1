import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        { name: 'Vasya Pupkin', salary: 800, increase: false },
        { name: 'Valera Doska', salary: 3000, increase: false },
        { name: 'Andrej Android', salary: 15000, increase: true },
    ];

    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={data} />
            <EmployersAddForm />
        </div>
    );
}

export default App;