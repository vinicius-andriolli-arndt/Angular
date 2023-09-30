import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'novo';
  private nome: string;
  public titulo : String = "Olá macacos";

  // ela carrega por primeiro ao carregar a tela 
  ngOnInit(): void {
    console.log("Hello word")
  
  }
  funcao(): void{
    const variavel:  number = 10;
    const texto: String = "texto";

    let teste = 10;

    console.log('botão clicado')

  }
  retornamedia(): void{
    const one = Math.floor(Math.random() * 11);
    const two = Math.floor(Math.random() * 11);
    const three = Math.floor(Math.random() * 11);

    const average = (one + two + three) / 3;

    console.log(`1st number: ${one}, 2nd number: ${two}, 3rd number: ${three}`);
    console.log(`média: ${average}`);

    
  }
  verificaString(dado: String){

  }
}

