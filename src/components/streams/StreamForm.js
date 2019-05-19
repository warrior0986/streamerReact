import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    
    renderError ({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header"> {error} </div>
                </div>

            );
        }
    }
    renderInput = ({input, label, meta}) => { //destructure, aca venia el formProps = {'input' : toda la data, 'meta': 'no se uso'} al hacer destructure se toma solo el objeto input de lo que venia (esto es pasado por redux form Field Component)
    //<!-- {...formProps.input} = copia todos los formProps de redux form al elemento inpu-->
        const classNameCustom = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return(

            <div className={classNameCustom}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => { //no neceista preventdefault por que de eso se encarga redux form
        formValues.user_id = 1;
        this.props.onSubmit(formValues);
    }
    render() {
        //onSubmit={this.props.handleSubmit(this.onSubmit())}: al onSubmit handler le pasamos el this.props.handleSubmit (handler de redux form) y como parametro, la funcion que creamos
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> 
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Escriba un titulo'
    }

    if (!formValues.description) {
        errors.description = 'Escriba una descripcion'
    }
    return errors;
};

export default reduxForm({
    form : 'streamForm',
    validate
})(StreamForm);