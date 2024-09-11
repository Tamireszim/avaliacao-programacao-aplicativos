import leia from 'readline-sync'
import Biblioteca from './Biblioteca';

var biblioteca1 = new Biblioteca();

var opcao = 0;
do {
    console.log("------------MENU------------")
    opcao = leia.keyInSelect(["Adicionar Livro", "Remover Livro", "Buscar Livro", "Mostrar Detalhes"]) + 1;
    switch (opcao) {
        case 1:
            biblioteca1.adicionarLivro();
            break;
        case 2:
            biblioteca1.removerLivro();
            break;
        case 3: 
            biblioteca1.buscarLivro();
            break;
        // case 4: 
        //     biblioteca1.mostrarDetalhes();
        //     break;
        default:
            console.log("Sair");
            break;
    }
} while (opcao !== 0);