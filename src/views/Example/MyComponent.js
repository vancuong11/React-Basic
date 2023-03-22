import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'Developers', salary: '500' },
            { id: 'job2', title: 'Testers', salary: '400' },
            { id: 'job3', title: 'Project managers', salary: '1000' },
        ],
    };

    addNewJob = (job) => {
        console.log('check job from parent: ', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        );
    }
}

export default MyComponent;
