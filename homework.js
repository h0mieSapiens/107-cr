/*app.get('/homework', (req, res) => {
    /** 1 find the most common used number in a given array */
    var numbers = [12, 23, 98, 23, 12, 89, 0, 43, 0, 12, 77, 89, 34, 0, 1, 23, 32, 0, 89];

    /** 2 find the vowels in an give text  */
    var text = "This is just Another Exercise For You TO PRacTiCe codING soluti0Ns to probl3ms";

//});

var x = [1, 2, 3, 4, 5, 6, 7, 3, 4, 4, 5, 5, 6];
var indices = new Array(8); // colocar en vez de 8 el max del array "x"
indices.fill(0);

for (var i = 0; i < indices.length; i++) {

  for (var j = 0; j < x.length; j++) {
    if (i == x[j]) {
      indices[i] = indices[i] + 1;
    }
  }
}
console.log(indices);