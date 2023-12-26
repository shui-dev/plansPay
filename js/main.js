const tgg = document.querySelector('.toggle');

const basicPrice = document.querySelector('#basicPrice');
const proPrice = document.querySelector('#proPrice');
const masterPrice = document.querySelector('#masterPrice');

const bP = parseFloat(basicPrice.innerText.replace(',', '.'))
const pP = parseFloat(proPrice.innerText.replace(',', '.'))
const mP = parseFloat(masterPrice.innerText.replace(',', '.'))


tgg.addEventListener('click', () => {
  tgg.classList.toggle('month')
  tgg.classList.toggle('annualy')
})

document.addEventListener('click', e => {
  const el = e.target;
  
  if(el.classList.contains('annualy')) {
    basicPrice.innerText = calcM(bP).toFixed(2).replace('.', ',');
    proPrice.innerText = calcM(pP).toFixed(2).replace('.', ',');
    masterPrice.innerText = calcM(mP).toFixed(2).replace('.', ',');
  }

  if(el.classList.contains('month')) {
    basicPrice.innerText = calcD(bP).toFixed(2).replace('.', ',');
    proPrice.innerText = calcD(pP).toFixed(2).replace('.', ',');
    masterPrice.innerText = calcD(mP).toFixed(2).replace('.', ',');
  }
})

function calcM(valor) {
  return valor * 10;
}

function calcD(valor) {
  return valor / 1;
}