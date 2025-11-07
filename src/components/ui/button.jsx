import React from 'react';

export function Button({ children, onClick, variant = 'default', size = 'md', className = '' }) {
  const base =
    'rounded-xl px-4 py-2 font-medium transition-all ' +
    (variant === 'outline'
      ? 'border border-blue-500 text-blue-500 hover:bg-blue-50'
      : 'bg-blue-600 text-white hover:bg-blue-700');

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg px-6 py-3',
  };

  return (
    <button onClick={onClick} className={`${base} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}
