import leia from 'readline-sync'
export default class Livro{
    
class Livro{
    titulo:string;
    autor:string;
    ISBNLivro: string;


    constructor(titulo:string, autor:string){
        this.titulo=titulo;
        this.autor=autor;
        this.ISBNLivro = string(math.floor(math.random() * 89999) + 100000);
    }
}
public exibirDetalhes(){
    console.log(`ISBN: ${this.ISBNLivro}`);
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`tamanho do arquivo: ${this.tamanhoArquivo}`);
}
public getISBN(){
    return this.ISBN;
}
}