import React from 'react';

const Person = ({name, age}) => {
    return (
        <div>
            <h2>이름: {name}, 나이: {age}</h2>
        </div>
    );
};

export default Person;