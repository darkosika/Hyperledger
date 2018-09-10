import React, {Component} from 'react';
import {connect} from 'react-redux';
class GetItems extends Component{
    render(){
        return(
            <div>
            <table className="table table-striped">
        <thead  key="thead">
        <tr>
          <th>Balance</th>
          <th>Products</th>
        </tr>
        </thead>
        
        <tbody key="tbody">
        <tr key="tr">
         { console.log(this.props.posts[0]) }
        {/*this.state.posts[0] && <td>{this.state.posts[0].balance}</td>*/}
        </tr>
        </tbody>
        </table>
            </div>
        );
    }
   
}
function mapToStateProps({posts}){
  return{ posts }
}
export default connect(mapToStateProps) (GetItems);