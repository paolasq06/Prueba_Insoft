const nombres = ["Luis", "Juan", "Pedro", "María", "Alberto", "Gabriel", "Oscar", "Carlota", "Ximena", "Patricia"]
const apellidos = ["Osorio", "Serna", "Menjura", "Zapata", "Idarraga", "Lara", "Jaramillo", "Zamora", "Ocampo", "Victoria"]
const empresas = ["Insoft", "Uno27", "Emergia"]
const profesiones = ["Asesor de Soporte", "Diseñador", "Desarrollador"]
const registros = new Array()

for(let apellido2 =0; apellido2 < 10; apellido2 ++)
{

    for(let apellido1 =0; apellido1 < 10; apellido1 ++)
    {
        for(let nombre2 = 0; nombre2 < 10; nombre2 ++)
        {
            for(let nombre1 = 0; nombre1 < 10; nombre1 ++)
            {
                let nombregenerado = nombres[nombre1]+ " "+ nombres[nombre2]+" "+ apellidos[apellido1]+" "+apellidos[apellido2]
                let empresa = empresas[parseInt(Math.random()*(3-0)+0)]
                let profesion = profesiones[parseInt(Math.random()*(3-0)+0)]
                let telefono = parseInt(Math.random()*(9999999999-10000000000)+10000000000)
                let id = (registros.length+1)
                 registros.push({
                     "id":id,
                     "nombre":nombregenerado,
                     "empresa":empresa,
                     "telefono":telefono,
                     "profesion":profesion

                 })

            }
        }
    }
}

console.log("Se generaron un total de: "+ registros.length)
console.log(registros)