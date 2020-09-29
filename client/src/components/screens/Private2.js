import React, { useState, useEffect } from 'react';
import axios from "axios";

const params = {
    access_key: process.env.REACT_APP_ACCESS_KEY,
    symbols: process.env.REACT_APP_SYMBOLS,
    exchange: process.env.REACT_APP_EXCHANGE
}

const Private2 = () => {
    const [courses, setCourses] = useState('');

    useEffect(() => {
        axios.get('http://api.marketstack.com/v1/eod/2020-01-04', {params})
            .then(res => {
                console.log(res.data)
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (

        <>
            <blockquote>
                Date: 2020-01-04 <span className="new badge red">Oups, It's a holiday</span>
            </blockquote>
            <div className="home">

                {
                    courses &&
                    courses.data.map((course, index) =>
                        <div className="card home-card" key={index}>
                            <h5 style={{textAlign:'center'}}>Course {index}</h5>
                            <div className="card-content">
                                <h6><strong>Close:</strong> {course.close}</h6>
                                <p><strong>Exchange:</strong> {course.exchange}</p>
                                <p><strong>Symbole:</strong> {course.symbol}</p>
                                <p><strong>Date:</strong> {course.date}</p>
                            </div>
                        </div>
                    )

                }
            </div>
        </>
    )
}

export default Private2;