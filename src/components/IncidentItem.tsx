import React, { useState } from 'react';
import { Incident } from '../types';
import './IncidentItem.css';

interface Props {
  incident: Incident;
}

const IncidentItem: React.FC<Props> = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`incident-card severity-${incident.severity.toLowerCase()}`}>
      <div className="incident-header">
        <h4>{incident.title}</h4>
        <p><strong>Severity:</strong> {incident.severity}</p>
        <p><strong>Reported:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>
        <button onClick={() => setShowDetails(prev => !prev)} className="btn btn-sm btn-outline-primary">
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {showDetails && (
        <p className="incident-description">{incident.description}</p>
      )}
    </div>
  );
};

export default IncidentItem;
