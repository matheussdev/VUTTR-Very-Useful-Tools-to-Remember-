import style from "./style.module.scss";

/*
este componente é Header da 
aplicação a parte onde está a logo
*/
export function Header() {
  return (
    <header className={style.container}>
      <h1>VUTTR</h1>
      <h2>Very Userful Tools Remember</h2>
    </header>
  );
}
