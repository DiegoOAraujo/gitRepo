/*
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TotoList extends List {
  constructor() {
    super();
    this.usuario = 'Diego';
  }

  mostraUsuario(){
    console.log(this.usuario);
  }
}

const MinhaLista = new TotoList();

document.querySelector('#novotodo').onclick = function () {
  MinhaLista.add('Novo Todo');
};

MinhaLista.mostraUsuario();


//REST operator, resto das propriedades
//em um objeto
const usuario = {
  nome:'Diego',
  idade: 23,
  empresa:'Rocketseat'
};

const {nome, ...resto} = usuario; //desestruturação + rest operator(...)
console.log(nome);
console.log(resto);

//em um array
const arr = [1,2,3,4];

const[a,b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);


//parametro de função
function soma(...params){ //converte todos os parametros para um array, sem limite de param
  return params.reduce((total,next)=>total+next); //arrow function
}
console.log(soma(1,2,4));


//SPREAD operator => repassa as informações para outra estrutura de dados
//em um array
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//em um objeto
const usuario1 = {
  nome:'Diego',
  idade: 34,
  empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome:'Gabriel'};

console.log(usuario2);
*/
/*
//Template Literals
const nome = 'Diego';
const idade = 34;

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);//usa apostrofe e ${} para as variaveis
*/
//Object short syntax
//se tem uma variavel e vc criar um objeto e a propriedade tem o mesmo nome da variavel, não precisa colocar : e a variavel ex: nome:nome, fica apenas nome


