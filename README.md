<h1 align="center">Aplicação Node</h1>

<p align="center">
O Explorer é um programa completo que reúne tudo o que você precisa para se iniciar no mundo da programação web, ajudando você a desenvolver suas habilidades técnicas e comportamentais, para que você alcance seu primeiro emprego no mercado de programação.
<br/>
</p>

<p align="center">
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-icense">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## 🚀 Technologies

<br>
Este projeto foi desenvolvido com as seguintes tecnologias:

- Node
- Insominia
- Banco Sqlite

<br>

## 💻 Project

<br>
Desenvolver um aplicação em Node, o usuário cadastra um filme, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.
<br>
<br>
 Com base na modelagem de Usuário, Filme e tags. Foram criados o código para criar as tabelas, criados os processos da aplicação para criar, deletar os registros de usuário, filmes e tags. Ao salvar a senah do usuário, foi utilizado o pacote 'bcryptjs' para criptografar a senha.
Realizei validações em alguns processos:<br>
&nbsp;&nbsp;&nbsp;- Validar o email do usuário, para não permitir cadastrar o mesmo usuário. <br>
&nbsp;&nbsp;&nbsp;- Ao deletar usuário, validar se o registro está relacionado a um filme. <br>
&nbsp;&nbsp;&nbsp;- Ao deletar filme, validar se o registro está relacionado a uma tag. <br>
&nbsp;&nbsp;&nbsp;- Ao deletar uma tag, se passar o id do registro que não existe processo valida.
<br>
<br>

- [Veja o código do meu projeto](https://github.com/wilkaSantos/explorer-nvl8-desafioMinhaAplicacaoNode)

<br>

## 🔒 License

This project is licensed under the MIT.
