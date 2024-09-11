import leia from 'readline-sync'
import Livro from "./Livro";
// tamanhoArquivo:number
// @override exibirDetalhes()
export default class Ebook extends Livro{
    tamanhoArquivo:number;
    
    constructor(
        titulo:string, 
        autor: string,
        tamanhoArquivo: number)
master(titulo, autor);
this.tamanhoArquivo = tamanhoArquivo;
}
public override exibirDetalhes(){
    console.log(`ISBN: ${this.ISBNLivro}`);
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`tamanho do arquivo: ${this.tamanhoArquivo}`);
}