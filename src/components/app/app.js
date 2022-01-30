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
                { name: 'Andrej Android', salary: 1000, increase: false, id: 4, like: false },
            ]
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // onToggleIncrease = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase }
    //             }
    //             return item;
    //         })
    //     }))
    //     // this.setState(({data})=>{
    //     //     const index = data.findIndex(elem=>elem.id ===id);

    //     //     const old = data[index];
    //     //     const newItem ={...old, increase: !old.increase};
    //     //     const newArr = [...data.slice(0,index), newItem,...data.slice(index+1)];

    //     //     return{
    //     //         data: newArr
    //     //     }
    //     // })
    // }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className='app'>
                <AppInfo employees={employees}
                    increased={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;