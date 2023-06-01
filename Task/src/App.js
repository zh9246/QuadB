import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import BookingForm from "./components/BookingForm";

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ShowList shows={shows} />
        </Route>
        <Route path="/summary/:showId">
          <ShowSummary shows={shows} />
        </Route>
        <Route path="/booking/:showId">
          <BookingForm shows={shows} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
