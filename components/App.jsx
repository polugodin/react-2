import React, { Component } from 'react';
import axios from 'axios';

import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            count: undefined
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            count: event.target.value
        })
    }

    onClick() {
        axios.get('/list', {
            params: {
                count: this.state.count
            }
        })
        .then(res => this.setState({ list: res.data }));        
    }

    componentDidMount() {
        axios.get('/list').then(res => this.setState({ list: res.data }));
    }

    render() {
        const { list } = this.state;
        const {onChange, onClick} = this;

        return (
            <div>
                count <input type="text" onChange={onChange} />
                <button onClick={onClick}>get</button>
                <List list={list}  />
            </div>
        );
    }
}

export default App;
