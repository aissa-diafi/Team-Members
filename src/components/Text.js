import React from 'react';

function Text() {

    const client = 'Project Manager';

    function style(title) {
        return client === title ? 'red' : 'black'
    }

    return (
        <p><span style={{ color: style('Project Manager') }}>Project Management</span> and <span style={{ color: style('Developer') }}>Programming</span> are for more than a job for me. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    );
}

export default Text;