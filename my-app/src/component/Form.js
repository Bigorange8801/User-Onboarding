import React from 'react';
import { withFormik,Form,Field } from 'formik';


function LogForm() {
    return (
        <Form>
            <Field type="text" name="username" placeholder="username"/>
            <Field type="text" email="email" placeholder="email"/>
            <Field type="text" password="password" placeholder="password"/>
            <button>Submit</button>
        </Form>
    );
}

const FormikForm = withFormik({
    mapPropsToValues({username,password,email}) {
        return {
            username: username || "",
            password: password || "",
            email: email || ""
        };
    },
    handleSubmit(values) {
        console.log(values);
    }
})
// adding something is not working
export default LogForm;