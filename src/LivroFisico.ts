import Livro from "./Livro";
export default class LivroFisico extends Livro{
    qtdpaginas:number;
    titulo:string;
    autor:string;
   
    constructor (titulo: string, autor:string this.qtdpaginas: number){
        this.titulo;
        this.autor;
        this.qtdpaginas = qtdpaginas;
    }

public override exibirDetalhes(){
    console.log(`ISBN: ${this.ISBNLivro}`);
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Quantidades de paginas: ${this.qtdpaginas}`);
}

}