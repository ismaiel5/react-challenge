import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../containers/Home';



export default function HomePage() {
  return (
    <Layout
        title="Reactjs Challenge!"
        description="Reactjs Challenge">
      <Header content="React Challenge Header" />
      <Home />
      <Footer content="React Challenge Footer"/>
    </Layout>
  );
}
