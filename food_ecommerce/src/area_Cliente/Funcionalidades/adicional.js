export function adicionar_adicional(...args){

    const dado = JSON.parse(localStorage.getItem('Modelo'))

    var trocar = dado;

    for(var item=0; item < dado.Itens.length; item++){

        if(typeof(dado.Itens[item]['Item']['Quantidade']) === "string"){

            var arr = []

            if(typeof(dado.Itens[item]['Item']['Adicional']) === "string"){

                arr.push(args[0]);
                trocar.Itens[item]['Item']['Adicional'] = arr;
                localStorage.setItem('Modelo', JSON.stringify(trocar));

            }else{

                if(trocar.Itens[item]['Item']['Adicional'].length === 1){

                    if(trocar.Itens[item]['Item']['Adicional'].length === 1 && trocar.Itens[item]['Item']['Adicional'][0] !== args[0]){
                        arr.push(trocar.Itens[item]['Item']['Adicional'][0])
                        arr.push(args[0]);
                        trocar.Itens[item]['Item']['Adicional'] = arr;
                        localStorage.setItem('Modelo', JSON.stringify(trocar));
                    }else{
                        trocar.Itens[item]['Item']['Adicional'] = "";
                        localStorage.setItem('Modelo', JSON.stringify(trocar));
                    };

                }else{

                    if(trocar.Itens[item]['Item']['Adicional'].length === 2){
                        
                        for(var remov=0; remov < trocar.Itens[item]['Item']['Adicional'].length; remov++){

                            if(trocar.Itens[item]['Item']['Adicional'][remov] === args[0]){
                                //
                            }else{
                                arr.push(trocar.Itens[item]['Item']['Adicional'][remov])
                            };
                        };

                        if(trocar.Itens[item]['Item']['Adicional'].length === 2){
                            trocar.Itens[item]['Item']['Adicional'] = arr;
                            localStorage.setItem('Modelo', JSON.stringify(trocar));
                        };
                    };
                };
            };
        };
    };
};