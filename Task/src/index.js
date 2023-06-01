import React from 'react';
import { useParams } from 'react-router-dom';

const ShowSummary = ({ shows }) => {
  const { showId } = useParams();
  const show = shows.find(show => show.id === showId);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
    </div>
  );
};

export default ShowSummary;
