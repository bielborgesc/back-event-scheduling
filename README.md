## Descrição

O Event Scheduling é um agendador de eventos com suporte a convites. Através dessa aplicação é possivel gerenciar seus próprios eventos compostos por: nome, data de inicio e data de fim. Cada usuário possuí seus próprios eventos, mas nada impede de convidar outros usuários para os seus eventos. A aplicação tem suporte a convite para vários usuários inscritos na aplicação, lembre se que todos os convites são criados com um estado "pendente", e o usuário que você convidou, precisar aceitar esse convite.

Nessa aplicação utilizamos:

  -> Linguagem de programação: TypeScrip
  -> Framework Node: NestJs
  -> ORM -> TypeOrm
  -> Banco de Dados: MySQL

## Configurando Banco de Dados

Para evitar erros, resolvemos não exigir a utilização do docker-compose nessa etapa. Então será necessário fazer algumas configurações iniciais.

1° Caso não tenha instalado o MySQL, siga o manual de instalação: https://dev.mysql.com/doc/mysql-getting-started/en/ <br>
2° Depois de instalado e configurado, crie a base de dados no seu banco de dados com o seguinte comando:

```bash
 CREATE DATABASE event_scheduling;
```
Pronto, agora o seu banco já está apto a receber as tabelas pelo TypeORM.

## Instalação das dependências

Agora abra o terminal no mesmo nivel da aplicação para instalar as dependências, execute o seguinte comando no seu terminal: 
```bash
$ npm install
```

## Para rodar a aplicação

Vamos agora rodar a aplicação. Abra primeiro o arquivo '.env' que está no primeiro nivel de pastas da aplicação. Nele você precisará preencher os campos:

TYPEORM_HOST= <i>Coloque aqui o seu host, caso esteja rodando o mysql localmente é só colocar LOCALHOST</i>
TYPEORM_USERNAME= <i>Aqui é o username do seu banco de dados, caso você não tenha mudado na instalação, basta colocar o nome root</i>
TYPEORM_PASSWORD= <i>Aqui precisa ser inserido a senha para conectar ao seu banco de daos</i>

As outra informações já veem préviamente preenchidas pois são padrões, mas caso elas sejam diferentes das suas, fique a vontade para mudar.

Depois de instalar todas as dependência e configurar o arquivo de conexão com o banco de dados, rode o seguinte comando:
```bash
$ npm run start
```
## Endpoits da aplicação

Para facilitar os seus testes, disponibilizamos um arquivo de testes no Postman, que pode ser instalado no seguinte link: https://www.postman.com/bold-crescent-5117/workspace/public-works/collection/17256975-65cc41c5-eb90-4f8f-ab33-cb8c66b184b5?action=share&creator=17256975




