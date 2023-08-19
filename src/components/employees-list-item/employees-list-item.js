import {Component} from 'react';
import './employees-list-item.css';




class EmployeesListItem extends Component{

      
   constructor (props){
      super(props)
      this.state = {
         increase: false,
         star:false
      }
   }

   /* onIncrease = () =>{
      this.setState(({increase})=>({
         increase:! increase
      }))
   } */
   onIncrease = () =>{
      console.log('vnjvnfj')
      this.setState(state=>({
         increase:!state.increase
      
      }))
      console.log(this.state.increase)
}

onStar = () =>{
   this.setState(state=>({
      star:!state.star
   
   }))
   console.log(this.state.increase)
}


   render(){
      
      const {name,salary,onDelete} = this.props;
      const{increase} = this.state;
      const{star} = this.state;
      let classNames = 'list-group-item d-flex justify-content-between';
   if(increase){
      classNames += ' increase'
   }

   if(star){
      classNames += ' like'
   }
   

   return (
      <li className= {classNames} >
         <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
         <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
         <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
               className="btn-cookie btn-sm " onClick={this.onIncrease}>
               <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                     className="btn-trash btn-sm "
                     onClick={onDelete}
                     >
               <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
         </div>
      </li>
      );
   }

}

export default EmployeesListItem;