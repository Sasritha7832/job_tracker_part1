
import React from 'react';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

export const PrimaryWorkspace: React.FC = () => {
    return (
        <div className="primary-workspace">
            <Card heading="Project Definition">
                <div className="grid-2-col">
                    <Input label="Project Name" placeholder="e.g. KodNest Premium" />
                    <Input label="Industry" placeholder="e.g. SaaS" />
                </div>
                <Textarea label="Core Value Proposition" placeholder="What is the main problem this product solves?" />
            </Card>

            <Card heading="Target Audience">
                <Input label="Primary User Persona" placeholder="e.g. Product Managers" />
                <Textarea label="User Goals" placeholder="What do they want to achieve?" rows={2} />
            </Card>

            <style>{`
        .primary-workspace {
          height: 100%;
        }
        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }
      `}</style>
        </div>
    );
};
