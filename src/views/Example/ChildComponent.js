import React from 'react';

// class ChildComponent extends React.Component {
//     // key: value
//     state = {
//         firstName: '',
//         lastName: '',
//     };

//     render() {
//         let { arrJobs } = this.props;
//         return (
//             <div className="job-list">
//                 {arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
// }

const ChildComponent = (props) => {
    let { arrJobs } = props;

    return (
        <>
            <div className="job-lists">
                {arrJobs.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ChildComponent;
