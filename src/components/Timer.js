import React from"react";

function Timer(props) {

    return(
        <div className={"Timer"}>
            <div>
            {/* you cannot change the state of a prop, but you can apply a condition*/}
                <span>{props.Minutes < 10 ? `0${props.Minutes}`: props.Minutes}</span>
                <span>:</span>
                <span>{props.Seconds < 10 ? `0${props.Seconds}`: props.Seconds}</span>
            </div>
        </div>
    );
}

export default Timer;