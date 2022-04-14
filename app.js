// Funciones
/*Funcion Validar Stream*/
function vstream (x){ 
    while (isNaN(x) === true || x < '1' || x >'5' ) {
        if (isNaN(x) === true){
            x = Number(prompt("ESO NO ES UN NUMERO\nElegí uno de los siguientes servicios de streaming ingresando del 1 al 5:\n1. Netflix \n 2. Disney+\n 3. Star+\n 4. HBO Max\n 5. Amazon  Prime"));    
        }
        else {
        x = Number(prompt("VALOR INCORRECTO \nElegí uno de los siguientes servicios de streaming ingresando del 1 al 5:\n1. Netflix \n 2. Disney+\n 3. Star+\n 4. HBO Max\n 5. Amazon  Prime"));
            }
}
return x;
}

/*Funcion Validar pack*/
function vpack (x){ 
while (isNaN(x) === true || x < '1' || x >'3') {
    if (isNaN(x) === true){
        x = Number(prompt("ESO NO ES UN NUMERO\nElegí el tipo de pack ingresando 1, 2 o 3:\n1. Lite (1 usuario permitido): $100 por mes.\n2. Standard (hasta 3 usuarios permitidos y más contenido): $200 por mes.\n3. Premium (hasta 5 usuarios permitidos y todo el contenido): $500 por mes."));    
    }
    else {
    x = Number(prompt("VALOR INCORRECTO \nElegí el tipo de pack ingresando 1, 2 o 3:\n1. Lite (1 usuario permitido): $100 por mes.\n2. Standard (hasta 3 usuarios permitidos y más contenido): $200 por mes.\n3. Premium (hasta 5 usuarios permitidos y todo el contenido): $500 por mes."));
        }
}
return x;
}

/*Funcion Descuento y valor*/
function desc (x){ 
let ln = prompt("Tenés 'Club La Nacion'? Ingresá 1 para 'Sí' o 2 para 'No':")
while (isNaN(ln) === true || ln < '1' || ln >'2' ) {
    if (isNaN(ln) === true){
        ln = Number(prompt("ESO NO ES UN NUMERO\nTenés 'Club La Nacion'? Ingresá 1 para 'Sí' o 2 para 'No':"));    
                            }
    else {
    ln = Number(prompt("VALOR INCORRECTO \nTenés 'Club La Nacion'? Ingresá 1 para 'Sí' o 2 para 'No':"));
         }
}
if (ln == 1)
{
    alert ( "Felicitaciones! Tenés %20 de descuento!")
    if (x == '1'){
        return (100 * 0.8);
    } else if (x == '2')
    {
        return (200 * 0.8);
    }
        else {
            return (500 * 0.8);
        }
}
else 
{
    alert ("Que mal... si tuvieras 'Club La Nación tendrías %20 de descuento...")
    if (x == '1'){
        return (100);
    } else if (x == '2')
    {
        return (200);
    }
        else {
            return (500);
        }
    
}
}

class Stream { constructor (nom, pack){
    this.nom = nom;
    this.pack = pack;
}
}

//Simulador de Streaming


const stream1 = new Stream (prompt("Bienvenido al simulador de servivios de streaming.\nPor favor, elegí uno de los siguientes ingresando del 1 al 5:\n 1. Netflix \n 2. Disney +\n 3. Star +\n 4. HBO Max\n 5. Amazon Prime"), 
prompt ("Elegí el tipo de pack ingresando 1, 2 o 3:\n1. Lite (1 usuario permitido): $100 por mes.\n2. Standard (hasta 3 usuarios permitidos y más contenido): $200 por mes.\n3. Premium (hasta 5 usuarios permitidos y todo el contenido): $500 por mes."));
s = vstream(stream1.nom);
f = vpack (stream1.pack);

if (s == 1)
{
alert ("El precio total de Netflix para vos sería de $" + desc (f));
}
else {
if(s == 2)
{        
    alert ("El precio total de Disney+ para vos sería de $" + desc (f));
}
else{
    if (s == 3)
    {
        alert ("El precio total de Star+ para vos sería de $" + desc (f));
    }
    else{
        if (s == 4)
        {
            alert ("El precio total de HBO Max para vos sería de $" + desc (f));
        }
        else{
            if (s == 5) 
            {
                alert ("El precio total de Amazon Prime para vos sería de $" + desc (f));
            }
        }
    }
}
}

