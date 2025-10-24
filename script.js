const btn = document.querySelector('#btn');
btn.addEventListener('click',verificar)

function verificar(){
  var date = new Date()
  var year = date.getFullYear()
  var fAno = document.querySelector('input#txtano')
  var res = document.querySelector('div#res')
  res.style.display = 'grid'
  if(fAno.value.length == 0 ||  Number(fAno.value) > year){
    alert('[ERRO] Verifique os dados e tente novamente!')
  }else {
    var fsex = document.getElementsByName('radsex')
    var age = year - Number(fAno.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
      if(age >=0 && age <10){
        // criança
        img.setAttribute('src','foto-bebe-m.jpg')
        gen = 'Bebê menino'
      }else if (age < 21){
        // Jovem
        img.setAttribute('src','foto-jovem-m.jpg')
        gen = 'Homem'
      }else if(age <50){
        // Adulto
        img.setAttribute('src','foto-adulto-m.jpg')
        gen = 'Homem'
      }else{
        // Idoso
        img.setAttribute('src','foto-idoso-m.jpg')
        gen = 'Homem'
      }
    }else if (fsex[1].checked){
      if(age >=0 && age <10){
        // criança
        img.setAttribute('src','foto-bebe-f.jpg')
        gen = 'bebê menina'
      }else if (age < 21){
        // Jovem
        img.setAttribute('src','foto-jovem-f.jpg')
        gen = 'Mulher'
      }else if(age <50){
        // Adulto
        img.setAttribute('src','foto-adulto-f.jpg')
        gen = 'Mulher'
      }else{
        // Idosos
        img.setAttribute('src','foto-idoso-f.jpg')
        gen = 'Mulher'
      }
    }
    res.textContent = `Detectamos ${gen} com ${age} anos`
    res.appendChild(img)

  }
}