import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../containers/Info";

import {getUsersData} from "../containers/Info/api"

export default function InfoPage({usersData}) {
  return (
    <Layout title="Reactjs Challenge" description="Reactjs Challenge">
      <Header content="Reactjs Challenge" />
      <Info usersData={usersData}/>
      <Footer content="Reactjs Challenge" />
    </Layout>
  );
}


InfoPage.getInitialProps = async () =>{
    const apiData = await getUsersData();
    return{
        usersData : apiData
    }
}
