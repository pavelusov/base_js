import React, {Component} from 'react';
import './App.css';
import Person from './Person';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: "Pavel", age: 29},
            {id: 2, name: "Igor", age: 30},
            {id: 3, name: "Fedor", age: 50},
        ],
        isShownPersons: false
    };

    deletePersonHandler = (indexPerson) => {
        let persons = [...this.state.persons];
        persons.splice(indexPerson, 1);
        this.setState({persons:persons});
    };
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = this.state.persons[personIndex];
        // const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    render() {
        let style = {
            backgroundColor: "red",
            color: "white"
        };
        let persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <ErrorBoundary key={person.id}>
                        <Person
                            name={person.name}
                            age={person.age}
                            delete={() => this.deletePersonHandler(index)}
                            change={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    </ErrorBoundary>;
                })}
            </div>
        );
        return (
            <div className="App">
                <h1>React App</h1>
                <button
                    style={style}
                >Switch
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
