import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearched = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                type="text"
                className='form-control search-input'
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearched} />
        );
    }
}


export default SearchPanel;