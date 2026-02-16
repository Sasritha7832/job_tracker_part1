
import React from 'react';

export const TopBar: React.FC = () => {
    return (
        <header className="top-bar">
            <div className="project-name">Premium Build System</div>

            <div className="progress-indicator">
                <span className="step-count">Step 1 / 5</span>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '20%' }}></div>
                </div>
            </div>

            <div className="status-badge">
                <span className="status-dot"></span>
                In Progress
            </div>

            <style>{`
        .top-bar {
          height: var(--top-bar-height);
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--space-4);
          background-color: var(--bg-primary);
        }

        .project-name {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.125rem;
          color: var(--text-primary);
        }

        .progress-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          flex: 1;
          max-width: 300px;
        }

        .step-count {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #666;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background-color: #E0E0E0;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: var(--accent-color);
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          padding: 4px 12px;
          border: 1px solid var(--border-subtle);
          border-radius: 999px;
          background-color: #FFFFFF;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--warning-color);
        }
      `}</style>
        </header>
    );
};
