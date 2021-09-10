import React from 'react';

const Home = () => {
  return (
    <div style={styles.presentation}>
      <br/>
      <h1>Pandemic Pizzeria</h1>
    
    </div>
  );
};

const styles = {
  presentation: {
    paddingBottom: "20px",
    display: "flex",
    textAlign: "center",
    alignContent: "flex-start",
    justifyItems: "flex-start",
    flexDirection: "column",
  },
};
export default Home;