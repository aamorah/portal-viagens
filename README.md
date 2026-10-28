# ✈️ Portal de Viagens WeFly

Um portal de viagens desenvolvido com **Next.js, React e TypeScript**, criado para apresentar destinos turísticos de forma moderna, responsiva e visualmente atrativa.

O projeto foi desenvolvido como parte dos estudos de desenvolvimento Front-End, aplicando conceitos de **componentização, rotas, reutilização de componentes, CSS Modules e responsividade**.

---

## 🌎 Sobre o projeto

O **Portal de Viagens WeFly** permite ao usuário navegar entre a página inicial e uma página dedicada a destinos turísticos.

A aplicação apresenta:

- Uma página inicial com destaque visual;
- Navegação entre as páginas;
- Uma página de destinos;
- Cards reutilizáveis para apresentação dos destinos;
- Layout compartilhado entre as páginas;
- Design responsivo para diferentes tamanhos de tela.

---

## 🚀 Tecnologias utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **CSS Modules**
- **Next.js Link**
- **HTML5**
- **CSS3**

---

## ✨ Funcionalidades

### 🏠 Página inicial

A página inicial apresenta uma imagem de destaque, uma chamada principal e um botão para explorar os destinos disponíveis.

### 🌍 Página de destinos

A página `/destinos` apresenta quatro destinos turísticos:

- 🇬🇷 Grécia
- 🇮🇩 Indonésia
- 🇮🇹 Itália
- 🇨🇭 Suíça

### 🧩 Componentização

O projeto utiliza componentes reutilizáveis, como:

- `Layout`
- `CardDestino`

O componente `CardDestino` recebe informações por meio de **props**, permitindo reutilizar a mesma estrutura para diferentes destinos.

### 📱 Responsividade

A interface foi adaptada para diferentes tamanhos de tela, incluindo computadores, tablets e dispositivos móveis.

---

## 📁 Estrutura do projeto

```text
portal-viagens/
├── public/
│   └── images/
│       ├── grecia.jpeg
│       ├── indonesia.jpeg
│       ├── italia.jpeg
│       ├── suica.jpeg
│       └── hero-viagem.jpg
│
├── screenshots/
│   ├── img 1.png
│   ├── img 2.png
│   ├── img 3.png
│   └── img 4.png
│
├── src/
│   └── app/
│       ├── components/
│       │   ├── CardDestino/
│       │   │   ├── CardDestino.tsx
│       │   │   └── CardDestino.module.css
│       │   │
│       │   └── Layout/
│       │       ├── Layout.tsx
│       │       └── Layout.module.css
│       │
│       ├── destinos/
│       │   ├── page.tsx
│       │   └── page.module.css
│       │
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       └── page.module.css
│
└── package.json
```

---

## 📸 Capturas de tela

### Tela inicial

![Tela inicial](./screenshots/img%201.png)

### Página de destinos

![Página de destinos](./screenshots/img%202.png)

### Cards dos destinos

![Cards dos destinos](./screenshots/img%203.png)

### Versão mobile

![Versão mobile](./screenshots/img%204.png)

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes do desenvolvimento com Next.js e React, incluindo:

- Criação de páginas utilizando o **App Router**;
- Rotas baseadas na estrutura de arquivos;
- Criação e reutilização de componentes;
- Utilização de **props com TypeScript**;
- Navegação utilizando `next/link`;
- Organização de estilos utilizando **CSS Modules**;
- Criação de layouts compartilhados;
- Desenvolvimento de interfaces responsivas;
- Organização de arquivos e pastas em um projeto React/Next.js.

---

## 💻 Como executar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd portal-viagens
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador:

```text
http://localhost:3000
```

---

## 👩‍💻 Autora

**Isabela Soares**

Projeto desenvolvido para fins de estudo e prática em desenvolvimento Front-End.