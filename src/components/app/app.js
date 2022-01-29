import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Petya Petechkin', salary: 1800, increase: true, id: 1, like: true },
                { name: 'Vasya Pupkin', salary: 800, increase: false, id: 2, like: false },
                { name: 'Valera Doska', salary: 3000, increase: false, id: 3, like: false },
                { name: 'Andrej Android', salary: 1000, increase: true, id: 4, like: true },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployersAddForm />
            </div>
        );
    }
}

export default App;