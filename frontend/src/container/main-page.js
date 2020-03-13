import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuthors} from "../store/action";
import {NavLink} from "react-router-dom";

import Card from "reactstrap/es/Card";

class MainPage extends Component {
    componentDidMount() {
        this.props.getAuthors()
    }

    render() {


        return (
            <>
                {this.props.authors.map(k => (
                    <Card key={k._id}>
                        <img src={'http://localhost:8000/uploads/'+k.image} alt="" style={{height:100,width:100}}/>
                        <span>{k.name}</span>
                        <NavLink to={`/albums/${k._id}`}>albums</NavLink>
                    </Card>
                ))}
            </>
        );
    }
}
const mapStateToProps = state => ({
   authors: state.authors
});
const mapDispatchToProps = dispatch => ({
   getAuthors:() => dispatch(getAuthors())
});

export default connect(mapStateToProps,mapDispatchToProps) (MainPage);