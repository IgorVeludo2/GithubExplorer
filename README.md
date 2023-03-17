# Projeto Web trilha Ignite 2021 cap 1

# Single page aplication SPA

Uma aplicação SPA indica que se eu for consumir determinado recurso no site (navegar para uma tela diferente), não será necessário recarregar toda a aplicação, apenas o conteúdo clicado é mudado 
entre uma tela e outra.

# Pasta Public

É a pasta que conterá o arquivo html root da aplicação, entre outros arquivos públicos.

# Babel

O arquivo babel é responsável em compilar todo o código para ecmascript para que todos os browsers
consigam entender.
Bundle geralmente é o nome do arquivo dado para a conversao do codigo que o babel faz.

@babel/preset-react é a dependencia que faz o babel entender html dentro do javascript.

# Webpack

Webpack é resposável por transformar os arquivos importados na aplicação, em um arquivo em que o browser entenda.

Ex:

Arquivo .sass será transformado em .css pelo webpack
Arquivos de imagens como svg será transformado em .png ou .jpg, entre outros.

O webpack usa o babel-loader para funcionar em conjunto com o babel.

mode: 'development', - indica que o webpack será rodado em desenvolvimento, fazendo com que ele compile menos coisas e seja mais rápido.

Webpack-dev-server é responsável por gerar o novo bundle da aplicação sempre que o arquivo raiz for modificado. (Linhas 14 a 17 do webpack)

devtool: 'eval-source-map' - é resposável por deixar os erros no front-end mais fáceis de ler quando se clica no erro (em desenvolvimento e produção eles diferem).

# Ambiente dev e prod para o Webpack

Usar o process.evn para verificar o tipo de ambiente, e na variavel mode e na variavel devtool, dentro do webpack, colocar a seguinte linha:

```js
const isDevelopment = process.env.NODE_ENV !== 'production'

mode: isDevelopment ? 'development' : 'production'
devtool: isDevelopment ? 'eval-source-map' : 'source-map'
```

# Configurando estilização utilizando o webpack

Instalar as dependencias

```js
npm i style-loader css-loader -D  
```

Na linha de rules do webpack.config, colocar:

```js
{
  test: /\.css$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader']
}
```