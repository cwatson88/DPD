import React from 'react';
import chatsvg from "../chaticons.svg"
import packagesvg from "../package.svg"

const Loader = () => {
    return (
        <div className="loader">
            <h2> Get some post! </h2>
            <p><i>pssst... click on a user to get some post...</i></p>
            <br/>
            <img src={packagesvg} className="package__icon" width="120px"/>
            <br/>
            <img src={chatsvg} width="60px" className="chat__icons"/>
        </div>
    );
};

export default Loader;