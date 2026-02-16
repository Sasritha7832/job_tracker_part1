
import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`}
            {...props}
        >
            {children}
            <style>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          border-radius: 6px;
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          border: 1px solid transparent;
          outline: none;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-primary {
          background-color: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }

        .btn-primary:hover:not(:disabled) {
          background-color: #6d0000; /* Darker red */
          border-color: #6d0000;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--text-primary);
          border-color: var(--border-subtle);
        }

        .btn-secondary:hover:not(:disabled) {
          border-color: var(--text-primary);
          background-color: rgba(0,0,0,0.02);
        }

        .btn-full {
          width: 100%;
        }
      `}</style>
        </button>
    );
};
