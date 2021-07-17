const form = document.getElementById('form')
const content = document.getElementById('content')
const carregando = "<p>carregando...</p>"
const pronto = "<p>pronto</p>"
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  let nome = document.getElementById('nome').value || null
  let email = document.getElementById('email').value || null
  if (nome !== null || email !== null) {
    let lead = JSON.parse(localStorage.getItem("lead") || '{}')
    content.innerHTML = carregando
    lead[nome] = email
    let convertData = JSON.stringify(lead)
    localStorage.setItem('lead', convertData)
    console.log(`
      nome: ${nome}
      email: ${email}`
    )
    setTimeout(()=> {
      content.innerHTML = `
      Muito bem ${nome}!! Seu email foi cadastrado com sucesso`
    }, 1400)
  }
})