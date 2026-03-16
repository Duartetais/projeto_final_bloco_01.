import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {

    private _custoInterno: number;

    constructor(
        id: number,
        nome: string,
        preco: number,
        estoque: number,
        descricao: string,
        categoria: string,
        marca: string,
        modelo: string,
        cor: string,
        quantidade: number,
        custoInterno: number,
    ) {
        super(id, nome, preco, estoque, descricao, categoria, marca, modelo, cor, quantidade);
        this._custoInterno = custoInterno;
    }
    public get custoInterno() {
        return this._custoInterno;
    }

    public set custoInterno(valor: number) {
        this._custoInterno = valor;
    }

    public visualizar(): void {

        super.visualizar();
        console.log("Custo Interno: " + this._custoInterno);

    }

}