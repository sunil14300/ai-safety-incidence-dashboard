import React, { useState } from 'react';
import { Severity, Incident } from '../types';
import './IncidentForm.css';

interface Props {
  onAdd: (incident: Incident) => void;
}

const IncidentForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const newIncident: Incident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    };
    onAdd(newIncident);
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h3>Report New Incident</h3>
      <input className="form-control" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea className="form-control" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <select className="form-select" value={severity} onChange={e => setSeverity(e.target.value as Severity)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="btn btn-success mt-2" type="submit">Submit</button>
    </form>
  );
};

export default IncidentForm;
