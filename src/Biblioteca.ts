import leia from 'readline-sync'
import Ebook from "./Ebook";
import Livro from "./Livro";
import LivroFisico from "./LivroFisico";

export default class Biblioteca{
  livro2:livro[] = []


    public adicionar() {
        console.log("---Cadastrabdo Livro---")
        var titulo = leia.question("Digite o titulo do livro: ");
        var autor = leia.question("Digite o autor: ");
        var tipoLivro = leia.keyInSelect(["E-book", "Livro Fisico"], 'Qual o formato do livro: ' )+1;
        var livro: Livro;
        if (tipoLivro == 1){
            var qtdpaginas = leia.questionInt("Quanta paginas contem o livro ");
            livro = new LivroFisico(titulo, autor, qtdpaginas)
        }else {
            var tamanhoArquivo = leia.questionFloat("Qual o tamanho do arquivo: ");
            livro = new Ebook (titulo, autor, tamanhoArquivo);
        }
        this.save(livro);
    }
    public removerLivro(){
        console.log("---Remover livro---");
        var ISBNLivro leia.question("Digite a categoria(ISBN) do livro: ");
        for(var i = 0; i < this.livro2.length; i++){
            if(ISBNLivro == this.livro2[i].getISBN()){
                this.livro2.splice(i, 1);
                return;
            }        
        }
    }
public buscarLivro(){
    for(var i = 0; i < this.livro2.lenght; i++){
    console.log("Qual nome do livro: ");
    this.livro2[i].exibirDetalhes();
}
}
public save (livro: livro){
    this.livro2.push(livro);
    console.log(`Livro ${livro.getISBN()} foi cadastrado`);
}
}
