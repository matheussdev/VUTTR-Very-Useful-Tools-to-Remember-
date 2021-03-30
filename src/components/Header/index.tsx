import style from "./style.module.scss"
export function Header(){
    return(
        <header className={style.container}>
            <h1>
                VUTTR
            </h1>
            <h2>
                Very Userful Tools Remember
            </h2>
        </header>
    )

}