enum MediaType {
  Unknown = 0,
  Movie = 1,
  Serie = 1 << 1,
  Animation = 1 << 2,
  Song = 1 << 3,
}

/*
// does the same as the code below
enum MediaType {
  Unknown = 0,
  Movie = 1,
  Serie = 2,
  Animation = 4,
  Song = 8,
}
*/

let filter: MediaType = MediaType.Animation;
let composedFilter: MediaType = MediaType.Animation | MediaType.Movie;

console.log(`filter: ${filter}`);
console.log(`composed filter: ${composedFilter}`);

console.log(
  `Is composedFilter Animation? ${composedFilter & MediaType.Animation}`
);

// will return the bitwise value of the tested item if contains
console.log(`Is composedFilter Movie? ${composedFilter & MediaType.Movie}`);

// will return 0 if the value dont contains the tested value
console.log(`Is composedFilter Serie? ${composedFilter & MediaType.Serie}`);

// but I prefer to convert the bitwise flags to an array
function MediaTypeBitwiseToArray(bitwiseValue: MediaType): Array<MediaType> {
  let arrFlags = new Array<MediaType>();

  if ((bitwiseValue & MediaType.Serie) > 0) arrFlags.push(MediaType.Serie);
  if ((bitwiseValue & MediaType.Animation) > 0)
    arrFlags.push(MediaType.Animation);
  if ((bitwiseValue & MediaType.Movie) > 0) arrFlags.push(MediaType.Movie);
  if ((bitwiseValue & MediaType.Song) > 0) arrFlags.push(MediaType.Song);

  return arrFlags;
}

const arrFilter = MediaTypeBitwiseToArray(composedFilter);

console.log(`Composed filter: ${arrFilter.join(",")}`);
console.log(`Composed filter - series: ${arrFilter.includes(MediaType.Serie)}`);
console.log(`Composed filter - Movie: ${arrFilter.includes(MediaType.Movie)}`);
