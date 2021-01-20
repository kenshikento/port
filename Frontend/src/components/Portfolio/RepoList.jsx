import React from 'react';
import './RepoList.scss';

const RepoList = (props) => {
    return (
        <div className={`repo ${props.title} ${props.hidden ? '' : 'hidden'}`}>
            <a href={props.link}><p>{props.name}</p></a>
        </div>
    )
}

export default RepoList;