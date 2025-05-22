import React, { useEffect, useRef, useState } from 'react'

function Otp() {

    const OTP_DIGIT_COUNT = 6;
    const refArr = useRef([]);

    const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

    const handleOnchange = (value, index) => {
        if (isNaN(value)) {
            return;
        }

        const newArray = [...inputArr];
        newArray[index] = value.slice(-1);
        setInputArr(newArray);

        if (index < OTP_DIGIT_COUNT - 1 && refArr.current[index + 1] && value.trim()) {
            refArr.current[index + 1]?.focus();
        }
    }
    console.log(inputArr);

    useEffect(() => {
        refArr.current[0]?.focus();
    }, [])

    const handleKeyDown = (e, index) => {
        if(e.key=="space"){
            return;
        }
        if (e.key === "Backspace" && !e.target.value) {
            refArr.current[index - 1]?.focus();
        }
    };


    return (
        <div className="w-full min-h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md flex gap-2">
                {
                    inputArr.map((input, index) => (
                        <input
                            key={index}
                            type="text"
                            className="w-10 text-center py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                            value={inputArr[index]}
                            onChange={(e) => handleOnchange(e.target.value, index)}
                            ref={(el) => refArr.current[index] = el}
                            onKeyDown={(e) => { handleKeyDown(e, index) }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Otp