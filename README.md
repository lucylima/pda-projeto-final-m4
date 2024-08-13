# Vagas de Emprego para Pessoas Marginalizadas

## Descrição

Esta API conecta pessoas marginalizadas, especialmente aquelas de periferias sem formação técnica ou profissional, com oportunidades de educação e emprego na área de programação. O foco é capacitar essas pessoas através de cursos gratuitos e oferecer suporte para inserção no mercado de trabalho, atendendo a grupos como mulheres vítimas de abuso doméstico, pessoas LGBT, negros e pessoas de baixa renda.

## Benefícios

- **Capacitação**: Oferecimento de cursos gratuitos para pessoas de periferia e grupos marginalizados.
- **Oportunidades**: Conexão dessas pessoas com empresas que buscam promover a inclusão social, oferecendo vagas de emprego e criando uma rede de contatos.

## Problema e Solução

### Problema

Pessoas marginalizadas enfrentam dificuldades em encontrar emprego devido à falta de oportunidades e de capital social. Elas muitas vezes não possuem acesso à educação técnica ou profissional, o que limita suas chances no mercado de trabalho.

### Solução

A API oferece um sistema integrado que conecta essas pessoas com empresas dispostas a oferecer oportunidades de trabalho. Além disso, a API inclui um sistema de cursos gratuitos para especialização e um mecanismo de certificação. O diferencial é a implementação de um quiz para simular uma prova e certificar a aptidão dos candidatos após a conclusão dos cursos.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express.js, Nodemon, Sequelize, Cors
- **Banco de Dados**: PostgreSQL
- **Hospedagem**: 
  - Banco de dados hospedado no Supabase
  - API hospedada no Render

## Funcionalidades

### Admin

- Listar administradores
- Adicionar novo administrador
- Atualizar informações do administrador
- Deletar administrador

### Estudantes

- Listar estudantes
- Adicionar novo estudante
- Atualizar informações do estudante
- Deletar estudante

### Cursos

- Listar cursos
- Adicionar novo curso
- Atualizar informações do curso
- Deletar curso

### Vagas de Emprego

- Listar vagas de emprego
- Adicionar nova vaga
- Atualizar informações da vaga
- Deletar vaga

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/vagas-emprego-marginalizadas.git
   cd vagas-emprego-marginalizadas
