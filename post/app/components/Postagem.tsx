import Image from "next/image";
import "./postagem.css";

interface usuario {
  nome: String;
  local: String;
}

export default function Postagem(prop: usuario) {
  return (
    <div className="container">
      <img
        className="img-usuar"
        src="https://us.123rf.com/450wm/yupiramos/yupiramos1603/yupiramos160308186/53343364-football-soccer-design-vector-illustration-graphic.jpg?ver=6"
        alt="Imagem-Avatar"
      />
      <div className="usuar-infor">
        <span className="nome-usuar">{prop.nome}</span>
        <span className="local-usuar">{prop.local}</span>
      </div>
    </div>
  );
}
