// Simple visitor count component, returns <p>#visits</p>
// Uses goatcounter for the data
"use client";
import { useState, useEffect } from 'react';


const GoatCounter = () => {
  const [uniqueVisits, setUniqueVisits] = useState(null);
  const [nonUniqueVisits, setNonUniqueVisits] = useState(null);

  useEffect(() => { // VV replace with your own analytics API!!!
    fetch("https://xirulent.goatcounter.com/counter//.json").then((res) => res.json().then((data) => {
      setUniqueVisits(data.count_unique);
      setNonUniqueVisits(data.count);
    }))
  })

  return <p>{uniqueVisits ? uniqueVisits : "Loading..."}</p>;
};

export default GoatCounter;