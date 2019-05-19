import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = (formValues) => { //no neceista preventdefault por que de eso se encarga redux form
        formValues.user_id = 1;
        this.props.createStream(formValues);
    }
    render() {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);