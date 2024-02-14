function Tabuada() {
  const num = window.document.getElementById("num")
  const end = document.getElementById('end')
  if (num.value.length == 0 || end.value.length == 0){
    window.alert('ERRO confira os dados!')

}else {
  const tabuada = Number(num.value)
  const limite = Number(end.value)
  let x = 0
  let r = ''
  let res = window.document.getElementById("resposta")
  res.innerHTML = `A tabuada do ${tabuada} é: <br>`
  do{
    console.log(tabuada)
    console.log(limite)
    r = x*tabuada
    res.innerHTML += `${x} x ${tabuada} = ${r} <br>`
    x++
  } while (x <= limite)
  
}
}
