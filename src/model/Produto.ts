export abstract class Produto {
    

    private _id!: number;
    private _nome!: string;
    private _preco!: number;
    private _estoque!: number;
    private _descricao!: string;
    private _categoria!: string;
    private _marca!: string;
    private _modelo!: string;
    private _cor!: string;
    private _quantidade!: number;

    constructor(id: number, nome: string, preco: number, estoque: number, descricao: string, categoria: string, marca: string, modelo: string, cor: string, quantidade: number) {

        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
        this._descricao = descricao;
        this._categoria = categoria;
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
        this._quantidade = quantidade;
    }

    public get id(): number {
        return this._id;
    }

    public set id(valor: number) {
        this._id = valor;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(valor: string) {
        this._nome = valor;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(valor: number) {
        this._preco = valor;
    }

    public get estoque(): number {
        return this._estoque;
    }

    public set estoque(valor: number) {
        this._estoque = valor;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(valor: string) {
        this._descricao = valor;
    }

    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(valor: string) {
        this._categoria = valor;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(valor: string) {
        this._marca = valor;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(valor: string) {
        this._modelo = valor;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(valor: string) {
        this._cor = valor;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(valor: number) {
        this._quantidade = valor;
    }

    public visualizar(): void {

        console.log("\n\n______________________________________________");
        console.log("\nInformações do Produto Cadastrado:");
        console.log("__________________________________________________");
        console.log(`Id: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Preço: R$ ${this._preco}`);
        console.log(`Estoque: ${this._estoque}`);
        console.log(`Descrição: ${this._descricao}`);
        console.log(`Categoria: ${this._categoria}`);
        console.log(`Marca: ${this._marca}`);
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Quantidade: ${this._quantidade}`);

    }

}