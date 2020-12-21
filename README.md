# Torre de Hanói

Esse repositório foi criado com o objetivo de explicar e exemplificar o quebra-cabeças "Torre de Hanói"

## Uma breve história

Também conhecida por torre do bramanismo ou quebra-cabeças do fim do mundo, a Torre de Hanói foi publicada em 1883 pelo matemático frances Edouard Lucas, com o pseudônimo Prof. N. Claus (de Siam), um anagrama de seu nome.

A publicação dizia que o jogo vinha do Vietnã, sendo popular também na China e no Japão, e acompanhava a caixa do quebra-cabeças.

A publicação também oferecia mais de um milhão de Francos para quem resolvesse o problema da Torre de Hanoi com 64 níveis, seguindo as regras do jogo, indicando que o número de movimentos seria 2 elevado a 64 menos 1 = 18.446.744.073.709.551.615 o que daria cerca de 585 bilhões de anos, se cada movimento fosse feito em 1 segundo.

Edouard Lucas foi inspirado por uma lenda Hindu que falava de um templo em Bernares, cidade santa da Índia, onde existia uma torre sagrada do bramanismo, cuja função era melhorar a disciplina mental dos monges jovens. A lenda dizia que, no início dos tempos, foi dado aos monges de um templo uma pilha de 64 discos de ouro, dispostos em uma haste, de forma que cada disco de cima fosse menor que o de baixo. A atribuição que os monges receberam foi transferir a torre, formada pelos discos, de uma haste para outra, usando a terceira como auxiliar com as restrições de movimentar um disco por vez e de nunca colocar um disco maior sobre um menor. Os monges deveriam trabalhar com eficiência noite e dia e, quando terminassem o trabalho, o templo seria transformado em pó e o mundo acabaria.

Em 1884, outro matemático frances, chamado De Parville, desenvolveu a seguinte história, que também costuma ser associada à Torre de Hanoi.

No grande templo de Benares, debaixo da cúpula que marca o centro do mundo, há uma placa de bronze sobre a qual estão fixadas três hastes de diamante, cada uma com a altura do osso cúbito do braço e tão fina como o corpo de uma abelha. Em uma dessas agulhas, Deus, quando criou o mundo, colocou 64 discos de ouro puro, de forma que o disco maior ficasse sobre a placa de bronze e os outros decrescendo até chegar ao topo. Isto se constituiu na torre do bramanismo. Dia e noite, os monges transferiam incessantemente os discos de uma haste para outra, de acordo com as leis fixas e imutáveis do bramanismo, que exigiam que os monges nunca movessem mais de um disco por vez e nunca deixassem um disco maior ficar sobre um menor. Quando os 64 discos fossem transferidos para outra haste, a torre, o templo e as pessoas seriam transformadas em pó e, com um estrondo, o mundo desapareceria.

O sol está em atividade há cerca de 5 ou 6 bilhões de anos e deverá continuar por igual período, quando entrará em colapso. Nessa fase, a camada de hélio no interior do sol terá crescido bastante e as camadas exteriores expandidas o suficiente para englobar a Terra, destruindo-a. Será o fim do mundo. Depois disso, os gases serão expelidos e o sistema solar será transformado numa estrela anã.

Como a Terra tem cerca de 5 bilhões de anos, devendo durar igual período e a Torre de Hanoi demoraria 585 bilhões de anos para ser resolvida, o mundo realmente acabará, mesmo antes do término do quebra-cabeças. Até lá a humanidade já terá sido extinta ou terá tecnologia suficiente para mudar-se de planeta.

Desde 1883, surgiram muitas edições do quebra-cabeças “Torre de Hanoi”. Várias delas, incluindo a edição inicial, podem ser vistas no PuzzleMuseum.

## Mas o que é o jogo "Torre de Hanói"?

O jogo consiste em uma base de madeira onde estão firmados três hastes verticais, e
um certo número de discos de madeira, de diâmetros diferentes, furados no centro. Vamos
chamar de A, B e C, as três hastes.

No começo do jogo os discos estão todos enfiados na haste A, em ordem decrescente
de tamanho, com o menor disco acima de todos. O objetivo é mover todos os discos, de A
para C, obedecendo às seguintes regras:
 - Somente um disco pode ser posto de cada vez.
 - Um disco maior nunca pode ser posto sobre um disco menor.

## Como saber qual o número ideal de movimentos que devo fazer?

Imagine que temos apenas um disco, nas três astes. Nesse caso é fácil, teremos apenas um movimento. Imagine agora que, temos dois discos, em uma das astes. Nesse caso (considerando que devemos levar os discos de A até B), devemos mover o disco 1 até a aste C, depois levar o disco 2 até a haste B e, por fim, levar o disco 1 até a haste B. Assim, obtemos o mínimo de movimentos necessários (3 movimentos).

Imagine agora, que temos 3 discos em uma haste A e devemos levar esses discos para uma haste B. De acordo com nossas experiências anteriores, sabemos que para mover dois discos para uma outra haste, precisamos de 3 movimentos. Portanto, devemos contabilizar 3 movimentos, para levar os dois primeiros discos até a haste C. Depois, contabilizamos 1 movimento, que levará o disco 3 até a haste B. Agora, consideramos mais 3 movimentos, para levar os dois primeiros discos até a haste B. Temos então:

3 movimentos + 1 movimento + 3 movimentos = 7 movimentos

Podemos seguir então, para 4 discos. Para movimentarmos 3 discos, precisamos de 2 x 7, mais 1 movimento, referente ao quarto disco, totalizando:

7 * 2 + 1 = 15

| Num discos | Num Jogadas |
|     1      |      1      |
|     2      |      3      |
|     3      |      7      |
|     4      |      15     |