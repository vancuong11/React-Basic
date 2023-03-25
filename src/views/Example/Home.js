import React from 'react';
import { withRouter } from 'react-router-dom';
import Color from '../HOC/color';

class Home extends React.Component {
    // life cycle React
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000);
    // }
    render() {
        console.log('check props: ', this.props);
        return <div>Hello world from Homepage with Eric & Hoi Dan IT</div>;
    }
}

// export default withRouter(Home);
export default Color(Home);
