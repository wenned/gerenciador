export async function alterar(id1,id2) {

    const Body = {'idItem':id1, 'idPrincipal':id2}

    const Resposta =  await fetch(`http://192.168.31.3:8080/entrada/pedidoFeito`, 
                            {
                                method: 'PUT',
                                body:JSON.stringify(Body),
                                headers: {"Content-type": "application/json; charset=UTF-8"}
                            });
    return Resposta
};
