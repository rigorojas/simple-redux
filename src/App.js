import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

const App = (props) => {

    useEffect(
        () => {
            setTimeout(
                () => {
                    props.onApiRequest();
                },
                1500
            );
        },
        []
    );

    const onUpdateUser = (event) => {
        props.onUpdateUser(event.target.value);
    }

    return (
        <div className="App">
                <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
                <p>
                    Edit <code>src/App.js</code>
                    and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
            </header>
            <div>Update User</div>
            <input
                onChange={onUpdateUser.bind(this)}
                style={{marginBottom: 200}}
            />
        <div>{props.user}</div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    console.table(props);
    return {
        products: state.products,
        user: state.user,
    }
}

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest,
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    console.log(propsFromState, propsFromDispatch, ownProps);
    return {};
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(App);












// const mapActionsToProps = (dispatch, props) => {
//     return bindActionCreators(
//         {
//             onUpdateUser: updateUser
//         },
//         dispatch
//     );
// };
//
// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//     console.log(propsFromState, propsFromDispatch, ownProps);
//     return {};
// };
//
// export default connect(
//     mapStateToProps,
//     mapActionsToProps,
//     mergeProps
// )(App);
