var button = document.querySelector('button')
var ul = document.querySelector('.listRepos')

function showRepo() {

    ul.innerHTML = ''
    var user = document.querySelector('input').value

    if (user !== '') {
        var url = `https://api.github.com/users/${user}/repos`
        
        var li = document.createElement('li')
        var text = document.createTextNode(`Carregando...`)

        li.appendChild(text)
        ul.appendChild(li)

        axios.get(url)
        // sucesso
        .then(function(response) {
            ul.innerHTML = ''
            
            if (response.data.length == 0){
                
                li = document.createElement('li')
                text = document
                    .createTextNode(`${user} não tem repositórios`)

                li.appendChild(text)
                ul.appendChild(li)

            } else {
                for (var i = 0; i < response.data.length; i++) {
                    repoName = response.data[i].name
                    var li = document.createElement('li')
                    var text = document.createTextNode(repoName)
    
                    li.appendChild(text)
                    ul.appendChild(li)
    
                }
            }

        })

        // error, avisa erro
        .catch(function() {
            ul.innerHTML = ''
            li = document.createElement('li')
            text = document.
                    createTextNode(`usuário ${user} não existe`)

            li.appendChild(text)
            ul.appendChild(li)
        })
        
    }
}

button.onclick = showRepo
