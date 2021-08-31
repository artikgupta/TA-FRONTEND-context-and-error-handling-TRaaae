import React, { Component } from 'react'


const UpdatedComponent = OriginalComponent => {
     class WithSearch extends Component {
         constructor(props){
             super(props)
              this.state = {
              searchTerm: ""
              };
         }
  
  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };


    render() {
        return <OriginalComponent searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
            
        
    }
}
   return WithSearch
}

export default UpdatedComponent