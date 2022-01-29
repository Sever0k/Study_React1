import EmployersListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployersList = ({ data }) => {

    const elements = data.map(item => {
        return (
            <EmployersListItem name={item.name} salary={item.salary}  increase={item.increase} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;