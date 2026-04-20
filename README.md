# 📦 Sistema de Gestão de Estoque — TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![POO](https://img.shields.io/badge/POO-Principles-blue?style=for-the-badge)

> Sistema de gerenciamento de produtos desenvolvido em **TypeScript** aplicando 
> **Programação Orientada a Objetos** e **Repository Pattern**.

## 🎯 Sobre o Projeto

Projeto final do Bloco 01 do bootcamp de JavaScript, demonstrando arquitetura 
profissional de backend com separação de responsabilidades e design patterns.

### ✨ Funcionalidades
- ✅ **Cadastro** de produtos físicos com dados completos
- ✅ **Listagem** de todos os produtos no estoque
- ✅ **Busca** por ID com validação
- ✅ **Atualização** de dados de produtos
- ✅ **Exclusão** com confirmação
- ✅ **Geração automática** de IDs

## 🛠️ Tecnologias & Padrões

| Categoria | Implementação |
|-----------|--------------|
| **Linguagem** | TypeScript (tipagem forte) |
| **Runtime** | Node.js |
| **Arquitetura** | Repository Pattern + MVC |
| **POO** | Classes abstratas, Herança, Encapsulamento |
| **Tratamento de Erros** | Exceções customizadas |

## 🏗️ Arquitetura do Sistema
src/
├── controller/
│   └── ProdutoController.ts    # Lógica de negócio + CRUD
├── model/
│   ├── Produto.ts              # Classe abstrata base
│   └── ProdutoFisico.ts        # Entidade concreta (herança)
├── repository/
│   └── ProdutoRepository.ts    # Interface/contrato
├── Menu.ts                     # Interface CLI
└── index.ts                    # Ponto de entrada


### 🎓 Conceitos Aplicados

| Conceito | Implementação |
|----------|---------------|
| **Classe Abstrata** | `Produto` — define contrato base para todos os produtos |
| **Herança** | `ProdutoFisico extends Produto` — especialização com `custoInterno` |
| **Encapsulamento** | Propriedades privadas (`private _id`) com getters/setters |
| **Repository Pattern** | `ProdutoController implements ProdutoRepository` — desacoplamento |
| **Polimorfismo** | Método `visualizar()` sobrescrito na classe filha |

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

💡 Destaques Técnicos
🎨 Repository Pattern
Interface define o contrato, Controller implementa a lógica de negócio desacoplada do armazenamento.
🧬 Herança & Abstração
Classe abstrata Produto define estrutura comum, ProdutoFisico herda e especializa com propriedades específicas.
📚 Aprendizados

✅ Aplicação de TypeScript em projeto real
✅ Design de arquitetura escalável com Repository Pattern
✅ Modelagem de domínio rico com POO
✅ Tratamento de exceções e validações de negócio

🔗 Conecte-se Comigo

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Duartetais)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Duartetais)
