import React from "react";

const CardLayanan = ({ img, title }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="image">
                <img src={img} alt="" width={50} className="max-h-12" />
            </div>
            <div className="title sm:text-xs mt-3 text-white leading-4 font-bold">
                {title}
            </div>
        </div>
    );
};

export default CardLayanan;
