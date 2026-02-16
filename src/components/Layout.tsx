
import React from 'react';
import { TopBar } from './TopBar';
import { ContextHeader } from './ContextHeader';
import { PrimaryWorkspace } from './PrimaryWorkspace';
import { SecondaryPanel } from './SecondaryPanel';
import { ProofFooter } from './ProofFooter';
import './Layout.css';

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
        </div>
    );
};
