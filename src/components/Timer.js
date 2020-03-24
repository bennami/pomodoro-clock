import React from"react";



function Timer(props) {

    return(
        <div className={"Timer"}>
            <div>
                <span>{props.Minutes}</span>
                <span>:</span>
                <span>{props.Seconds}</span>
            </div>
        </div>
    );
}

export default Timer;