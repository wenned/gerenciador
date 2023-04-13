const GetItems = ["menu_bebidas","menu_frances", "menu_pasteis", "menu_suicos"]
let keyConst = []

export async function validar(...args){
    
    const [Mesa, Id] = args
    const RespostaKEY = await fetch(`http://192.168.31.3:8080/mesa/${Mesa}/${Id}`)
    const ResultKey = await RespostaKEY.json()
    return ResultKey
};

export async function libera(...args){

    const [Mesa] = args

    try {
        // const RespostaKEY = await fetch(`http://192.168.3.52:8080/${Mesa}/abrir`)
        const RespostaKEY = await fetch(`http://192.168.31.3:8080/mesa/${Mesa}/abrir`)
        const ResultKey = await RespostaKEY.json()
    
        keyConst.push(ResultKey)
        keyConst.push({"Mesa":`${Mesa}`})
        
        if(ResultKey === false){
            return false
        }else{
            localStorage.setItem('Key', JSON.stringify(keyConst))
            sessionStorage.setItem('N_MESA', Mesa)
            return true
        }

    } catch (error) {
        if(String(error) === 'TypeError: Failed to fetch'){
            return 3
        }
    }
}   


async function carregaDados (x) {

    // const resposta = await fetch(`http://192.168.3.52:8080/${x}`);
    const resposta = await fetch(`http://192.168.31.3:8080/${x}`);
    //const resposta = await fetch(`http://192.168.2.9:8080/${x}`);

    const RESULT = await resposta.json();
    localStorage.setItem(`${x}`, JSON.stringify(RESULT));
}

export function carga(){

    for(var l=0; l < GetItems.length; l++){
        carregaDados(GetItems[l]);
    };
}
