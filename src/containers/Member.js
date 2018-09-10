import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {selectAccount} from '../actions/index';
class Member extends Component{

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
export default reduxForm({
    validate,
    form:'getMember'
})(connect(null,{selectAccount})(Member));