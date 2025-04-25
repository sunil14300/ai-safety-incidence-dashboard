import React from 'react';
import './FilterControls.css';

interface Props {
  filter: string;
  sort: string;
  setFilter: (value: string) => void;
  setSort: (value: string) => void;
}

const FilterControls: React.FC<Props> = ({ filter, sort, setFilter, setSort }) => {
  return (
    <div className="filter-controls">
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="form-select">
        <option value="All">All Severities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)} className="form-select">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default FilterControls;
