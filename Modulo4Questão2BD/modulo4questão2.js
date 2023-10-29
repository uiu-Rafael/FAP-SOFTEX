// Simulação de pesquisa em um banco de dados, utilizando uma api.
const botaoPesquisar = document.querySelector("#botaoPesquisar")
const resultado = document.querySelector("#resultado")

botaoPesquisar.addEventListener("click", async () => {
    const pesquisa = document.querySelector("#pesquisa").value

    try {
        const response = await fetch(`https://source.unsplash.com/700x500/?${pesquisa}`)
            if(response.ok) {
                const imageUrl = response.url
                resultado.innerHTML = `<img src="${imageUrl}">`
                console.log("Imagem encontrada!")
            }else {
                console.error("Erro ao buscar imagem.")
            }
    }catch(err) {
        console.error(err)
    }
})