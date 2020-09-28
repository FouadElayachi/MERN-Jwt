import React, { useState, useEffect, Fragment, useCallback } from 'react';
import axios from "axios";

const params = {
    access_key: process.env.REACT_APP_ACCESS_KEY,
    symbols: process.env.REACT_APP_SYMBOLS,
}

const Private2 = () => {
    const [courses, setCourses] = useState('');
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://api.marketstack.com/v1/intraday/2020-01-24', { params })
            .then(res => {
                console.log(res.data)
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (

        <div className="home">
            {
                courses &&
                courses.data.map((course, index) =>
                    <div className="card home-card" key={index}>
                        <h5>Course</h5>
                        <div className="card-content">
                            <h6>{course.volume}</h6>
                            <p>{course.open}</p>
                            <p>{course.date}</p>
                        </div>
                    </div>
                )

            }
        </div>
    )
}

export default Private2;