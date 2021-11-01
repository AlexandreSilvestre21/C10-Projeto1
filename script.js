
const imagem = document.getElementById('imagem');
const modo = document.getElementById('modo');
const botao = document.getElementById('botao');

botao.onclick = function (event) {
     var value = event.target.value;
     if (botao.value === 'fase1') {
         botao.value = 'fase2';
         imagem.src = 'super_homem_clark.jpg';
         modo.textContent = 'Nome: Clark Kent - Situação: Jornalista meia boca';
     }
     else if (botao.value === 'fase2') {
         botao.value = 'fase3';
         imagem.src = 'super_homem_voador.jpg';
         modo.textContent = 'Nome: Super Homem - Situação: Herói Bombado';
     }
     else if (botao.value === 'fase3') {
         botao.value = 'fase1';
         imagem.src = 'super_homem_cripto.jpg';
         modo.textContent = 'Nome: Super Homem Aposentado - Situação: Criptonado';
     }
 }

 
