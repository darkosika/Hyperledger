import React, {Component} from 'react';
import {connect} from 'react-redux';
class GetItems extends Component{
    renderData(data){
        return(
         <tr key={data.firstName}>
         <td>{data.balance}</td>
          {data.products.map(product=>
         <td key={product.productId}>{product.description} </td>)}
         </tr>
        );
    }
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
        {(this.props.posts.map(this.renderData))}
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