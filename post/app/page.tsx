import Image from "next/image";
import styles from "./page.module.css";
import Postagem from "./components/Postagem";

export default function Home() {
  return (
    <main>
      <Postagem nome={"Rafael"} local={"Recife/PE"} />
    </main>
  );
}
