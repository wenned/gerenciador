// export async function validar(...args){
    
//     const [Mesa, Id] = args
//     const RespostaKEY = await fetch(`http://192.168.31.3:8080/mesa/${Mesa}/${Id}`)
//     const ResultKey = await RespostaKEY.json()
//     return ResultKey
// };

const GetItems = ["menu_bebidas","menu_frances", "menu_pasteis", "menu_suicos"]

async function carregaDados (x) {
    // const resposta = await fetch(`http://192.168.3.52:8080/${x}`);

    const resposta = await fetch(`http://192.168.31.3:8080/${x}`);
//   const resposta = await fetch(`http://192.168.2.9:8080/${x}`);

    const RESULT = await resposta.json();
    // console.log('terceiro')
    localStorage.setItem(`${x}`, JSON.stringify(RESULT));
}

export function carga(){

    for(var l=0; l < GetItems.length; l++){
        carregaDados(GetItems[l]);
    };
}