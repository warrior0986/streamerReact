import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading</div>
        }
        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                    initialValues={_.pick(this.props.stream, 'title', 'description')} //pasar solo los que necesito actualizar
                    onSubmit={this.onSubmit}>{this.props.stream.title}
                </StreamForm>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => { //own props son las props de StreamEdit
    return { stream : state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);