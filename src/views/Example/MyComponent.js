import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('>> run didupdate: ', 'prev state: ', prevState, ' current state: ', this.state);
    }

    componentDidMount() {
        console.log('>>> run component did mount');
    }

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

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJob,
        });
    };

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
            </>
        );
    }
}

export default MyComponent;
