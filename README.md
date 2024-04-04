# sistema-ERP-academico
# Sistema-ERP-academico
Site desenvolvido para ajudar microempreendedores para divulgar e gerenciar seu nogócio acadêmico.

## Sobre
O site ERP acadêmico é uma plataforma dedicada à divulgação e gestão de microempreendedores. Ele oferece ferramentas para promover os serviços dos microempreendedores, além de funcionalidades de gestão, como controle de alunos. Com uma interface amigável e intuitiva, o site facilita a interação entre microempreendedores e clientes, promovendo o crescimento e a visibilidade dos negócios.

## Ferramenta
- GIT 2.44.0
- VSCode
- Thunder Client

## Tecnologias
- ReactJS v18
- Tailmind v3.0
- TypeScript v5.3.3
- Laravel v10.0

# Guilde Style

## Variáveis
Sempre utilizar o [Snake_case](https://www.theserverside.com/definition/Snake-case) para nomear nomes de variaveis.
### Exemplo:
```TypeScript
// BOA!
meu_teste: any;
alert_Button = false;

// RUIM!
meuteste: any;
alertButton = false;

```

## Funções

Para nomear funções utilizar o [camelCase](https://coodesh.com/blog/dicionario/o-que-e-camelcase/) para nomear funções.
### Exemplo:
```TypeScript
adicionarItem(item_id: any){
   console.log(item_id);
  }
```

## Classes
Sempre use class. Evite manipular prototype diretamente.
Para nomear classes utilizar o [pascalCase](http://www.codigoexpresso.com.br/Home/Postagem/110) para nomear classes.
### Exemplo:
```TypeScript
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
```
## Arrays
Use a sintaxe literal para criação de array.
### Exemplo:
```TypeScript
const items = [];
```
## Objetos
Use a sintaxe literal para criação de objeto.
### Exempo: 
```TypeScript
const items = {};
```
