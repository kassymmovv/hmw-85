import React, {Component} from 'react';
import {connect} from 'react-redux';

import Card from "reactstrap/es/Card";
import {getTracks, postTrackHis} from "../store/action";

class MainPage extends Component {
    componentDidMount() {
        this.props.getTracks();
        if (this.props.user === null){
            this.props.history.push('/login')
        }
    }

    render() {

        return (
            <>
                {this.props.tracks.map(k => (
                    <Card key={k._id}>

                        <span>название:{k.title}</span>
                        <span>продолжительность:{k.duration}</span>
                        <button onClick={() => this.props.postTrackHis({track:k._id})}>Слушать</button>
                    </Card>
                ))}

            </>
        );
    }
}
const mapStateToProps = state => ({
    tracks:state.tracks.tracks,
    loading: state.loading,
    error:state.error,
    user:state.users.user

});
const mapDispatchToProps = dispatch => ({
   getTracks:() => dispatch(getTracks()),
   postTrackHis:id => dispatch(postTrackHis(id))
});

export default connect(mapStateToProps,mapDispatchToProps) (MainPage);