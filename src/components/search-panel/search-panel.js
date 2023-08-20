import { Component } from 'react';
import './search-panel.css';
class SearchPanel extends Component{
   constructor(props){
      super(props);
      this.state ={
         term:''
      }
   }

   onUpdateSearchTO =(e)=>{
      const term = e.target.value;
      this.setState({term:term});
      this.props.onUpdateSearch(term) //Пробрасываем знвчеие полученное в этом элесенте на верх поднятие елемента
   }

render(){
   return(
      <input 
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={this.state.term}
      onChange={this.onUpdateSearchTO}
      />
   );
}
}

export default SearchPanel;