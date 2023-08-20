import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
           // const index = data.findIndex(elem => elem.id === id)
            //const arr = data.slice(0);// мой вариант рабочий
           // arr.splice(index,1);// мой вариант рабочий
            //const before = data.slice(0,index);// Вариант из урока длинный 
            //const after = data.slice(index+1);//
            //const newArr = [...before,...after]//
            const newArr = data.filter(item => item.id !== id)

            return {
                data: newArr                  //arr мой вариант рабочий
            } 
        })
    }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    /*
    onToggleIncrease=(id)=>{
        //рабочий вариант но длинный
        /* this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            console.log(old);
            const newItem = {...old,increase:!old.increase};
            const newArr =[...data.slice(0,index),newItem, ...data.slice(index+1)];
            return{
                data:newArr
            } 
        }) 
        //Вариант через map

        this.setState(({data})=> ({
            data:data.map(item => {
                if(item.id === id) {
                    return {...item,increase:!item.increase}//Если условие верно то у совподающего значение меняется заданный параметр  и возразащается новый объект 
                }
                return item;
            })
        }))

    }

    onToggleRise =(id)=>{
        this.setState(({data})=> ({
            data:data.map(item => {
                if(item.id === id) {
                    return {...item,rise:!item.rise}//Если условие верно то у совподающего значение меняется заданный параметр  и возразащается новый объект 
                }
                return item;
            })
        }))

    }
    */
    //Метод объеденяющий предыдущие два в один продвинутый вариант 
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    } 
    // Создание фильтра
    searchEmp = (items,term)=> {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1// Вернет те данные в котрых найдено совподение строки терн с изначальным значением 

        })

    }

    onUpdateSearch =(term)=>{
        this.setState ({term:term});
    }

    render() {
        const {data,term} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data,term);
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                onDelbvcfdseqawrtgete={this.deleteItem}
                    //onToggleIncrease={this.onToggleIncrease}
                    //onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App; 