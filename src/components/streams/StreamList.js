import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return(
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if(this.props.signedIn) {
            return(
                <div style={{textAlign : 'right'}}>
                    <Link className="ui button primary" to="/streams/new">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => { //toma lo del redux store y lo pasa como props a los componentes
    return { 
        streams: Object.values(state.streams), //extraigo cada stream sin el id puesto en el streamReducer con la _.mapKeys
        currentUserId: state.auth.userId,
        signedIn: state.auth.isSignedIn
    }; 
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);