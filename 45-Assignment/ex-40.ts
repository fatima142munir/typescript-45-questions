/**Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */

type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Making three albums without the number of tracks
let album1 = make_album("Atif Asam", "2012");
let album2 = make_album("Rahat fateh", "top10");
let album3 = make_album("Hadiqa", "Hadiqa Old");

// Printing the albums to verify
console.log(album1);
console.log(album2);
console.log(album3);

// Making one album with the number of tracks
let album4 = make_album("Noor jahan", "18s", 17);

// Printing the album with number of tracks to verify
console.log(album4);
