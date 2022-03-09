
let seuVotoPara = document.querySelector('.d-1-1 span')

let cargo = document.querySelector('.d-1-2 span')

let descricao = document.querySelector('.d-1-4')

let aviso = document.querySelector('.d-2')

let lateral = document.querySelector('.d-1-right')

let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0
let numeroAtual = ''

function comecarEtapa(){
    let etapa = etapas[etapaAtual]
    let numeroHtml = ''

    for(let i=0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>'
        } else {
            numeroHtml += '<div class="numero"></div>'
        }
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual]

    let candidato = etapa.candidatos.filter(item => {
        if(item.numero === numeroAtual){
            return true
        } else {
            return false
        }
    })
        if(candidato.length > 0) {
            candidato = candidato[0]
            seuVotoPara.style.display = 'flex'
            aviso.style.display = 'flex'
            descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`

            let fotosHtl = ''
            for(let i in candidato.fotos){
                fotosHtl = `<div class="d-1-right"><div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="" srcset="">${candidato.fotos[i].legenda}</div></div>`
            }
            lateral.innerHTML = fotosHtl
        } else {
            seuVotoPara.style.display = 'flex'
            aviso.style.display = 'flex'
            descricao.innerHTML = '<div class="voto--nulo">VOTO NULO</div>'
        }

    console.log(candidato)
}

function clicou(numeroTeclado) {
    let numeroUrna = document.querySelector('.numero.pisca')
    if(numeroUrna != null){
        numeroUrna.innerHTML = numeroTeclado
        numeroAtual = `${numeroAtual}${numeroTeclado}`
        numeroUrna.classList.remove('pisca')
        if(numeroUrna.nextElementSibling !== null) {
            numeroUrna.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }

        
    }
}

function branco(){

}

function corrige(){

}

function confirma(){

}

comecarEtapa()