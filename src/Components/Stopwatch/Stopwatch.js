import React from 'react'

// he creado un cronómetro para ajustarme a las 27h reales del reto

function Stopwatch() {

  const getRemainTime = (deadline) => {
    let now = new Date(), // nos devuelve fecha y hora que es ejecutado el código

      remainTime = (new Date(deadline) - now + 1000) / 1000, // tiempo que falta para llegar a la fecha límite. Devuleve un num en milisegundos, lo pasamos a segundos dividiendo entre 1000. Añadimos otros 1000 porque cuando haganos la actualización se demora un segundo, por tanto, si no le sumo 1000ms el contador estaría retrasado en 1s

      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2), // Puesto que la división de remainTime va a dar decimales, lo que hacemos es que redondemos con Math.floor. Para que los dígitos del 1 al 9 tengan un cero delante lo que hacemos es, primero contcatenar un cero y con slice (-2) lo que hacemos es, que indicándole un número negativo lo que hacemos que es solo coja los dos últimos dígitos, por tanto si el número restante de la operación de Math.floor son dos dígitos, 10,11...slice no actúa, en cambio si es del 9 hacia abajp, slice cogerá ese dígito y le contcaterá el cero delante

      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2), // lo dividimos en tre 60 ya que un minuto tiene 60 segundos

      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2), // lo dividimos entre 3600 segundos que tiene una hora y el resto se hace sobre 24h que tiene un día

      remainDays = Math.floor(remainTime / (3600 * 24));


    return {
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays

    }
  }

  // console.log(getRemainTime('Oct 14 2021 19:45:42 GMT+0200 '));

// función con 3 parámetros deadline(fecha límite), elem (elemnto de HTMl donde se va a imprimir), finalMessage (mensaje final)
  const countdown = (deadline, finalMessage) => {
    // const el = document.getElementById(elem);
    // actualiza cada segundo
    const timerUpDate = setInterval (() => {
      let t = getRemainTime(deadline);
      // pintamos en el HTML
     let stopwatch =  `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

      if(t.remainTime <= 1){
        clearInterval(timerUpDate) // cuando se acabe el tiempo el intervalo se detendrá
        
      }

    }, 1000)
  }
  countdown('Jun 16 2021 02:00:00 GMT+0200', 'clock', 'Tu tiempo ha terminado...oooooooohhhhh!!!!' )


  return (
    < >

    </>
  )
}

export default Stopwatch;
