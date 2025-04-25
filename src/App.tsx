import React, { useState } from 'react';
import './App.css';
import { Incident } from './types';
import { mockIncidents } from './data';
import IncidentItem from './components/IncidentItem';
import FilterControls from './components/FilterControls';
import IncidentForm from './components/IncidentForm';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('newest');

  const handleAddIncident = (newIncident: Incident) => {
    setIncidents(prev => [newIncident, ...prev]);
  };

  const filtered = incidents
    .filter(inc => filter === 'All' || inc.severity === filter)
    .sort((a, b) =>
      sort === 'newest'
        ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
        : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
    );

  return (
    <div className="container">
      <h1 className="text-center">AI Safety Incident Dashboard</h1>
      <FilterControls filter={filter} sort={sort} setFilter={setFilter} setSort={setSort} />
      <IncidentForm onAdd={handleAddIncident} />
      <div className="incident-list">
        {filtered.map(incident => (
          <IncidentItem key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}

export default App;
