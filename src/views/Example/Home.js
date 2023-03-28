import React from 'react';
import { withRouter } from 'react-router-dom';
import Color from '../HOC/color';
import logo from '../../assets/image/73251895_551262542352865_6067258591184683008_n.jpg';

import { connect } from 'react-redux';

class Home extends React.Component {
    // life cycle React
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000);
    // }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    };

    handleCreateUser = () => {
        this.props.addUserRedux();
    };

    render() {
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>Hello world from Homepage with Eric & Hoi Dan IT</div>
                <div>
                    <img src={logo} alt="Logo" style={{ width: '300px', height: '300px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            );
                        })}

                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) =>
            dispatch({
                type: 'DELETE_USER',
                payload: userDelete,
            }),
        addUserRedux: () =>
            dispatch({
                type: 'CREATE_USER',
            }),
    };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
