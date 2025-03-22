# 🧑‍💼 Sistema de Cadastro de Colaboradores – DSIN

Este projeto foi desenvolvido como parte da avaliação técnica para a empresa **DSIN - Desenvolvimento de Soluções Inteligentes**. Trata-se de um sistema web simples, funcional e elegante para **cadastrar, listar, editar e excluir colaboradores** de uma organização.

---

## 📌 Funcionalidades

- ✅ Cadastro de novos colaboradores
- ✅ Listagem dinâmica de todos os registros
- ✅ Edição de dados com modal interativo
- ✅ Exclusão de colaboradores com confirmação
- ✅ Design responsivo e layout alinhado à identidade da DSIN
- ✅ CRUD completo com persistência em banco de dados MySQL

---

## 🖼️ Tecnologias utilizadas

- **HTML5** e **CSS3**
- **JavaScript (Vanilla)**
- **PHP (com PDO)**
- **MySQL** (gerenciado via DBeaver)
- **XAMPP** como ambiente local
- Ícones Unicode ✏️ e 🗑️ para ações

---

## 🗂️ Estrutura de pastas

sistema-colaboradores/ ├── backend/ │ ├── db_config.php │ ├── listar.php │ ├── salvar.php │ ├── editar.php │ └── excluir.php ├── index.html ├── script.js ├── style.css ├── logo.svg └── README.md

sql
Copiar
Editar

---

## 🧠 Banco de Dados

Crie o banco de dados MySQL com o seguinte script:

```sql
CREATE DATABASE sistema_colaboradores DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE sistema_colaboradores;

CREATE TABLE colaboradores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cargo VARCHAR(100) NOT NULL,
  departamento VARCHAR(100) NOT NULL,
  data_admissao DATE NOT NULL
);
⚙️ Configuração do ambiente
Instale o XAMPP ou outro servidor com PHP e MySQL.

Coloque a pasta sistema-colaboradores dentro da pasta htdocs/.

Inicie os serviços Apache e MySQL no XAMPP.

Crie o banco de dados no DBeaver ou phpMyAdmin usando o script acima.

Atualize as credenciais do banco em backend/db_config.php:

php
Copiar
Editar
$host = 'localhost';
$db = 'sistema_colaboradores';
$user = 'root';
$pass = 'SUA_SENHA_DO_MYSQL';
▶️ Como executar
Acesse no navegador:
http://localhost/sistema-colaboradores/index.html

Use o formulário para adicionar colaboradores.

Utilize os botões ✏️ para editar e 🗑️ para excluir os registros diretamente na tabela.

💡 Observações finais
O layout foi adaptado para seguir a identidade visual da DSIN (cores, fonte, logo).

Todas as operações são feitas de forma assíncrona, garantindo fluidez na experiência do usuário.

O sistema foi construído com foco em simplicidade, clareza e qualidade do código.

👨‍💻 Desenvolvido por
Jean Confertino
Frontend & Backend Developer
LinkedIn (opcional)

```
