import React, { Component } from "react";

class TeamMember extends Component {

    render() {

        return (
            <div className="col-md-4 col-sm-6">
                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="card-header" style={{ height: '300px' }}>
                        <img style={{ width: '100%', height: '100%' }} src={this.props.info.img} alt={`image of ${this.props.info.name}`} />
                    </div>
                    <div className="card-body">
                        <h3>{this.props.info.name}</h3>
                        <h6>{this.props.info.role}</h6>
                        <div>{`Phone: ${this.props.info.phone}`}</div>
                        <div>{`Email: ${this.props.info.email}`}</div>
                        <div>{`Website: ${this.props.info.website}`}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamMember;