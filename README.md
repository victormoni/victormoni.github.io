<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Seu Nome – Página Pessoal</title>
  <!-- Google Fonts (opcional) -->
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />

  <style>
    /* Reset simples */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      background: #f5f5f5;
      color: #333;
    }

    /* Container central */
    .container {
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px 0;
    }

    /* Cabeçalho */
    header {
      background: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    header .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
    }

    header h1 {
      font-size: 1.5rem;
      color: #222;
    }

    /* Menu de navegação */
    nav ul {
      display: flex;
      list-style: none;
    }

    nav li + li {
      margin-left: 20px;
    }

    nav a {
      text-decoration: none;
      font-weight: 500;
      color: #555;
      transition: color 0.2s;
    }

    nav a:hover {
      color: #111;
    }

    /* Seções */
    section {
      margin: 60px 0;
      background: #fff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    section h2 {
      font-size: 1.75rem;
      margin-bottom: 20px;
      color: #222;
    }

    /* Sobre */
    #sobre p {
      margin-bottom: 15px;
    }

    /* Projetos (cards) */
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .card {
      background: #fafafa;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    .card-content {
      padding: 15px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-content h3 {
      font-size: 1.25rem;
      margin-bottom: 10px;
      color: #333;
    }

    .card-content p {
      flex: 1;
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 15px;
    }

    .card-content a {
      align-self: flex-start;
      text-decoration: none;
      font-weight: 600;
      color: #007acc;
      transition: color 0.2s;
    }

    .card-content a:hover {
      color: #005f99;
    }

    /* Contato */
    #contato form {
      display: flex;
      flex-direction: column;
    }

    #contato label {
      margin-bottom: 5px;
      font-weight: 500;
      color: #444;
    }

    #contato input,
    #contato textarea {
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
      resize: vertical;
    }

    #contato button {
      width: 120px;
      padding: 10px;
      border: none;
      border-radius: 4px;
      background: #007acc;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    #contato button:hover {
      background: #005f99;
    }

    /* Rodapé */
    footer {
      text-align: center;
      padding: 20px 0;
      font-size: 0.9rem;
      color: #777;
    }

    footer a {
      color: #007acc;
      text-decoration: none;
      font-weight: 500;
    }

    footer a:hover {
      color: #005f99;
    }

    /* Responsividade */
    @media (max-width: 600px) {
      header h1 {
        font-size: 1.25rem;
      }

      section {
        padding: 20px;
      }

      .card img {
        height: 140px;
      }
    }
  </style>
</head>
<body>
  <!-- Cabeçalho e navegação -->
  <header>
    <div class="container">
      <h1>Victor Augusto Moni</h1>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Seção: Sobre -->
  <section id="sobre">
    <div class="container">
      <h2>Sobre</h2>
      <p>
        Olá! Eu sou o Victor Augusto, desenvolvedor Full-Stack com 3 anos de
        experiência em Java, Spring Boot, Angular e React. Atualmente
        trabalho na Search Price Soluções Tecnológicas, criando soluções web
        responsivas e seguras. Aqui, compartilho um pouco sobre o que faço e
        alguns projetos que já desenvolvi.
      </p>
      <p>
        Meu objetivo é me aperfeiçoar cada vez mais em backend (especialmente
        Spring Boot e Node.js) e no frontend com Angular e React + Vite. Fora
        do código, curto pedalar e aprender sobre metodologias ágeis e
        DevOps.
      </p>
    </div>
  </section>

  <!-- Seção: Projetos -->
  <section id="projetos">
    <div class="container">
      <h2>Projetos</h2>
      <div class="cards">
        <!-- Exemplo de card de projeto -->
        <div class="card">
          <img src="https://via.placeholder.com/400x160.png?text=Projeto+1" alt="Projeto 1" />
          <div class="card-content">
            <h3>Loja Virtual (Spring Boot + Angular)</h3>
            <p>
              Backend em Spring Boot com JWT, roles (ADMIN/USER), documentação
              via Swagger e integração com MySQL. Frontend em Angular 19 com
              componentes reutilizáveis e páginas responsivas.
            </p>
            <a href="https://github.com/seu-usuario/loja-virtual" target="_blank"
              >Ver no GitHub →</a
            >
          </div>
        </div>

        <div class="card">
          <img src="https://via.placeholder.com/400x160.png?text=Projeto+2" alt="Projeto 2" />
          <div class="card-content">
            <h3>CRUD de Clientes (Java Swing)</h3>
            <p>
              Aplicação desktop em Java Swing para gerenciamento de clientes,
              com máscara de CPF/telefone, validação de e-mail e tabela JTable
              para listagem dinâmica com filtros.
            </p>
            <a href="https://github.com/seu-usuario/crud-clientes" target="_blank"
              >Ver no GitHub →</a
            >
          </div>
        </div>

        <!-- Adicione mais cards conforme seus projetos -->
      </div>
    </div>
  </section>

  <!-- Seção: Contato -->
  <section id="contato">
    <div class="container">
      <h2>Contato</h2>
      <form action="mailto:seu-email@exemplo.com" method="POST" enctype="text/plain">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" required />

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required />

        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>

  <!-- Rodapé -->
  <footer>
    <p>
      © 2025 Victor Augusto Moni. Feito com ❤️ e código.  
      <a href="https://github.com/seu-usuario" target="_blank">GitHub</a> |
      <a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a>
    </p>
  </footer>
</body>
</html>
