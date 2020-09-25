/**
 * 
 * オブジェクトのソート
 * 
 */
/*
test = {
    albums: 4,
    band: "Coldplay",
    genre: "Pop"
  }, [object Object] {
    albums: 2,
    band: "Migos",
    genre: "Rap"
  }, [object Object] {
    albums: 1,
    band: "Breaking Benjamins",
    genre: "Rock"
  }]
*/
const bands = [ 
    { genre: 'Rap', band: 'Migos', albums: 2},
    { genre: 'Pop', band: 'Coldplay', albums: 4},
    { genre: 'Rock', band: 'Breaking Benjamins', 
      albums: 1}
];

const bandTimes = [ 
    { stime: '12:00', band: 'Migos', albums: 2},
    { stime: '14:00', band: 'Coldplay', albums: 4},
    { stime: '9:00', band: 'Breaking Benjamins', albums: 1}
];

  function compare(a, b) {
    const genreA = a.genre.toUpperCase();
    const genreB = b.genre.toUpperCase();
    
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }
  
  console.log(bands.sort(compare));
console.log('\ntest2\n')
  function compareTime(a, b) {
      /*
    const genreA = a.stime.toUpperCase();
    const genreB = b.stime.toUpperCase();
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
*/
    var atime = new Date(a.stime)
    var btime = new Date(b.stime)



    let comparison = 0;
    if (atime > btime) {
      comparison = -1;
    } else if (atime< btime) {
      comparison = 1;
    }
    return comparison;
  }
console.log(bandTimes.sort(compareTime))
console.log('\ntest3\n')
console.log(bandTimes.sort((a,b) => a.stime < b.stime))

console.log('\ntest4\n')
var sorted = bandTimes.sort((a,b) => {
    const aDate = new Date()
    aDate.setHours(a.stime.split(':')[0])
    aDate.setMinutes(a.stime.split(':')[1])
    console.log(aDate)
    const bDate = new Date()
    bDate.setHours(b.stime.split(':')[0])
    bDate.setMinutes(b.stime.split(':')[1])
    console.log(bDate)
    return aDate.getTime() - bDate.getTime();
});
console.log(sorted)