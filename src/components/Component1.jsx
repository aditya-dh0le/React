import { useContext } from "react";
import { ContextData } from "../Context";

const Component1 = () => {
  const data = useContext(ContextData);
  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
};

export default Component1;
