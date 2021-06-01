# Abstract Factory

<p>É um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas.</p>

## Aplicabilidade

<p>Use o Abstract Factory quando seu código precisa trabalhar com diversas famílias de produtos relacionados, mas que você não quer depender de classes concretas daqueles produtos. Eles podem ser desconhecidos de antemão ou você simplesmente quer permitir uma futura escalabilidade.</p>
<p>O Abstract Factory fornece a você uma interface para a criação de objetos de cada classe das famílias de produtos. Desde que seu código crie objetos a partir dessa interface, você não precisará se preocupar em criar uma variante errada de um produto que não coincida com produtos já criados por sua aplicação.</p>
<p>Considere implementar o Abstract Factory quando você tem uma classe com um conjunto de métodos fábrica que desfoquem sua responsabilidade principal.</p>
<p>Em um programa bem desenvolvido cada classe é responsável por apenas uma coisa. Quando uma classe lida com múltiplos tipos de produto, pode valer a pena extrair seus métodos fábrica em uma classe fábrica solitária ou uma implementação plena do Abstract Factory.</p>

## Como implementar

<ol>
  <li>Mapeie uma matriz de tipos de produtos distintos versus as variantes desses produtos.</li>
  <li>Declare interfaces de produto abstratas para todos os tipos de produto. Então, faça todas as classes concretas de produtos implementar essa interface.</li>
  <li>Declare a interface da fábrica abstrata com um conjuntos de métodos de criação para todos os produtos abstratos.</li>
  <li>Implemente um conjunto de classes fábricas concretas, uma para cada variante do produto.</li>
  <li>Crie um código de inicialização da fábrica em algum lugar da aplicação. Ele deve instanciar uma das classes fábrica concretas, dependendo da configuração da aplicação ou do ambiente atual. Passe esse objeto fábrica para todas as classes que constroem produtos.</li>
  <li>Escaneie o código e encontre todas as chamadas diretas para construtores de produtos. Substitua-as por chamadas para o método de criação apropriado no objeto fábrica.</li>
</ol>

## Prós e Contras

<table style="width:100%;">
  <thead>
    <tr style="text-align:center;">
      <td>Prós</td>
      <td>Contras</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Você pode ter certeza que os produtos que você obtém de uma fábrica são compatíveis entre si.</td>
      <td>O código pode tornar-se mais complicado do que deveria ser, uma vez que muitas novas interfaces e classes são introduzidas junto com o padrão.</td>
    </tr>
    <tr>
      <td> Você evita um vínculo forte entre produtos concretos e o código cliente.</td>
      <td></td>
    </tr>
    <tr>
      <td> Princípio de responsabilidade única. Você pode extrair o código de criação do produto para um lugar, fazendo o código ser de fácil manutenção.</td>
      <td></td>
    </tr>
    <tr>
      <td> Princípio aberto/fechado. Você pode introduzir novas variantes de produtos sem quebrar o código cliente existente.</td>
      <td></td>
    </tr>
  </tbody>
</table>