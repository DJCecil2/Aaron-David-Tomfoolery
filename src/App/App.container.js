import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRandomBgColor } from './App.actions';
import './App.style.less';

class App extends Component {
    render() {
        const { backgroundColor } = this.props;

        return (
            <div className="App" style={{ backgroundColor }}>
                <h1>This app is gonna be hella so cool DAWG, you have no IDEA.</h1>
                <button onClick={() => this.props.setRandomBgColor()}>
                    Click Me?
                </button>
            </div>
        );
    }
}

App.propTypes = {
    backgroundColor: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    backgroundColor: state.app.backgroundColor
});

export default connect(mapStateToProps, {
    setRandomBgColor
})(App);
