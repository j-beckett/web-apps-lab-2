import Header from "../components/Header";
import Footer from "../components/Footer";
import MessageContainer from "../components/MessageContainer";
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  
  return(
      <Container className="justify-content-center col-lg-8">
          <Header />
          <MessageContainer/>
          <Footer/>
      </Container>
  );
}
