import React from "react";

const Card = ({ title, img }) => {
    return (
        <div
            className={`w-full flex flex-row px-5 py-3 gap-7 justify-between items-center text-white `}
        >
            <div className="title text-xl font-bold text-center">{title}</div>
            <img src={img} alt="" className="min-w-[3rem] max-w-[3rem]" />
        </div>
    );
};

export default Card;
