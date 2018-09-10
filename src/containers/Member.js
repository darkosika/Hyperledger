import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {selectAccount} from '../actions/index';
class Member extends Component{

  constructor(props){
    super(props);
    this.state = { posts: [] } ;
  }

    componentWillReceiveProps(nextProps){
        console.log("Next Posts" + JSON.stringify(nextProps.posts));

        if(this.props.posts != nextProps.posts)
        {
            this.setState({
                posts : nextProps.posts
            })
        }

      }

    renderField(field){
        const {meta:{touched,error} }=field;
        const className=`form-group ${touched && error ? 'has-danger': ''}`
        return(
            <div className={className}>
            <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error: ''} 
                </div>
            </div>
        );
    }
    onSubmit(values){
        this.props.selectAccount(values);
    }
render(){
    const {handleSubmit}=this.props;

        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                   <div>
                       <Field
                       name="showAccount"
                       component={this.renderField}
                       label="Select Member"
                       />
                       <button type="Submit" className="btn btn-primary">Get Member</button>
                   </div>
                </form>
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
                {this.state.posts[0] && <td>{this.state.posts[0].balance}</td>}
              
            
                  {/* <th>{this.props.post}</th> */}
                 
                </tr>
              </tbody>
            </table>
                    </div>
            </div>
        );

}
}
function validate(values){
    const errors={};
    if(!values.showAccount){
        errors.showAccount="Enter Email!"
    }
    return errors;
}
function mapStateToProps(state){
    return {posts:state.posts};
}
export default reduxForm({
    validate,
    form:'getMember'
})(connect((mapStateToProps),{selectAccount})(Member));