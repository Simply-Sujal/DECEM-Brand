import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const DiscountHeader = () => {
    const [isHidden, setIsHidden] = useState(false);

    const handleClose = () => {
        setIsHidden(true);
    };

    const containerStyle = {
        height: isHidden ? '0' : 'auto',
        overflow: isHidden ? 'hidden' : 'visible',
        transition: 'height 0.3s ease-in-out',
    };

    return (
        <div style={containerStyle}>
            <div className="w-full flex bg-[#2455f6] py-[6px] items-center px-3">
                <div className="flex-grow text-center text-[13px] md:text-[16px]">
                    <h1 className="text-white font-thin">
                        Use code <span className="text-white font-medium">DECEM10</span> for{' '}
                        <span className="text-white font-medium">$10 OFF</span> your first order
                    </h1>
                </div>
                <div className="ml-auto">
                    <RxCross2 onClick={handleClose} className="cursor-pointer text-white text-[17px] md:text-[20px] font-light" />
                </div>
            </div>
        </div>
    );
};

export default DiscountHeader;
