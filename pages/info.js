import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../containers/Info";
import Error from "../pages/_error";

import { getRandomObjects } from "../containers/Info/api";

export default function InfoPage({ randomObjectsList, statusCode }) {

  if ( statusCode !== 200) {
    return (
      <Layout title="Reactjs Challenge" description="Reactjs Challenge">
        <Header content="Reactjs Challenge" />
        <Error statusCode={statusCode} />
        <Footer content="Reactjs Challenge" />
      </Layout>
    )
  } else {
    return (
      <Layout title="Reactjs Challenge" description="Reactjs Challenge">
        <Header content="Reactjs Challenge" />
        <Info randomObjects={randomObjectsList} />
        <Footer content="Reactjs Challenge" />
      </Layout>
    );
  }
}

InfoPage.getInitialProps = async () => {
  const apiData = await getRandomObjects();
  return {
    randomObjectsList: apiData.randomObjects,
    statusCode: apiData.statusCode
  };
};
