import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { ContextData } from "./Context";

import FileUploadWithPreview from "./components/FileUploadWithPreview";

const App = () => {
  return (
    <>
      <main>
        {/* <ContextData.Provider
          value={{ name: "Hiesenberg", profession: "Chemist", age: 50 }}
        >
          <Component1 />
          <Component2 />
        </ContextData.Provider> */}
        <FileUploadWithPreview />
      </main>
    </>
  );
};

export default App;
