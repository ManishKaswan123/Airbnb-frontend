import React from 'react';

const Avatar = ({ firstName , lastName , width , height }) => {
    let avatarName = '';
    if (firstName && firstName !== '') 
        avatarName = firstName[0];
    if (lastName && lastName !== '')
        avatarName += lastName[0];
    return (
        <div 
        style= {{width: width+'px', height: height+'px'}}
        className={`text-slate-800 rounded-full font-bold relative`}
        >
            <div 
            style= {{width: width+'px', height: height+'px'}}
            className= {`overflow-hidden rounded-full flex justify-center items-center text-sm bg-black text-white font-semibold`}
            >
            {avatarName}
            </div>
        </div>
    );
}

export default Avatar;
