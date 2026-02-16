
import React from 'react';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    heading?: string;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, heading, className = '' }) => {
    return (
        <div className={`card ${className}`}>
            {heading && <div className="card-header"><h4>{heading}</h4></div>}
            <div className="card-body">
                {children}
            </div>
            <style>{`
        .card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: var(--space-3);
        }

        .card-header {
          padding: var(--space-3) var(--space-3) 0;
        }

        .card-header h4 {
          margin: 0;
          font-size: 1.125rem;
          color: var(--text-primary);
        }

        .card-body {
          padding: var(--space-3);
        }
      `}</style>
        </div>
    );
};
