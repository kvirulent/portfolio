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
      console.log("If the visitor counter is stuck on Loading, your ad blocker likely blocked the request to the API. This page has no ads, so I recommend turning your adblocker off. -KV")
    }))
  })

  return <p>{uniqueVisits ? uniqueVisits : "Loading..."}</p>;
};

export default GoatCounter;