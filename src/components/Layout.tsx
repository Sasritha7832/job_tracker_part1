
import React from 'react';
import { TopBar } from './TopBar';
import { ContextHeader } from './ContextHeader';
import { PrimaryWorkspace } from './PrimaryWorkspace';
import { SecondaryPanel } from './SecondaryPanel';
import { ProofFooter } from './ProofFooter';

export const Layout: React.FC = () => {
    return (
        <div className="layout-container">
            {/* Top Bar: Persistent navigation and status */}
            <TopBar />

            {/* Main Content Area: Vertically flexes to fill space between TopBar and Footer */}
            <main className="main-content">

                {/* Context Header: Explains the current step */}
                <div className="context-header-wrapper">
                    <ContextHeader />
                </div>

                {/* Workspace Split: 70% Primary, 30% Secondary */}
                <div className="workspace-split">
                    <div className="primary-pane">
                        <PrimaryWorkspace />
                    </div>
                    <div className="secondary-pane">
                        <SecondaryPanel />
                    </div>
                </div>

            </main>

            {/* Proof Footer: Persistent bottom checklist */}
            <ProofFooter />

            <style>{`
        .layout-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: var(--bg-primary);
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden; /* Prevent full page scroll, handle inside components */
        }

        .context-header-wrapper {
          padding: var(--space-3) var(--space-4);
          /* No border bottom? Maybe subtle separator? */
        }

        .workspace-split {
          flex: 1;
          display: flex;
          overflow: hidden; /* Internal scrolling */
          padding: 0 var(--space-4);
          gap: var(--space-4);
        }

        .primary-pane {
          flex: 7;
          background: var(--bg-secondary);
          border-radius: 8px; /* Subtle rounding */
          border: 1px solid var(--border-subtle);
          overflow-y: auto;
          margin-bottom: var(--space-3); /* Space before footer */
          padding: var(--space-3);
        }

        .secondary-pane {
          flex: 3;
          background: var(--bg-primary); /* Keeps it blending or distinct? Design said "Secondary Panel" */
          /* Let's keep it clean, maybe just a container */
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          margin-bottom: var(--space-3);
        }
      `}</style>
        </div>
    );
};
