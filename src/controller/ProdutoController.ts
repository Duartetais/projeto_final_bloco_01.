import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();

    private id: number = 0;

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }

   listarTodos(): void {    
        if (this.listaProdutos.length === 0) {
            console.log("\nO estoque está vazio!");
        } else {
            for (let produto of this.listaProdutos) {
                produto.visualizar(); 
            }
        }
    }

   procurarPorId(id: number): void {
    let produto = this.buscarNoArray(id);

    if (produto != null) {
        produto.visualizar();
    } else {
     
        throw new Error(`\nO produto com ID ${id} não foi encontrado!`);
        
        }
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
           
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nProduto atualizado com sucesso!");
        } else {
           throw new Error(`\nO produto com ID ${produto.id} não foi encontrado!`);
        }
    }

    deletar(id: number): void {
        let produto = this.buscarNoArray(id);

        if (produto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1);
            console.log("\nProduto deletado!");
        } else {
            throw new Error(`\nNão foi possível deletar: Produto com ID ${id} não encontrado!`);
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}
