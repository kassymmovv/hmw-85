import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAlbums} from "../store/action";
import Card from "reactstrap/es/Card";
import {NavLink} from "react-router-dom";

class Albums extends Component {
    componentDidMount() {
        this.props.getAlbums(this.props.match.params.id)
    }

    render() {

        return (

            <div>

                {this.props.albums.map(k => (
                    <Card key={k._id}>
                        <img src={'http://localhost:8000/uploads/' + k.image} alt="" style={{height: 100, width: 100}}/>
                        <span>{k.name}</span>
                        <span>{k.date}</span>
                        <NavLink to={`/tracks/${k._id}`}>tracks</NavLink>
                    </Card>
                ))}
            </div>
        );

    }
}
const mapStateToProps = state => ({
    authors: state.authors,
    albums: state.albums,
});
const mapDispatchToProps = dispatch => ({
    getAlbums:id => dispatch(getAlbums(id))
});

export default connect(mapStateToProps,mapDispatchToProps) (Albums);