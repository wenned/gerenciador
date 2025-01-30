const GetItems = ["menu_bebidas","menu_frances", "menu_pasteis", "menu_suicos"]
let keyConst = []

export async function validar(...args){
    
    const [Mesa] = args
    const RespostaKEY = await fetch(`http://192.168.31.3:8080/mesas/${Mesa}`)
    const ResultKey = await RespostaKEY.json()
    return ResultKey

};

export async function libera(...args){

    const [Mesa] = args
    const Body = {'operacao':1, 'id':Mesa}

    try {
        const RespostaKEY = await fetch(`http://192.168.31.3:8080/entrada/ocuparMesa`, 
                                    {
                                        method: 'PUT',
                                        body:JSON.stringify(Body),
                                        headers: {"Content-type": "application/json; charset=UTF-8"}
                                    });
        const ResultKey = await RespostaKEY.json()
        keyConst.push(ResultKey)
        keyConst.push({"Mesa":`${Mesa}`})


        localStorage.setItem('Key', JSON.stringify(keyConst))
        sessionStorage.setItem('N_MESA', Mesa)

        while(keyConst.length){
            keyConst.pop()
        }
        return true

    } catch (error) {
        if(String(error) === 'TypeError: Failed to fetch'){
            return 3
        }
    }
}   

export function carga(){

    for(var l=0; l < GetItems.length; l++){
        carregaDados(GetItems[l]);
    };
}

async function carregaDados (x) {

    const resposta = await fetch(`http://192.168.31.3:8080/${x}`);

    const RESULT = await resposta.json();
    localStorage.setItem(`${x}`, JSON.stringify(RESULT));
}

