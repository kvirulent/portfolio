// Counter component. Uses goatcounter as a backend.
async function fetchJSON(file: string) {
  try {
    const response = await fetch(file);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("JSON fetch failed:", error);
    throw error;
  }
}

const GoatCounter = () => {
  const visits = fetchJSON(
    "https://xirulent.goatcounter.com/counter//.json"
  ).then((self) => {
    return self.count_unique;
  });
  return <p>{visits}</p>;
};

export default GoatCounter;
