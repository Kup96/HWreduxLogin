import React from 'react';
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { authLogin } from '../../Actions/index';



const UserForm = (props) => {
    const {authLoginAction} = props;
    const initialUserValues = {
        emailUser: '',
        passwordUser: '',
    };
    const submitHandler = (values, formikBag) => {
        authLoginAction(values);
        formikBag.resetForm();
    };
    return(
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                <Form>
                    <Field name="emailUser" />
                    <Field name="passwordUser" />
                    <button type='submit'>Submit</button>
                </Form>
                );
        }}
        </Formik> 
    );
}
const mapStateToProps = state => state.reducerStates;

 const mapDispatchToProps = dispatch => {
     return{
        authLoginAction: data => {
             dispatch(authLogin(data));
         }
     };
 };

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);