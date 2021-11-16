import { Page } from "./components/Page/Index";
import { Routes, Route } from "react-router-dom";
import { TopAnime } from "./components/Page/TopAnimePage/TopAnime";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderMenu } from "./components/Header/Header";
import { UserTop } from "./components/Page/MyTop/UserTop";
import { SearchAnime } from "./components/Page/SearchAnime/SearchAnime";
import { Authentication } from "./components/Page/Authentication/Authentication";
import { Login } from "./components/Page/Authentication/Login";
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
        <Route path="/" element={<Page />} />
        <Route path="/TopAnime" element={<TopAnime />} />
        <Route path="/MyTop" element={<UserTop/>} />
        <Route path="/Search" element={<SearchAnime/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
