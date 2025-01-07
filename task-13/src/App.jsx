/* import useSWR from "swr";
import { fetchAPI } from "./http/api"; */

import Layout from "./layout";
import Home from "./pages/home/index";

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
