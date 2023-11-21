import React, { useEffect, useState } from "react";

const Greeting = (props) => {
    const [name, setName] = useState(props.name)
  useEffect(() => {
    setTimeout(() => {
      setName("Alfonsina")
    }, 3000);
  }, []);
  return (
    <div>
      <p>Hola {name}</p>
    </div>
  );
};

export default Greeting;
