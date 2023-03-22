import React from 'react';

class ChildComponent extends React.Component {
    // key: value
    state = {
        showJobs: false,
    };

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };

    handOnClickDelete = (job) => {
        this.props.deleteJob(job);
    };
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                ) : (
                    <>
                        <div className="job-list">
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}$&nbsp;
                                        <span
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => this.handOnClickDelete(item)}
                                        >
                                            x
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default ChildComponent;
