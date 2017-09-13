/*
 * Example MobX Store that periodically fetches an API endpoint. Components can react to changes by adding the @observer annotation from mobx-react
 */
import request from 'request-promise';
import { observable, computed } from 'mobx';


const API_ENDPOINT = 'http://127.0.0.1:5000/api';
const POLLING_INTERVAL = 3000;

class ToDoStore {
	@observable todos = [];

    constructor() {
        setInterval(this.fetchTodos, POLLING_INTERVAL);
    }

    @computed get numberOfOpenTodos() {
        return 42
    }

    fetchTodos() {
        const that = this;
        console.log('fetching todos...');
        request({'uri': API_ENDPOINT + '/todos', 'json': true})
            .then(function (jsonData) {
                that.todos = jsonData;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}


const todoStore = new ToDoStore();
export default todoStore;
