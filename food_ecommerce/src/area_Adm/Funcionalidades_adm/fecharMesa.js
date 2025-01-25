export async function fecharMesa(NMesa){

    const Body = {'id':NMesa, 'operacao':0}

    console.log(NMesa)
    const Resposta =  await fetch(`http://192.168.31.3:8080/entrada/alteraMesa`, 
                                {
                                    method: 'PUT',
                                    body:JSON.stringify(Body),
                                    headers: {"Content-type": "application/json; charset=UTF-8"}
                                });

    return Resposta
};
