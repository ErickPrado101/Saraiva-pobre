**Livraria Chatbot - README**

Este projeto consiste em um chatbot para uma livraria, desenvolvido em JavaScript (Node.js) para o servidor e HTML, CSS, e JavaScript para o cliente. O chatbot inclui integração com o ChatGPT da OpenAI para respostas mais interativas.

### Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/livraria-chatbot.git
   cd livraria-chatbot
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

### Configuração do Banco de Dados

O projeto utiliza um banco de dados SQLite. As tabelas necessárias são criadas automaticamente. Certifique-se de ter o SQLite instalado localmente.

### Configuração da Chave da OpenAI

Substitua `'SUA_CHAVE_DE_API_AQUI'` no arquivo `server.js` pela sua chave de API do OpenAI.

### Execução do Projeto

1. **Inicie o servidor:**

   ```bash
   node server.js
   ```

   O servidor estará acessível em [http://localhost:3000](http://localhost:3000).

2. **Acesse a aplicação no navegador:**

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para interagir com o chatbot.

### Estrutura do Projeto

- **`server.js`**: Configuração do servidor Node.js, integração com o banco de dados SQLite, e interação com o ChatGPT.
  
- **`index.html`**: Página HTML do cliente contendo a interface do chatbot.

- **`styles.css`**: Estilos CSS para a interface do chatbot.

- **`main.js`**: Lógica JavaScript do cliente para interação com o chatbot.

### Funcionalidades do Chatbot

1. **Listar Livros Disponíveis:**
   - Botão 1: "Quais livros eu tenho disponíveis"
   - O chatbot lista os livros disponíveis na livraria.

2. **Fazer Pedido:**
   - Botão 2: "Faça um pedido"
   - O chatbot permite ao usuário fazer um pedido, verificar disponibilidade, e adiciona ao carrinho.

3. **Interação com o ChatGPT:**
   - O chatbot utiliza a API do ChatGPT da OpenAI para respostas mais interativas.

4. **Outras Rotas da Livraria:**
   - Adicione outras rotas no arquivo `server.js` conforme necessário para funcionalidades adicionais, como doações e pagamentos.

### Observações

- Este é um ponto de partida e pode ser aprimorado para atender a requisitos específicos.
  
- Consulte a documentação do [SQLite](https://www.sqlite.org/) para mais informações sobre o banco de dados.

- Certifique-se de seguir as práticas recomendadas de segurança ao lidar com chaves de API e dados do usuário em um ambiente de produção.
