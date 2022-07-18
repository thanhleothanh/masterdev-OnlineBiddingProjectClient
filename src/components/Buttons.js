import React from 'react';

const Buttons = (props) => {
    return (
        <div className={'flex items-center w-full h-12 space-x-2 genericButton ' + props.className}
            onClick={props.onClick}         >
            <button>
                {props.title}
            </button>
        </div>
    );
};

export default Buttons;
