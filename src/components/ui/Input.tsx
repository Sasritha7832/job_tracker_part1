
import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
    return (
        <div className="input-wrapper">
            {label && <label className="input-label">{label}</label>}
            <input
                className={`input-field ${className}`}
                {...props}
            />
            <style>{`
        .input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: var(--space-2);
          width: 100%;
        }

        .input-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .input-field {
          padding: 10px 12px;
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: var(--text-primary);
          transition: border-color 0.2s ease;
          background-color: #FFFFFF;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 1px var(--accent-color);
        }

        .input-field::placeholder {
          color: #999;
        }
      `}</style>
        </div>
    );
};
