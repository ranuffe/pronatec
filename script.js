var slideIndex = 1;
                
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {

 
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";

  if(n==1){
    TrocaLegenda("Governo pretende privatizar a Eletrobras para pagar rombo da corrupção");
    TrocaNot("O atual governo golpista neoliberal de Temer insiste em sua política de privatização em vários setores e acaba de anunciar que pretende privatizar todo o setor elétrico nacional, com a venda do maior sistema de energia do país, a Eletrobras. </p> <p> Mesmo diante de um resultado fracassado das privatizações dos anos 90, quando distribuidoras de energia elétrica, repassadas à iniciativa privada, não apresentaram nenhuma melhoria na qualidade dos serviços, de acordo com a própria Agência Nacional de Energia Elétrica – ANEEL, gerando tarifas que chegaram a um aumento de até 300% em relação às empresas que se mantiveram estatais. Constatamos que os efeitos desta política de privatização do setor elétrico e de outros setores resultam drasticamente na precarização dos serviços e da mão de obra, desemprego, queda brutal na renda e no poder de compra, assim como o aumento da carga de serviço dos trabalhadores. No Brasil, as consequências das privatizações, que já ocorreram dos anos 90 pra cá, têm sido um caos, principalmente para população mais carente e de menor renda, que deixa de ter acesso integral e facilitado aos serviços, bem como com as tarifas muito mais caras, visto que a Tarifa Social é papel do Estado, papel este que não é assumido pelos empresários, que visam apenas o lucro. Nós entendemos que a solução para tornar estas empresas mais eficientes é fazer um novo contrato dentro das mesmas premissas dos contratos com as empresas privadas, dando as mesmas condições de viabilidade. O governo, ao vender as empresas do setor elétrico, dá todas as condições ao empresariado, deixando as empresas públicas sem condições de competitividade. Nós sabemos que por traz destas artimanhas de privatização, existe o jogo de políticos que representam apenas os interesses de empresários e não da população e que hoje compõe cerca de 75% do Congresso Nacional. Por outro lado, fica claro que o Governo Temer pretende cobrir um rombo nas contas públicas, que não é culpa da população e sim da corrupção desenfreada e da legislação em causa própria, realizada por vários, governadores, deputados, senadores, prefeitos e vereadores que visam apenas o enriquecimento particular. Queremos empresas públicas com gestão eficiente, como patrimônio do povo, administrando a Tarifa Social e gerando riquezas para o desenvolvimento da Nação e não apenas com a visão econômica que é dada pelo capital privado, onde é notório, apenas para beneficiar interesses particulares – de pessoas e grupos – por meio da entrega do patrimônio público para empresários do setor, os quais, em troca, pagam a classe política com benesses de financiamento de campanhas políticas e recursos sujos de corrupção ativa e passiva. Conclamamos todos(as) os(as) trabalhadores(as) para estarmos mais mobilizados do que nunca neste momento de ameaça real de privatização das nossas empresas. Precisamos estar unidos para combater este mal e lutar pela manutenção de nossas empresas públicas, prestando serviços de qualidade à população. Postado em Chesf, Eletrobras  ");
  }
  if(n==2){
    TrocaLegenda("Após articulações, CNE consegue suspender votação da proposta de privatização da Eletrobras");
    TrocaNot("A votação do regime de urgência do PLC 77/18, que trata da privatização de cinco empresas de distribuição de energia da Eletrobras, foi suspensa no Senado na tarde desta terça-feira (7/8). A interrupção no trâmite acelerado da proposta foi fruto de intensa articulação dos dirigentes sindicais que compõem o Conselho Nacional dos Eletricitários (CNE).</p> <p> Desde antes do recesso, o CNE vem fazendo “corpo a corpo” com os senadores, mas a partir da semana passada os encontros se intensificaram. “Essas conversas diretas com os parlamentares surtiram efeito. Conseguimos mais uma vitória importante para a categoria eletricitária, assim como para toda a sociedade brasileira. Vender essas empresas significa disparar o preço da conta de luz e isso não podemos aceitar”, defende o dirigente sindical Victor Frota.</p> <p>O dirigente sindical avalia que a proposta só deve voltar a ser discutida na última semana de agosto.</p> <p>Pelo que está colocado, o governo Temer (MDB) não terá vida fácil no Senado. Os dirigentes sindicais estão muito mobilizados. Além disso, a proposta vem sofrendo revés dentro da própria base aliada e até mesmo de integrantes do próprio partido de Temer. Ontem, os senadores do MDB, Renan Calheiros (AL) e Eduardo Braga (AM) fizeram duras críticas ao PLC 77.</p> <p>“Eu, sinceramente, acho que não tem sentido o governo correndo contra o tempo na reta final para se desfazer do patrimônio público a preço de banana”, disparou o senador alagoano.</p> <p>O senador amazonense também não aliviou. “Se você privatizar dessa maneira, o consumidor pagará, de um jeito ou de outro, ou porque a conta de energia vai ficar impagável ou porque não haverá investimentos”, disse.</p> <p>A urgência para o PLC 78/18, que trata da venda do pré-sal (cessão onerosa) da Petrobras, também foi suspensa.</p> <p>FONTE: FNU ");
  }
  if(n==3){
    TrocaLegenda("Picos é a melhor cidade do Piauí para se viver; confira as 10 melhores");
    TrocaNot("Um levantamento feito entre os seguidores da nossa página no Instagram revelou que Parnaíba é a melhor cidade do Piauí para viver. Com 19% dos votos, a capital do Delta aparece em primeiro lugar na lista dos melhores municípios seguida de Campo Maior (11%) e da capital Teresina (10%).</p> <p>Apesar da maior parte dos seguidores do Clik Piauí ser de Teresina (30%), a capital ficou em terceiro lugar quando foi questionado “Qual é a melhor cidade do Piauí para viver? ”. O critério para julgar ficou livre, mas a maioria levou em consideração questões como infraestrutura do município, oferta de serviços, segurança e até mesmo aspectos turísticos e culturais.</p> <p>Além de Parnaíba, Campo Maior e Teresina, foram citadas também na ordem os municípios de Piripiri (9%), Canto do Buriti (8%), Pedro II (6%), Altos (4%), Picos (3%), Floriano (3%) e Corrente (3%).</p> <p>Tiveram 2% dos votos cada uma São Raimundo Nonato, Luís Correia, Uruçuí e Oeiras.</p> <p>Com 1% apareceram São João do Piauí, Simões, Bom Jesus, Cocal, Simplício Mendes, Paulistana, Cajueiro da Praia, Luzilândia, Francisco Santos, Barras, Elesbão Veloso, São João da Fronteira, Batalha, União, Regeneração e Pajeú do Piauí.</p> <p>Dos 10 municípios mais bem votados, 6 são da Região centro-Norte e 4 são do centro-sul.</p> <p>Entre as principais justificativas dos que optaram por Parnaíba estão: “Parnaíba, devido ao clima litorâneo”, “Parnaíba levando em consideração aspectos culturais”, “Melhor cidade do estado, litoral, praia, clima agradável; custo de vida barato e localização estratégica entre 3 importantes capitais”.</p> <p>Veja a lista:</p> <p> 1 Parnaíba (19%)</p> <p>Campo Maior (11%)</p> <p> 3Teresina (10%)</p> <p> 4Piripiri (9%)</p> <p>5 Canto do Buriti (8%)</p> <p>6 Pedro II (6%)</p> <p> 7 Altos (4%) </p> <p> 8 Picos (3%) </p> <p> 9 Floriano (3%)</p> <p> 10 Corrente (3%) ")

    }
   if(n==4){
    TrocaLegenda("Stallone aparece com arco e flecha em Rambo V");
    TrocaNot("Sylvester Stallone postou uma imagem dos bastidores de Rambo V que levou os fãs à loucura. O herói aparece empunhando seu clássico arco. Confira:.</p> <p>Seu personagem de soldado-guerreiro icônico, John Rambo, está prestes a chegar aos cinemas quase dez anos depois de sua última sequência, Rambo IV que estreou em 2008.</p> <p>+ Rambo 5: Primeiras informações sobre a trama são divulgadas</p> <p>Os personagens do longa serão Robert Siedel, um americano que desempenha um papel na operação de tráfico sexual e é sequestrado por John Rambo (Stallone) para recuperar informações sobre meninas desaparecidas. Os atores Michael Derek e Cole Gleason são cogitados para o papel.</p> <p>Rambo V ainda não tem previsão de estreia.</p> <p>Confira a homenagem do Cineclick aos 35 anos de Rambo:");
  }



}

function TrocaLegenda(txt){

  document.getElementById('legenda').innerHTML = "<h2 id ='legenda'>"+txt+"</h2> ";}


function TrocaNot(txt){

  document.getElementById('noticia').innerHTML = "<p id ='noticia'>"+txt+"</p> ";}