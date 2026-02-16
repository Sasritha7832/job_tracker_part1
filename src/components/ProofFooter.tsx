
import React, { useState } from 'react';

export const ProofFooter: React.FC = () => {
    const [checks, setChecks] = useState({
        uiBuilt: false,
        logicWorking: false,
        testPassed: false,
        deployed: false
    });

    const toggleCheck = (key: keyof typeof checks) => {
        setChecks(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <footer className="proof-footer">
            <div className="proof-container">
                <label className="proof-item">
                    <input
                        type="checkbox"
                        checked={checks.uiBuilt}
                        onChange={() => toggleCheck('uiBuilt')}
                    />
                    <span className="checkmark"></span>
                    UI Built
                </label>

                <label className="proof-item">
                    <input
                        type="checkbox"
                        checked={checks.logicWorking}
                        onChange={() => toggleCheck('logicWorking')}
                    />
                    <span className="checkmark"></span>
                    Logic Working
                </label>

                <label className="proof-item">
                    <input
                        type="checkbox"
                        checked={checks.testPassed}
                        onChange={() => toggleCheck('testPassed')}
                    />
                    <span className="checkmark"></span>
                    Test Passed
                </label>

                <label className="proof-item">
                    <input
                        type="checkbox"
                        checked={checks.deployed}
                        onChange={() => toggleCheck('deployed')}
                    />
                    <span className="checkmark"></span>
                    Deployed
                </label>
            </div>

            <style>{`
        .proof-footer {
          height: var(--footer-height);
          background-color: #FFFFFF;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 var(--space-4);
          box-shadow: 0 -2px 10px rgba(0,0,0,0.02);
        }

        .proof-container {
          display: flex;
          gap: var(--space-4);
        }

        .proof-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--text-primary);
          user-select: none;
        }

        .proof-item input {
          display: none;
        }

        .checkmark {
          width: 18px;
          height: 18px;
          border: 1px solid #CCC;
          border-radius: 4px;
          position: relative;
          transition: all 0.2s ease;
        }

        .proof-item:hover .checkmark {
          border-color: var(--accent-color);
        }

        .proof-item input:checked ~ .checkmark {
          background-color: var(--accent-color);
          border-color: var(--accent-color);
        }

        .checkmark::after {
          content: "";
          position: absolute;
          display: none;
          left: 5px;
          top: 1px;
          width: 4px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .proof-item input:checked ~ .checkmark::after {
          display: block;
        }
      `}</style>
        </footer>
    );
};
