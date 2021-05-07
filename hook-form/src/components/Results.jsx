import React from 'react';


const Results = (props) => {
    const{state} = props;
    return (
        <div>
            <h1>This is my results page</h1>
            <h1>First Name: {state.firstName}</h1>
            <h1>Lirst Name: {state.lastName}</h1>
            <h1>Email: {state.email}</h1>
            <h1>Password: password</h1>
            <h1>Confirm Password: password</h1>
        </div>
    );
};



export default Results;