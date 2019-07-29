import React from 'react'

let yellowBlock = {
    backgroundColor: 'yellow',
    display: 'inline-block',
};

let redBlock = {
    backgroundColor: 'red',
    display: 'inline-block',

};

let greenBlock = {
    backgroundColor: 'green',
    display: 'inline-block',
};

let blueBlock = {
    backgroundColor: 'blue',
    display: 'inline-block',
};

let grayBlock = {
    backgroundColor: 'gray',
    display: 'inline-block',
};

const
    Sites = ({sites}) => {
        return (
            <div align="center">
                <h1>MELI TRENDS</h1>
                <div className="grid" style={{overflow: "hidden"}}>
                    <div className="row">
                        {sites.map((trend) => (

                            <div className="tile">
                                <div className="card current"
                                     style={{backgroundColor: trend.color, backgroundRepeat: "no", backgroundImage: 'url("'+ trend.thumbnail +'")'}}><span
                                    className="typing-container-wrapper"><span
                                    className="typing-container start">
                                        <a className="typing"
                                           href={trend.url}
                                           target="_blank">{trend.keyword}</a><span
                                    className="blinking-cursor-container">
                                    <span
                                        className="blinking-cursor"></span></span></span></span></div>
                                <div className="card right" style={yellowBlock}></div>
                            </div>


                        ))}
                    </div>
                </div>
            </div>
        )
    }

export default Sites