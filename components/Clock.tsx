import React from "react";


const Clock: React.FC<{ updateClock: Function}> = ({updateClock}) => {
    const getDtnSeconds = () => new Date().getSeconds();

    const dtnSeconds = getDtnSeconds();

    const updateCounter = () => {
        updateClock(getDtnSeconds() - dtnSeconds);
    };

    React.useEffect(
        () => {
            const clock = setInterval(
                () => updateCounter(),
                1000
            );
            return () => {
                clearInterval(clock);
            };
        },
        [true]
    )
};

export default Clock;
