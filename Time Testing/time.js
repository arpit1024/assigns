function findTime(seconds) {
     seconds = seconds / 1000;
      let minutes = Math.round(seconds / 60);
      seconds =  Math.round(seconds % 60);
      let hours = Math.round(minutes/60);
      minutes = Math.round(minutes%60)

   return `${hours} hours ${minutes} minutes ${seconds} seconds`
}
module.exports={findTime};