import React, {Component} from 'react';
import { getTracks} from "../store/action";
import {connect} from 'react-redux';

import Card from "reactstrap/es/Card";
class Tracks extends Component {
    componentDidMount() {
        this.props.getTracks(this.props.match.params.id)
    }

    render() {
        return (
            <>
                {this.props.tracks.map(k => (
                    <Card key={k._id}>
                        <span>{k.title}</span>
                        <span>{k.number}</span>
                        <span>{k.duration}</span>
                    </Card>
                ))}
            </>
        );
    }
}

const mapStateToProps = state => ({
    authors: state.authors,
    albums: state.albums,
    tracks: state.tracks
});
const mapDispatchToProps = dispatch => ({
    getTracks:id => dispatch(getTracks(id))
});


export default connect(mapStateToProps,mapDispatchToProps) (Tracks);