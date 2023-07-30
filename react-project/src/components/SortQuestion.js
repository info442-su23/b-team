import React from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';
import { Link } from 'react-router-dom';
import SortAnswerButton from './SortAnswerButton';

export default function SortQuestion() {
    return (
        <body>
            <NavBar />
            <a href="#" className="back-arrow"><BackButton /></a>
            <h1>Question 1/5</h1>
            <section className='sortingQuestion'>
                <h2>What percentage of trash is food?</h2>
                <img src="img/trash_bins.webp" className='sortingPic' />
                <SortAnswerButton />
            </section>
        </body>
    )
};