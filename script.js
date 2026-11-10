'use strict';
/* ---------- DADOS ---------- */
const pessoas=[
{n:'Dandara dos Palmares',d:'século XVII',g:'negra',t:'turbante',pele:'#6b3f26',cor:'#c4602f',
 s:'Guerreira do Quilombo dos Palmares, ligada à resistência à escravidão e companheira de Zumbi segundo a tradição. Há poucos documentos sobre ela, e sua memória vive muito na oralidade. Foi inscrita no Livro dos Heróis e Heroínas da Pátria em 2019.'},
{n:'Zumbi dos Palmares',d:'c. 1655 – 1695',g:'negra',t:'curto',pele:'#4a2a1a',cor:'#166d14',
 s:'Um dos principais líderes do Quilombo dos Palmares, na Serra da Barriga (atual Alagoas), maior símbolo da resistência negra colonial. Morreu em 20 de novembro de 1695, data que originou o Dia da Consciência Negra.'},
{n:'Machado de Assis',d:'1839 – 1908',g:'negra',t:'barba',pele:'#8a5a3b',cor:'#2b2b2b',
 s:'Nascido no Rio de Janeiro, em família humilde, foi contista, poeta e romancista. Fundou a Academia Brasileira de Letras e foi seu primeiro presidente. Autor de "Memórias Póstumas de Brás Cubas" e "Dom Casmurro".'},
{n:'Maria Firmina dos Reis',d:'1822 – 1917',g:'negra',t:'turbante',pele:'#7a4a30',cor:'#2a4fb8',
 s:'Maranhense, professora e escritora. Publicou "Úrsula" (1859), considerado o primeiro romance abolicionista da literatura brasileira e escrito por uma mulher negra no país.'},
{n:'Sueli Carneiro',d:'nascida em 1950',g:'negra',t:'afro',pele:'#6b3f26',cor:'#ecb142',
 s:'Filósofa, escritora e ativista do feminismo negro. Fundou, em 1988, o Geledés – Instituto da Mulher Negra, referência na luta contra o racismo e o sexismo no Brasil.'},
{n:'Ailton Krenak',d:'nascido em 1953',g:'indigena',t:'cocar',pele:'#a06a45',cor:'#c4602f',
 s:'Líder indígena do povo Krenak, ambientalista, filósofo e escritor. Autor de "Ideias para adiar o fim do mundo" (2019). Foi eleito para a Academia Brasileira de Letras em 2023, o primeiro indígena a ocupar uma cadeira na casa.'},
{n:'Sonia Guajajara',d:'nascida em 1974',g:'indigena',t:'cocar',pele:'#8a5a3b',cor:'#3fa63a',
 s:'Liderança do povo Guajajara (Maranhão) e uma das vozes da Articulação dos Povos Indígenas do Brasil (APIB). Em 2023 tornou-se a primeira ministra dos Povos Indígenas do país.'}
];
const fotos={'Dandara dos Palmares':'dandara','Zumbi dos Palmares':'zumbi','Machado de Assis':'machado','Maria Firmina dos Reis':'maria-firmina','Sueli Carneiro':'sueli','Ailton Krenak':'krenak','Sonia Guajajara':'sonia'};
const arte=['Dandara dos Palmares','Zumbi dos Palmares'];
const cultura=[
{i:'🥁',t:'Capoeira',s:'Luta, dança, música e jogo criados por africanos escravizados e seus descendentes no Brasil. A roda de capoeira foi reconhecida pela UNESCO como Patrimônio Cultural Imaterial da Humanidade em 2014.'},
{i:'🔥',t:'Metalurgia e saberes técnicos',s:'Povos africanos dominavam a fundição do ferro e a agricultura. Esse conhecimento foi essencial para a mineração, a lavoura e a construção do Brasil colonial.'},
{i:'🌿',t:'Mandioca e ciência da floresta',s:'Os povos originários domesticaram a mandioca, desenvolveram técnicas para torná-la segura para o consumo e acumularam um vasto conhecimento sobre plantas medicinais e manejo da floresta.'},
{i:'🍲',t:'Gastronomia',s:'Dendê, quiabo, vatapá e acarajé têm raiz africana. O ofício das baianas de acarajé é Patrimônio Imaterial reconhecido pelo IPHAN desde 2005.'},
{i:'🗣️',t:'Línguas e palavras',s:'Centenas de palavras do português do Brasil vêm do tupi (abacaxi, jabuticaba, capivara) e de línguas africanas (samba, cachaça, quilombo). A pensadora Lélia Gonzalez chamou esse jeito de falar de "pretuguês".'},
{i:'📚',t:'Literatura',s:'Carolina Maria de Jesus, moradora de favela, publicou "Quarto de Despejo" (1960), um dos livros mais traduzidos da literatura brasileira. Conceição Evaristo cunhou o conceito de "escrevivência".'}
];
const glossario=[
['Antirracismo','Postura ativa de combater o racismo em atitudes, leis e instituições. Não basta "não ser racista": é preciso agir contra a desigualdade racial.'],
['Racismo estrutural','Quando a desigualdade racial está embutida no funcionamento da sociedade (escola, trabalho, justiça, moradia), mesmo sem intenção individual de discriminar.'],
['Ancestralidade','Vínculo com as origens, histórias e saberes de quem veio antes de nós. Valoriza a memória de famílias e povos.'],
['Representatividade','Presença de pessoas de diferentes grupos em espaços de poder, mídia e decisão, mostrando que todos podem ocupar esses lugares.'],
['Pertencimento','Sentimento de fazer parte de um lugar ou grupo e de ser respeitado nele, com identidade e história reconhecidas.'],
['Equidade','Dar a cada pessoa o que ela precisa para ter oportunidades reais. Difere de igualdade, que trata todos do mesmo jeito.'],
['Letramento racial','Processo de aprender a identificar e enfrentar o racismo, entendendo sua história e seus efeitos hoje.'],
['Quilombo','Comunidade formada por pessoas negras que resistiam à escravidão. Muitos quilombos existem até hoje, as comunidades quilombolas.'],
['Povos originários','Povos indígenas que já habitavam as terras do Brasil antes da chegada dos europeus. Há centenas de povos e línguas.'],
['Consciência Negra','Reflexão sobre a história e a luta da população negra. Celebrada em 20 de novembro, feriado nacional desde 2024.'],
['Lei 10.639/2003','Tornou obrigatório o ensino de história e cultura afro-brasileira nas escolas. A Lei 11.645/2008 incluiu também a história e cultura indígena.'],
['Ações afirmativas','Políticas para reduzir desigualdades históricas, como as cotas raciais nas universidades (Lei 12.711/2012).']
];
const fatos=[
'O Quilombo dos Palmares resistiu por quase um século e chegou a abrigar milhares de pessoas.',
'O Brasil é o país com a maior população negra fora da África.',
'Em 2014, a roda de capoeira virou Patrimônio Cultural Imaterial da Humanidade pela UNESCO.',
'Machado de Assis fundou a Academia Brasileira de Letras, em 1897.',
'Palavras como "abacaxi", "mandioca" e "jabuticaba" vieram de línguas indígenas.'
];
const perguntas=[
{q:'Qual data é celebrada como o Dia da Consciência Negra?',o:['13 de maio','20 de novembro','7 de setembro','21 de abril'],a:1,e:'20 de novembro lembra a morte de Zumbi dos Palmares, em 1695.'},
{q:'Quem escreveu "Úrsula", primeiro romance abolicionista da literatura brasileira?',o:['Carolina Maria de Jesus','Clarice Lispector','Maria Firmina dos Reis','Cecília Meireles'],a:2,e:'Maria Firmina dos Reis publicou "Úrsula" em 1859.'},
{q:'Quem foi o primeiro presidente da Academia Brasileira de Letras?',o:['Lima Barreto','Machado de Assis','Castro Alves','Cruz e Sousa'],a:1,e:'Machado de Assis presidiu a ABL desde a sua fundação, em 1897.'},
{q:'O que significa "racismo estrutural"?',o:['Ofensas feitas apenas por indivíduos','Discriminação que existe só em leis antigas','Desigualdade racial presente no funcionamento da sociedade','Um tipo de preconceito contra construções'],a:2,e:'O racismo estrutural aparece nas instituições e nas práticas sociais do dia a dia.'},
{q:'Em que ano a roda de capoeira foi reconhecida como Patrimônio da Humanidade pela UNESCO?',o:['1888','1964','2014','2020'],a:2,e:'O reconhecimento aconteceu em 2014.'},
{q:'Qual lei obriga o ensino da história e cultura afro-brasileira e indígena?',o:['Lei Áurea','Lei do Ventre Livre','Lei 11.645/2008','Lei Eusébio de Queirós'],a:2,e:'A Lei 11.645/2008 ampliou a Lei 10.639/2003, incluindo os povos indígenas.'}
];

/* ---------- NAVEGAÇÃO ---------- */
const secoes=[...document.querySelectorAll('.sec')];
const links=[...document.querySelectorAll('[data-sec]')];
const menu=document.getElementById('menu'),burger=document.getElementById('burger');
function mostrar(id){
  if(!secoes.some(s=>s.id===id))id='inicio';
  secoes.forEach(s=>s.classList.toggle('ativa',s.id===id));
  document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('atual',a.dataset.sec===id));
  menu.classList.remove('aberto');burger.setAttribute('aria-expanded','false');
  window.scrollTo({top:0});
}
links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();history.replaceState(null,'','#'+a.dataset.sec);mostrar(a.dataset.sec)}));
burger.addEventListener('click',()=>{const o=menu.classList.toggle('aberto');burger.setAttribute('aria-expanded',o)});
window.addEventListener('hashchange',()=>mostrar(location.hash.slice(1)));

/* ---------- ILUSTRAÇÃO ESTILIZADA (SVG gerado) ---------- */
function busto(p){
  let fundo='',frente='';
  if(p.t==='afro')fundo='<circle cx="50" cy="38" r="26" fill="#1b1209"/>';
  if(p.t==='cocar'){
    for(let i=0;i<9;i++){const a=(-170+i*20)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
      fundo+=`<line x1="${50+20*c}" y1="${38+20*s}" x2="${50+42*c}" y2="${38+42*s}" stroke="${i%2?'#ecb142':'#c4302f'}" stroke-width="6" stroke-linecap="round"/>`}
    frente='<rect x="30" y="28" width="40" height="6" rx="3" fill="#ecb142"/>';
  }
  if(p.t==='turbante')frente=`<path d="M30 38Q50 4 70 38Q50 26 30 38Z" fill="${p.cor}"/><circle cx="62" cy="22" r="5" fill="${p.cor}"/>`;
  if(p.t==='curto'||p.t==='barba')frente='<path d="M31 36Q50 10 69 36Q50 24 31 36Z" fill="#1b1209"/>';
  if(p.t==='barba')frente+='<path d="M34 46Q50 80 66 46Q50 58 34 46Z" fill="#cfcfcf"/>';
  return `<svg viewBox="0 0 100 100" role="img" aria-label="Ilustração estilizada de ${p.n}"><rect width="100" height="100" fill="#24241b"/>
  ${fundo}<path d="M10 100Q12 68 50 64Q88 68 90 100Z" fill="${p.cor}"/><rect x="44" y="54" width="12" height="14" fill="${p.pele}"/>
  <ellipse cx="50" cy="42" rx="17" ry="20" fill="${p.pele}"/>${frente}
  <circle cx="43" cy="42" r="1.8" fill="#1b1209"/><circle cx="57" cy="42" r="1.8" fill="#1b1209"/><path d="M45 52Q50 56 55 52" stroke="#1b1209" stroke-width="1.5" fill="none"/></svg>`;
}

/* ---------- RENDERIZAÇÕES ---------- */
const gBio=document.getElementById('gradeBio');
function renderBio(f='todos'){
  gBio.innerHTML=pessoas.filter(p=>f==='todos'||p.g===f).map(p=>`<article class="card bio"><img src="assets/retratos/${fotos[p.n]}.jpg" alt="Retrato de ${p.n}" loading="lazy"><h3>${p.n}</h3><p class="datas">${p.d}</p>${arte.includes(p.n)?'<p class="legenda">Representação artística</p>':''}<span class="etiqueta ${p.g}">${p.g==='negra'?'Protagonismo negro':'Povos originários'}</span><p class="sobre">${p.s}</p></article>`).join('');
}
document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===b));renderBio(b.dataset.f)}));
renderBio();

document.getElementById('gradeCult').innerHTML=cultura.map(c=>`<article class="card cult"><div class="icone" aria-hidden="true">${c.i}</div><h3>${c.t}</h3><p>${c.s}</p></article>`).join('');

const gGlos=document.getElementById('gradeGlos'),busca=document.getElementById('busca'),cont=document.getElementById('contador');
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function renderGlos(){
  const q=norm(busca.value.trim());
  const r=glossario.filter(([t,d])=>norm(t+' '+d).includes(q));
  gGlos.innerHTML=r.map(([t,d])=>`<article class="card glos"><h3>${t}</h3><p>${d}</p></article>`).join('');
  cont.textContent=r.length?`${r.length} de ${glossario.length} termos`:'Nenhum termo encontrado. Tente outra palavra.';
}
busca.addEventListener('input',renderGlos);renderGlos();

/* ---------- FATO DO DIA ---------- */
const fatoEl=document.getElementById('fatoTexto');let ultimo=-1;
function novoFato(){let i;do{i=Math.floor(Math.random()*fatos.length)}while(i===ultimo);ultimo=i;fatoEl.textContent=fatos[i]}
document.getElementById('novoFato').addEventListener('click',novoFato);novoFato();

/* ---------- QUIZ ---------- */
const box=document.getElementById('quizBox');let idx=0,pts=0;
function quiz(){
  if(idx>=perguntas.length){
    const m=pts===perguntas.length?'Incrível! Você é referência no assunto.':pts>=4?'Muito bem! Você conhece bastante.':'Bom começo! Releia as seções e tente de novo.';
    box.innerHTML=`<p class="nota">${pts}/${perguntas.length}</p><h3>${m}</h3><button class="btn" id="again">Jogar de novo</button>`;
    document.getElementById('again').onclick=()=>{idx=0;pts=0;quiz()};return;
  }
  const p=perguntas[idx];
  box.innerHTML=`<div class="prog"><span>Pergunta ${idx+1} de ${perguntas.length}</span><span>Pontos: ${pts}</span></div><h3>${p.q}</h3>`+
    p.o.map((t,i)=>`<button class="opcao" data-i="${i}">${t}</button>`).join('')+'<div id="fb"></div>';
  box.querySelectorAll('.opcao').forEach(b=>b.onclick=()=>responder(+b.dataset.i));
}
function responder(i){
  const p=perguntas[idx];
  box.querySelectorAll('.opcao').forEach((b,k)=>{b.disabled=true;if(k===p.a)b.classList.add('certa');else if(k===i)b.classList.add('errada')});
  if(i===p.a)pts++;
  document.getElementById('fb').innerHTML=`<div class="explica"><b>${i===p.a?'Correto! +1 ponto.':'Quase!'}</b> ${p.e}</div><button class="btn pequeno" id="prox">${idx+1<perguntas.length?'Próxima pergunta':'Ver resultado'}</button>`;
  document.getElementById('prox').onclick=()=>{idx++;quiz()};
}
quiz();

mostrar(location.hash.slice(1)||'inicio');
