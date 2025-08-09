const usuarioCorreto = "admin"
const senhaCorreta = "1234"

document.getElementById("btnEntrar").addEventListener("click", () => {
    const usuario = document.getElementById("txtLogin").value
    const senha = document.getElementById("txtSenha").value

    if (usuario === usuarioCorreto && senha === senhaCorreta){
        alert("✅ Login bem-sucedido")
        window.location.href = "agendamento.html"
    } else {
        alert("❌ Usuário ou senha incorretos!")
    }
})