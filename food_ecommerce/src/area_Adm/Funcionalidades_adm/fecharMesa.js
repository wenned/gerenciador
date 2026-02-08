export async function fecharMesa(NMesa){

    const Body = {'id':NMesa, 'operacao':0}

    const Resposta =  await fetch(`http://192.168.31.35:8080/entrada/alteraMesa`, 
                                {
                                    method: 'PUT',
                                    body:JSON.stringify(Body),
                                    headers: {"Content-type": "application/json; charset=UTF-8"}
                                });

    return Resposta
};



export async function fecthMesas(...args){

    const user = process.env.REACT_APP_COUCHDB_USER;
    const pass = process.env.REACT_APP_COUCHDB_PASSWORD;

    if (!user || !pass) {
        throw new Error('Credenciais do CouchDB não definidas nas variáveis de ambiente.');
    }

    const auth = btoa(`${user}:${pass}`);

    
    const response = await fetch(`${process.env.REACT_APP_COUCHDB_URL}/${args[0]}/_all_docs?include_docs=true`, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.status}`);
    }

    const data = await response.json();
    const formattedData = data.rows.map(row => row.doc);

    return formattedData;
}
