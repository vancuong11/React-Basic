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
    render() {
        console.log('check props: ', this.props.dataRedux);
        return (
            <>
                <div>Hello world from Homepage with Eric & Hoi Dan IT</div>
                <div>
                    <img src={logo} alt="Logo" style={{ width: '300px', height: '300px', marginTop: '20px' }} />
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

// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));
