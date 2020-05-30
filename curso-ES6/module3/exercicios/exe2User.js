// ANTES
import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    })
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// DEPOIS
async function getUserFromGithub2(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch(err) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub2('diego3g');
getUserFromGithub2('diego3g124123');
