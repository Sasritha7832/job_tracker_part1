
import React from 'react';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';


export const SecondaryPanel: React.FC = () => {
    return (
        <div className="secondary-panel-content">
            <div className="step-explanation">
                <h3>Step 1 Instructions</h3>
                <p>Define the core parameters of your application. This sets the foundation for the entire build process.</p>
            </div>

            <div className="prompt-section">
                <Textarea
                    placeholder="Enter your prompt here..."
                    rows={6}
                    className="prompt-box"
                />
                <div className="button-group">
                    <Button variant="secondary" fullWidth>Copy Prompt</Button>
                    <Button variant="primary" fullWidth>Build in Lovable</Button>
                </div>
            </div>

            <div className="feedback-section">
                <p className="feedback-label">Did it work?</p>
                <div className="button-group-row">
                    <Button variant="secondary" style={{ flex: 1 }}>It Worked</Button>
                    <Button variant="secondary" style={{ flex: 1, color: '#C89F57', borderColor: '#C89F57' }}>Error</Button>
                </div>
                <Button variant="secondary" fullWidth style={{ marginTop: '8px' }}>Add Screenshot</Button>
            </div>

            <style>{`
        .secondary-panel-content {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .step-explanation h3 {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #888;
          margin-bottom: var(--space-2);
          font-weight: 600;
        }
        
        .step-explanation p {
          font-size: 0.9375rem;
          color: var(--text-primary);
        }

        .prompt-section {
          background-color: #F7F7F7; /* Slightly darker than bg-primary? No, bg-primary is F7F6F3 off-white. This is pure grey. */
          /* Let's use white card style effectively */
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: var(--space-3);
          background-color: #FFFFFF;
        }

        .prompt-box {
          font-family: monospace;
          font-size: 0.875rem;
          margin-bottom: var(--space-3);
        }

        .button-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .feedback-section {
          padding-top: var(--space-3);
          border-top: 1px solid var(--border-subtle);
        }

        .feedback-label {
            font-size: 0.875rem;
            color: #888;
            margin-bottom: var(--space-2);
            text-align: center;
        }

        .button-group-row {
            display: flex;
            gap: var(--space-2);
        }
      `}</style>
        </div>
    );
};
