import React from 'react';
import './DisplayContent.css';
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';

export default function DisplayContent(props) {
    return (
        <div className='display_main'>
            <div className="left_side">
                <LeftSidePanel/>
            </div>
            <div className="right_side">
                <RightSidePanel/>
            </div>
        </div>
    )
}
