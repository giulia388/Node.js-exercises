function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

 luckyDraw("Joe") 

.then(
    function(value) {
        console.log(value);
    },
    function(reason) {
        console.log(reason);
    }
)
.catch(error => {
    console.log(error.message);
})
 

luckyDraw("Caroline") 

.then(
    function(value) {
        console.log(value);
    },
    function(reason) {
        console.log(reason);
    }
)
.catch(error => {
    console.log(error.message);
})


luckyDraw("Sabrina") 

.then(
    function(value) {
        console.log( value);
    },
    function(reason) {
        console.log(reason);
    }
)
.catch(error => {
    console.log(error.message);
}) 