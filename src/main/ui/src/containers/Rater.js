import React from 'react';
import {useState} from 'react';
import './Rater.css';
import RaterList from '../components/RaterList';
import Error from '../containers/Error';

const Rater = ({match, handleChange}) => {

    if(!match) {
        return (
            <Error/>
        )
    }

    return(
        <>
            <h2>Rate Teammates vs Gorgie FC</h2>
            <RaterList match={match} handleChange={handleChange}/>
        </>
    )
}

export default Rater;