import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Container from "./Styled";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const [value, setValue] = useState("");
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    document.cookie = "teste1=value; Domain=127.0.0.1;";
    Cookies.set("token0", "cookie alterado");

    Cookies.set("token", "cookie alterado", {
      domain: "127.0.0.1",
      sameSite: "none",
    });

    Cookies.set("token1", "teste s3-website-sa-east-1.amazonaws.com", {
      domain: "s3-website-sa-east-1.amazonaws.com",
      sameSite: "none",
    });

    Cookies.set("token2", "teste amazonaws.com ", {
      domain: "amazonaws.com",
      sameSite: "none",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== "") {
      let cookie = Cookies.get(value);
      if (cookie) {
        setCookieValue(cookie);
      } else {
        setCookieValue("Cookie inválido");
      }
    } else {
      setCookieValue("Cookie inválido");
    }
  };

  return (
    <Container>
      <h1 className="home__title">Leitura de Cookies</h1>
      <div className="home__containt">
        <form className="home__containt__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do Cookie"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          <button>
            <FaArrowRight />
          </button>
        </form>
        <p className="home__containt__text">Conteúdo: {cookieValue}</p>
      </div>
    </Container>
  );
}

export default Home;
