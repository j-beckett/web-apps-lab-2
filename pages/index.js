import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const { Container, Col, Row } = ReactBootstrap;


  return(
      <Container className="justify-content-center col-lg-8">
          <Header />
          <MessageContainer/>
          <Footer/>
      </Container>
  );
}
