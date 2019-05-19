import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
//React.Fragment se puede obviar y dejar solo los <></>
class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <div onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</div>
                <Link to="/" className="ui button primary">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure wants to delete this stream?'
        } else {
            return `Are you sure wants to delete ${this.props.stream.title}?`
        }
    }
    
    render() {
        return (
            <Modal
                title = "Delete Stream"
                content = {this.renderContent()}
                actions = {this.renderActions()}
                onDismiss = {() => history.push('/')}
            />
        );
    }
}



const mapStateToProps = (state, ownProps) => { //own props son las props de StreamDelete
    return { stream : state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);