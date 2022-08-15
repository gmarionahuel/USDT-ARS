


function mostrar(api){
    fetch(api)
    .then( response => response.json())
    .then( data => mostrarData(data))
    .catch( e => console.log(e));   //  los enlaces son de la forma https://criptoya.com/api/belo/usdt/ars
    let info = api.substring(25)    //  obtengo un substring del enlace donde me queden los datos que necesito (belo/usdt/ars)
    let frg = info.split("/");      //  Divido ese substring en 3 partes, truncando donde haya una barra (/) -- frg[0]="belo";frg[1]=usdt;frg[2]="ars"
    const primerCaracter = frg[0].charAt(0).toUpperCase();
    const restoDeLaCadena = frg[0].substring(1, frg[0].length);
    let exchange = primerCaracter.concat(restoDeLaCadena);      //Primer caracter mayúsucla
    let ticker = frg[1].toUpperCase();      //ticker en mayúscula
    let coinsData='';
    const mostrarData = (api)=>{
        coinsData += `
        <tr class="fila">
            <td class="exchanges">${exchange}</td><td class="ticker">${ticker}</td>
            <td class="precioCompra">${(Number(api.totalAsk)).toFixed(1).replace('.0','')}</td>
            <td class="precioVenta">${(Number(api.totalBid)).toFixed(1).replace('.0','')}</td>
            <td class="spread">${(((api.totalAsk-api.totalBid)/api.totalAsk)*100).toFixed(1)}%</td>
        </tr>
        <tr class="espacioBlancoTabla"></tr>`;
        document.getElementById('coinList').innerHTML += coinsData;
    }

}

mostrar("https://criptoya.com/api/belo/usdt/ars");
mostrar("https://criptoya.com/api/belo/usdc/ars");
mostrar("https://criptoya.com/api/belo/dai/ars");
mostrar("https://criptoya.com/api/lemoncash/usdt/ars")
mostrar("https://criptoya.com/api/ripio/usdc")
mostrar("https://criptoya.com/api/buenbit/dai/ars");
mostrar("https://criptoya.com/api/decrypto/usdt/ars");
mostrar("https://criptoya.com/api/satoshitango/usdc");
mostrar("https://criptoya.com/api/satoshitango/dai");
mostrar( "https://criptoya.com/api/letsbit/usdt/ars");
mostrar( "https://criptoya.com/api/kriptonmarket/usdt/ars");
mostrar( "https://criptoya.com/api/decrypto/usdt/ars");
mostrar("https://criptoya.com/api/decrypto/dai/ars");
mostrar("https://criptoya.com/api/argenbtc/dai/ars");
mostrar("https://criptoya.com/api/bitex/usdt/ars");
mostrar("https://criptoya.com/api/bitex/usdc/ars");
mostrar("https://criptoya.com/api/bitex/dai/ars");
mostrar("https://criptoya.com/api/bitso/usdt/ars");
mostrar("https://criptoya.com/api/bitso/dai/ars");
mostrar("https://criptoya.com/api/calypso/usdt/ars");
mostrar("https://criptoya.com/api/calypso/dai/ars");
mostrar("https://criptoya.com/api/latamex/usdt/ars");
mostrar("https://criptoya.com/api/latamex/dai/ars");
mostrar("https://criptoya.com/api/ripioexchange/usdc/ars");
mostrar("https://criptoya.com/api/tiendacrypto/dai/ars");
mostrar("https://criptoya.com/api/fiwind/usdt/ars/0.1");
mostrar("https://criptoya.com/api/lemoncash/usdc/ars");
mostrar("https://criptoya.com/api/lemoncash/dai/ars");
//mostrar("");
//mostrar("");



const tabla = document.getElementById('tabla');


function compra(){
    let preciosCompra = new Array;
    const coinsList = document.getElementById('coinList');
    let filas = coinsList.querySelectorAll('.fila');
    for(i=0;i<filas.length;i++){   
        preciosCompra[i] = filas[i].querySelector('.precioCompra'); 
    }
    
    return preciosCompra
}

function spread(){
    let listaSpread = new Array;
    const coinsList = document.getElementById('coinList');
    let filas = coinsList.querySelectorAll('.fila');
    for(i=0;i<filas.length;i++){   
        listaSpread[i] = filas[i].querySelector('.spread'); 
    }
    return listaSpread
}


function venta(){
    let preciosVenta = new Array;
    const coinsList = document.getElementById('coinList');
    let filas = coinsList.querySelectorAll('.fila');
    for(i=0;i<filas.length;i++){   
        preciosVenta[i] = filas[i].querySelector('.precioVenta');
        //console.log(preciosVenta[i].innerHTML);
        
    }
    
    return preciosVenta

}


function names(){
    let exchanges = new Array;
    const coinsList = document.getElementById('coinList');
    let filas = coinsList.querySelectorAll('.fila');
    for(i=0;i<filas.length;i++){   
        exchanges[i] = filas[i].querySelector('.exchanges');   
    }
    return exchanges;


}
function coins(){
    let tickers = new Array;
    const coinsList = document.getElementById('coinList');
    let filas = coinsList.querySelectorAll('.fila');
    for(i=0;i<filas.length;i++){   
        tickers[i] = filas[i].querySelector('.ticker');   
    }
    
    return tickers;


}


function ordenExchanges(exchanges){

    nombreExchanges = new Array;
    
    for (i=0;i<exchanges.length;i++){
        nombreExchanges[i] = exchanges[i].innerHTML;
    }
    let alfabeticamente = nombreExchanges.sort();
    
    const unicos = alfabeticamente.filter((valor, indice) => {
        return alfabeticamente.indexOf(valor) === indice;
      }
    );

    let coinsList = document.getElementById('coinList');
    document.getElementById('coinList').textContent = '';
    const aux = exchanges;

    let busqueda = '';
    for(i=0;i<unicos.length;i++){
        busqueda = unicos[i];
        let fila='';
        
        for(j=0;j<aux.length;j++)  {
            if (exchanges[j].innerHTML == busqueda){
                fila = exchanges[j].parentNode;
                coinsList.appendChild(fila);
         
            }
        }
    }

}

function ordenTicker(tickers){

    nombreTickers = new Array;
    
    for (i=0;i<tickers.length;i++){
        nombreTickers[i] = tickers[i].innerHTML;
    }
    let alfabeticamente = nombreTickers.sort();
    
    const unicos = alfabeticamente.filter((valor, indice) => {
        return alfabeticamente.indexOf(valor) === indice;
      }
    );

    let coinsList = document.getElementById('coinList');
    document.getElementById('coinList').textContent = '';
    const aux = tickers;

    let busqueda = '';
    for(i=0;i<unicos.length;i++){
        busqueda = unicos[i];
        let fila='';
        
        for(j=0;j<aux.length;j++)  {
            if (tickers[j].innerHTML == busqueda){
                fila = tickers[j].parentNode;
                coinsList.appendChild(fila);
            }
        }


        
       

    }

    

    
}

function ordenCompra(preciosCompra){
 
    numerosCompra = new Array;
    
    for (i=0;i<preciosCompra.length;i++){
        numerosCompra[i] = preciosCompra[i].innerHTML;
    }

     let ordenados = numerosCompra.sort((a,b)=> a-b);

    
    const unicos = ordenados.filter((valor, indice) => {
        return ordenados.indexOf(valor) === indice;
      }
    );
   

    let coinsList = document.getElementById('coinList');
    document.getElementById('coinList').textContent = '';
    const aux = preciosCompra;
    

    let busqueda = '';
    for(i=0;i<unicos.length;i++){
        busqueda = unicos[i];
        let fila='';
        
        for(j=0;j<aux.length;j++)  {
            if (preciosCompra[j].innerHTML == busqueda){
                fila = preciosCompra[j].parentNode;
                coinsList.appendChild(fila);
            }
        }


        
       

    }

}

function ordenVenta(preciosVenta){
 
    numerosVenta = new Array;
    
    for (i=0;i<preciosVenta.length;i++){
        numerosVenta[i] = preciosVenta[i].innerHTML;
    }

     let ordenados = numerosVenta.sort((a,b)=> a-b).reverse();

    
    const unicos = ordenados.filter((valor, indice) => {
        return ordenados.indexOf(valor) === indice;
      }
    );
   

    let coinsList = document.getElementById('coinList');
    document.getElementById('coinList').textContent = '';
    const aux = preciosVenta;
    

    let busqueda = '';
    for(i=0;i<unicos.length;i++){
        busqueda = unicos[i];
        let fila='';
        
        for(j=0;j<aux.length;j++)  {
            if (preciosVenta[j].innerHTML == busqueda){
                fila = preciosVenta[j].parentNode;
                coinsList.appendChild(fila);
            }
        }


        
       

    }

}

function ordenSpread(listaSpread){
 
    listadoSpread = new Array;
    
    for (i=0;i<listaSpread.length;i++){
        listadoSpread[i] = listaSpread[i].innerHTML.replace('%','');
        

    }

    console.log(listadoSpread);

     let ordenados = listadoSpread.sort((a,b)=> a-b);
    console.log(ordenados);

    
    const unicos = ordenados.filter((valor, indice) => {
        return ordenados.indexOf(valor) === indice;
      }
    );
    console.log(unicos);
   

    let coinsList = document.getElementById('coinList');
    document.getElementById('coinList').textContent = '';
    const aux = listaSpread;
      console.log(listadoSpread);
      console.log(unicos);
    let busqueda = '';
    for(i=0;i<unicos.length;i++){
        busqueda = unicos[i];
        let fila='';
        for(j=0;j<aux.length;j++)  {
            if (listaSpread[j].innerHTML.replace('%','') == busqueda){
                fila = listaSpread[j].parentNode;
                coinsList.appendChild(fila);
                console.log('hola');
            }
        }


        
       

    }

}


setTimeout(()=>{
   const preciosVenta = venta();
   const preciosCompra = compra();
   
},1300); 

document.getElementById('btnNombres').addEventListener('click',()=>{const exchanges = names();ordenExchanges(exchanges);});
document.getElementById('btnTickers').addEventListener('click',()=>{const tickers = coins();ordenTicker(tickers);});
document.getElementById('btnCompra').addEventListener('click',()=>{const preciosCompra = compra();ordenCompra(preciosCompra);});
document.getElementById('btnVenta').addEventListener('click',()=>{const preciosVenta = venta();ordenVenta(preciosVenta);});
document.getElementById('btnSpread').addEventListener('click',()=>{const listaSpread = spread();ordenSpread(listaSpread);});
