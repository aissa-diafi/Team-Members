import React, { Component } from "react";
import TeamMember from "./TeamMember";
import memberInfo from "./memberInfo";

class Team extends Component {

    constructor() {
        super()
        this.state = { members: [], counter: 0 }
        this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent() {
        if (this.state.counter < memberInfo.length) {

            this.state.members.push(memberInfo[this.state.counter])
            this.newMembers = this.state.members.map(member => <TeamMember key={member.id} info={member} />)

            this.setState((prevState) => {
                return { counter: prevState.counter + 1 }
            })
        }
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary"
                    style={{ width: '100%', margin: '10px 0' }}
                    onClick={this.clickEvent}>
                    click me!
                </button>
                <div className="row">
                    {this.newMembers}
                </div>
            </div>

        );
    }

}

export default Team;