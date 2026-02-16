
import React from 'react';

export const ContextHeader: React.FC = () => {
    return (
        <div className="context-header">
            <h1>Define Project Scope</h1>
            <p className="subtext">Outline the core objectives and constraints for this build.</p>

            <style>{`
        .context-header {
          margin-bottom: var(--space-2);
        }
        
        .context-header h1 {
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .subtext {
          font-family: var(--font-sans);
          font-size: 1.125rem;
          color: #555;
          max-width: 720px;
        }
      `}</style>
        </div>
    );
};
