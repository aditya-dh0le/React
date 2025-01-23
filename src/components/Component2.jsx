import { useContext } from "react";
import { ContextData } from "../Context";

const Component2 = () => {
  const data = useContext(ContextData);
  return (
    <div>
      <p>{data.profession}</p>
    </div>
  );
};

export default Component2;
