import { Home } from "./components/Page/Home/Home";
import { Routes, Route } from "react-router-dom";
import { TopAnime } from "./components/Page/TopAnimePage/TopAnime";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderMenu } from "./components/Header/Header";
import { UserTop } from "./components/Page/MyTop/UserTop";
import { SearchAnime } from "./components/Page/SearchAnime/SearchAnime";
import { Register } from "./components/Page/Authentication/Register";
import { Login } from "./components/Page/Authentication/Login";
import { Cart } from "./components/Page/Authentication/Cart";
function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <HeaderMenu />
          </Col>
        </Row>
      </Container>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/top-anime" element={<TopAnime />} />
        <Route path="/my-top" element={<UserTop/>} />
        <Route path="/search" element={<SearchAnime/>} />
        <Route path="/login" element={<Cart/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
