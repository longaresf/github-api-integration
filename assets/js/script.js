const baseUrl = 'https://api.github.com/users';

const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}

const getUser = async (usuario) => {
    const url = `${baseUrl}/${usuario}`
    return request(url);
}

const getRepo = async (usuario,pagina,cantidad_repos) => {
    const url = `${baseUrl}/${usuario}/repos?page=${pagina}&per_page=${cantidad_repos}`;
    return request(url);
}

let formulario = document.querySelector('form');

formulario.addEventListener('submit',(event) => {
    event.preventDefault();

    const nombreUsuario = document.getElementById('nombre').value;
    const numeroPagina = document.getElementById('pagina').value;
    const repositoriosPorPagina = document.getElementById('repoPagina').value;

    Promise.all([getUser(nombreUsuario),getRepo(nombreUsuario,numeroPagina,repositoriosPorPagina)])
    .then(resp =>{

        let resultados = document.getElementById('resultados');

        if(resp[0].name === null){
             resultados.innerHTML = '';

            throw new Error('El usuario no existe');
        } 
        else {
            resultados.innerHTML = `<table class='container'>
                                        <tr>
                                            <th>Datos de Usuario</th>
                                            <th>Nombre de Repositorios</th>
                                        </tr>
                                        <tr>
                                            <td class='p-3'>
                                                <img src=${resp[0].avatar_url} class='avatar'>
                                                <p>Nombre de usuario: ${resp[0].name}</p>
                                                <p>Nombre de login: ${resp[0].login}</p>
                                                <p>Cantidad de Repositorios: ${resp[0].public_repos}</p>
                                                <p>Localidad: ${resp[0].location}</p>
                                                <p>Tipo de usuario: ${resp[0].type}</p>
                                            </td>
                                            <td class='p-3' id='segunda_columna'>
                                                
                                            </td>
                                        </tr>
                                    </table>`;

            for( let i=0; i < resp[1].length; i++){
                $('#segunda_columna').append(`<a href=${resp[1][i].html_url} target='_blank'>${resp[1][i].name}</a></br>`);
            }
        }
    })
    .catch(err => alert(err)); 
    document.getElementById('nombre').value = '';
    document.getElementById('pagina').value = '';
    document.getElementById('repoPagina').value = '';
})