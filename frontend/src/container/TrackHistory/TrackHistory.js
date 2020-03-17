import React, {Component} from 'react';

import {connect} from 'react-redux';
import Card from "reactstrap/es/Card";
import {getTrackHis} from "../../store/action";

class TrackHistory extends Component {
    componentDidMount() {
        this.props.getTrackHis()
    }

    render() {
        return (
            <div>
                {this.props.trackHistory.map(k => (
                    <Card key={k._id}>

                        <span>Исполнитель:{k.track.album.author.name}</span>
                        <span>Название:{k.track.title}</span>
                        <span>Дата :{k.datetime}</span>
                    </Card>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => ({
   trackHistory: state.tracks.trackHistory,
    user:state.users.user
});
const mapDispatchToProps = dispatch => ({
   getTrackHis: () => dispatch(getTrackHis())
});

export default connect(mapStateToProps,mapDispatchToProps) (TrackHistory);