import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term :''};
        
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
     
     
    
    onInputChange(event) {
        this.setstate({term : event.target.value});
    }
        
    onFormSubmit(event) {
        event.preventDefault();
        this.setstate({term : ''});
    }
        
    
    render () {
        return (
            <form onSubmit = {this.onFormSubmit} className = 'input-group'>
             <input
              placeholder = 'Input city'
              className = 'form-control'
              value = {this.state.term}
              onChange = {this.onInputChange}
              />
              
             <span className='input-group-btn'>
              <button
               type='submit'
               className = 'btn btn-primary'
              >Submit</button>
             </span>
             
            </form>
            
            
            
            
        ); 
    }
}

export default SearchBar;