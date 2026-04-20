# 📦 Sistema de Gestão de Estoque — TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![POO](https://img.shields.io/badge/POO-Principles-blue?style=for-the-badge)
> Sistema de gerenciamento de produtos desenvolvido em **TypeScript** aplicando **Programação Orientada a Objetos** e **Repository Pattern**.

## 🎯 Sobre o Projeto

Projeto final do Bloco 01, demonstrando uma arquitetura profissional de backend com separação de responsabilidades e design patterns aplicados ao mundo real.

### ✨ Funcionalidades
* ✅ **Cadastro** de produtos físicos com dados completos.
* ✅ **Listagem** de todos os produtos no estoque.
* ✅ **Busca** por ID com validação de existência.
* ✅ **Atualização** dinâmica de dados de produtos.
* ✅ **Exclusão** segura com confirmação.
* ✅ **Geração automática** de IDs únicos.

## 🛠️ Tecnologias & Padrões

| Categoria | Implementação |
|-----------|--------------|
| **Linguagem** | TypeScript (Tipagem Estática) |
| **Runtime** | Node.js |
| **Arquitetura** | Repository Pattern + MVC |
| **POO** | Classes abstratas, Herança, Encapsulamento |
| **Tratamento de Erros** | Exceções customizadas e validações |

## 🏗️ Arquitetura do Sistema

```text
src/
├── controller/
│   └── ProdutoController.ts    # Lógica de negócio + CRUD
├── model/
│   ├── Produto.ts              # Classe abstrata base
│   └── ProdutoFisico.ts        # Entidade concreta (herança)
├── repository/
│   └── ProdutoRepository.ts    # Interface/Contrato do sistema
├── Menu.ts                     # Interface CLI (Interação)
└── index.ts                    # Ponto de entrada (Main)
``` 

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/Duartetais/projeto_final_bloco_01.git

# Entre na pasta
cd projeto_final_bloco_01

# Instale as dependências
npm install

# Execute (se tiver ts-node configurado)
npm run dev
# ou compile e rode:
tsc && node build/index.js
``` 

💡 **Destaques Técnicos**

🎨 **Repository Pattern**
Interface define o contrato, Controller implementa a lógica de negócio desacoplada do armazenamento.

🧬 **Herança & Abstração**
Classe abstrata Produto define estrutura comum, ProdutoFisico herda e especializa com propriedades específicas.
  

## 🔗 **Conecte-se Comigo**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Duartetais)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Duartetais)
