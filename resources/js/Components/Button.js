import React from 'react';

export default function Button({ type = 'submit', className = '', processing, children, variant}) {
    return (
        <button
            type={type}
            className={
                `rounded-2xl py-[13px]  w-full text-center ${
                    processing && 'opacity-30'
                } btn-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
