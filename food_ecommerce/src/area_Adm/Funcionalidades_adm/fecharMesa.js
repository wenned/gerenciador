export async function fecharMesa(NMesa){

    const Body = [{'Id':NMesa, 'Operacao':0}]

    const Resposta =  await fetch(`http://192.168.31.3:8080/entrada/alterarStatusMesa`, 
                                {
                                    method: 'PUT',
                                    body:JSON.stringify(Body),
                                    headers: {"Content-type": "application/json; charset=UTF-8"}
                                });

    return Resposta
};
