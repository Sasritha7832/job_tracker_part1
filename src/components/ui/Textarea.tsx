
import React from 'react';
import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    rows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({ label, rows = 4, className = '', ...props }) => {
    return (
        <div className="textarea-wrapper">
            {label && <label className="textarea-label">{label}</label>}
            <textarea
                className={`textarea-field ${className}`}
                rows={rows}
                {...props}
            />
            <style>{`
        .textarea-wrapper {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: var(--space-2);
          width: 100%;
        }

        .textarea-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .textarea-field {
          padding: 10px 12px;
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: var(--text-primary);
          transition: border-color 0.2s ease;
          background-color: #FFFFFF;
          resize: vertical;
        }

        .textarea-field:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 1px var(--accent-color);
        }

        .textarea-field::placeholder {
          color: #999;
        }
      `}</style>
        </div>
    );
};
