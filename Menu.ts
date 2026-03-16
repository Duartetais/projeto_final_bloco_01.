import readlinesync = require('readline-sync');
import { Produto } from './src/model/Produto';
import { ProdutoFisico } from './src/model/ProdutoFisico';
import { ProdutoController } from "./src/controller/ProdutoController";


const produtos = new ProdutoController();
const categoriasDisponiveis = ["Vestuario", "Calçados", "Eletrônicos", "Higiene"];

main();


function main(): void {
    let opcao: number;
    let id, quantidade, estoque: number;
    let nome, descricao, categoria, marca, modelo, cor: string;
    let preco, custoInterno: number;

    while (true) {
        console.log("\n_____________________________________________________");
        console.log("\n                STORE SYSTEM                       ");
        console.log("_____________________________________________________");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("_____________________________________________________");

        opcao = readlinesync.questionInt("Digite a opcao: ");

        if (opcao === 6) {
            console.log("\nSaindo do sistema...");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                try {
                    console.log("\nCadastrar Produto\n");
                    nome = readlinesync.question("Nome: ");
                    preco = readlinesync.questionFloat("Preco: ");
                    estoque = readlinesync.questionInt("Estoque: ");
                    descricao = readlinesync.question("Descricao: ");

                    console.log("1 - Calçados");
                    console.log("2 - Vestuario");
                    console.log("3 - Eletrônicos");
                    console.log("4 - Higiene");
                    console.log("5 - Outros");


                    let escolha = readlinesync.questionInt("Escolha a categoria: ");

                    if (escolha === 1) {
                        categoria = "Calçados";

                    } else if (escolha === 2) {
                        categoria = "Vestuario";

                    } else if (escolha === 3) {
                        categoria = "Eletrônicos";

                    } else if (escolha === 4) {
                        categoria = "Higiene";

                    } else {
                        categoria = "Outros";

                    }

                    marca = readlinesync.question("Marca: ");
                    modelo = readlinesync.question("Modelo: ");
                    cor = readlinesync.question("Cor: ");
                    quantidade = readlinesync.questionInt("Quantidade: ");
                    custoInterno = readlinesync.questionFloat("Custo Interno: ");

                    produtos.cadastrar(
                        new ProdutoFisico(
                            produtos.gerarId(),
                            nome,
                            preco,
                            estoque,
                            descricao,
                            categoria,
                            marca,
                            modelo,
                            cor,
                            quantidade,
                            custoInterno
                        )
                    );

                } catch (error) {
                    console.log("Erro ao cadastrar produto!",);
                }

                keyPress();
                break;

            case 2:
                try {
                    console.log("\nLista de Produtos\n",);
                    produtos.listarTodos();
                } catch (error) {
                    console.log("Erro ao listar produtos!",);
                }

                keyPress();
                break;

            case 3:
                try {
                    id = readlinesync.questionInt("Digite o ID do produto: ");
                    produtos.procurarPorId(id);
                } catch (error) {
                    console.log("Erro ao buscar produto!",);
                }

                keyPress();
                break;

            case 4:
                try {
                    id = readlinesync.questionInt("Digite o ID do produto a atualizar: ");

                    let produtoAtual = produtos.buscarNoArray(id) as ProdutoFisico;

                    if (!produtoAtual) {
                        console.log("Produto não encontrado!");
                        break;
                    }


                    nome = readlinesync.question(`Nome (${produtoAtual.nome}): `) || produtoAtual.nome;
                    preco = readlinesync.questionFloat(`Preco (${produtoAtual.preco}): `) || produtoAtual.preco;
                    estoque = readlinesync.questionInt(`Estoque (${produtoAtual.estoque}): `) || produtoAtual.estoque;
                    descricao = readlinesync.question(`Descricao (${produtoAtual.descricao}): `) || produtoAtual.descricao;
                    categoria = readlinesync.question(`Categoria (${produtoAtual.categoria}): `) || produtoAtual.categoria;
                    marca = readlinesync.question(`Marca (${produtoAtual.marca}): `) || produtoAtual.marca;
                    modelo = readlinesync.question(`Modelo (${produtoAtual.modelo}): `) || produtoAtual.modelo;
                    cor = readlinesync.question(`Cor (${produtoAtual.cor}): `) || produtoAtual.cor;


                    quantidade = readlinesync.questionInt(`Quantidade (${(produtoAtual as any).quantidade}): `) || (produtoAtual as any).quantidade;
                    custoInterno = readlinesync.questionFloat(`Custo Interno (${(produtoAtual as any).custoInterno}): `) || (produtoAtual as any).custoInterno;

                    produtos.atualizar(
                        new ProdutoFisico(
                            id, nome, preco, estoque, descricao, categoria, marca, modelo, cor, quantidade, custoInterno
                        )
                    );

                } catch (error) {
                    console.log("Erro ao atualizar produto!");
                }

                keyPress();
                break;

            case 5: // Deletar Produto
                try {
                    id = readlinesync.questionInt("Digite o ID do produto a deletar: ");
                    produtos.deletar(id);
                } catch (error) {
                    console.log("Erro ao deletar produto!");
                }

                keyPress();
                break;

            default:
                console.log("Opção inválida!",);
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n______________________________________________________");
    console.log("Projeto Desenvolvido por: ");
    console.log("Tais Duarte Bernardi");
    console.log("https://github.com/Duartetais");
    console.log("\n______________________________________________________");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();