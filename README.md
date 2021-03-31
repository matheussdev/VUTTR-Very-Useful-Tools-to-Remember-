This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# VUTTR (Very Useful Tools to Remember)

***
## Sobre

Este projeto é um teste para o seletivo do banco de talentos da creative pack.

O projeto consiste em criar o front-end para a aplicação VUTTR (Very Useful Tools to Remember), um simples repositório para gerenciar ferramentas com respectivos nomes, links, descrições e tags.

Pode até parecer um projeto simples porém não deixa de ser uma grande oportunidade de aprendizagem, pois ele foi desenvolvido com uma das mais atuais tecnologias do desenvolvimento web, [ReactJs](http://reactjs.org).

#### construção do projeto

Desenvolvi a aplicação com um dos mais atuais frameworks do React, o [NextJs](https://nextjs.org/) pois com ele posso executar uma aplicação SSR (Server-side Rendering) e renderizar os componentes no lado do servidor melhorando assim sua indexação nos motores de busca dos navegadores.

Desenvolvi esta aplicação react com functional components utilizando alguns reacts hooks como useState e useEffects.

Optei por utilizar a contextApi do react criando um próprio hook "useTools", no lugar do SSG(static site generation) visto que a aplicação se trata de um "dashboard" e tem seus dados alterados frequentemente.

Sobre o a estilização não vi necessidade de utilizar styled-components, visto que não tinha alterações de estilo que precisassem ser alteradas com JasvaScript ou utilização de temas, assim o css.modules com sass do next supriu todas minhas necessidades.

Algumus components como icons, modais, switch e tags-inputs optei por utilizar biblioteca de terceiros para poupar tempo e focar em mais funcionalidades, os components foram instalados via npm e modificação de estilos para ficar de acordo com o style guide do projeto.

Toda a aplicação foi feita com typescript seguindo o wireframe e style guide fornecido.

#### components
- **useTools**
    O hook useTols utiliza a context api do react para fazer todas as requisições necessárias a api e distribuir a resposta por todos os outros componentes.
- **Header**
    O componente Header renderiza o caberçalho da aplicação com título e subtítulo.
- **Controllers**
    O component Controlles é responsável pelos input de busca, checkbox de tags e botão de nova tag.
- **ToolsList**
    Responsável por renderizar todos os tools recibidos das requisições da contextApi

- **modalAddNewTool**
    Modal com formulário pra adicionar nova tool
- **modalRemovToolConfirm**
    Modal com confirmação para remover tool.

#### pages

- **_app**
    Escopo principal da aplicação que renderiza todas as paginas.
- **_Document**
    Configuração de documento html gerado pelo next
- **index**
    Página principal onde é gerada a lista de tools.

#### Conteinerização da aplicação
Ao final do projeto foi criado um arquivo dockerfile para criação de imagem e inicialização do container da aplicação.

***
## Funcionalidades
- [x] Listagem de todas as ferramentas cadastrads;
- [x] Adicionar uma nova ferramenta;
- [x] Remover uma ferramenta;
- [x] Busca de ferramentas dinanmicamente;

***


## Como funciona

## Pré-requisitos
```bash
#inicialize a api do projeto acesse:
https://gitlab.com/bossabox/challenge-fake-api/tree/master
```



### Iniciando a aplicação


```bash
# Clone este repositório
$ git clone git@github.com:git@github.com:Matheusouz1/VUTTR-Very-Useful-Tools-to-Remember-

# Acesse a pasta do projeto no seu terminal
$ cd VUTTR-Very-Useful-Tools-to-Remember-

# Instale as dependências
$ npm install or yarn

# Inicialize a aplicação no modo de desenvolvimento
$ npm run dev or yarn dev

# acesse seu aplicação pelo endereço : 
# 8080 - go to http://localhost:8080

```

### Dockerizando sua Aplicação

```bash
    #construir a imagem Docker
    docker build -t [imageName] .

    #executar container e vincular uma porta do seu container ao seu ambiente local

    docker build -t [imageName] . && docker run --name [containerName] -p 0.0.0.0:5000:3000 [imageName]
```

***

## Tecnologia utilizadas

As seguintes tecnologias foram utilizadas na construção do projeto:

-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[ReactJs](https://reactjs.org)**
-   **[NextJs](https://nextjs.org)**
-   **[React-modal](https://www.npmjs.com/package/react-modal)**
-   **[React-switch](https://www.npmjs.com/package/react-switch)**

-   **[React-icons](https://www.npmjs.com/package/react-icons)**
-   **[React-tags-input](https://www.npmjs.com/package/react-tag-input)**

-   **[Axios](https://github.com/axios/axios)**
-   **[Sass](https://sass-lang.com/)**


> See the file  [package.json](https://github.com/Matheusouz1/VUTTR-Very-Useful-Tools-to-Remember-/blob/main/package.json)

#### [](https://github.com/Matheusouz1/FinApp#utilit%C3%A1rios)**Utilitários**


-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  
-   Fonts:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Source sans pro](https://fonts.google.com/specimen/Source-sans-pro)**

***

## Author

<a href="https://www.linkedin.com/in/matheus-souza-santos-392677195/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/57780476?s=460&u=7567cd1574afedb331cd18441e6b49e39ac8b059&v=4" width="100px;" alt=""/><br /><sub><b>Matheus Santos</b></sub></a><br /><a href="https://www.linkedin.com/in/matheus-souza-santos-392677195/" title="Matheus Santos"></a>

***
