import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../containers/Home';



export default function HomePage() {
  return (
    <Layout
        title="Reactjs Challenge"
        description="Reactjs Challenge">
      <Header content="Reactjs Challenge" />
      <Home />
      <Footer content="Reactjs Challenge"/>
    </Layout>
  );
}
