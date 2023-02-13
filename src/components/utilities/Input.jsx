import React from 'react';

export default function Input({type, name, label, placeholder}){
    const classes = " w-full max-w-xs bg-snow-4 dark:bg-night-4 placeholder-gray-300 dark:placeholder-night-1";

    if (type === 'textarea') {
        return (
            <>
                <label className="label">
                    <span className="label-text text-night-3 dark:text-snow-3">{label}</span>
                </label>
                <textarea
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    className={`textarea textarea-bordered textarea-lg ${classes}`}
                />
            </>
        )
    }
    return (
        <>
            <label className="label">
                <span className="label-text text-night-3 dark:text-snow-3">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`input input-bordered ${classes}`}
            />
        </>
        
    )
}