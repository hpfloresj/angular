
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

};

interface Details {
    author: string;
    year: number;
};


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'My way',
    details: {
        author: 'Frank Sinatra',
        year: 1969
    }
}

const { author } = audioPlayer.details;
const { song: currentSong, songDuration } = audioPlayer;

console.log({currentSong, songDuration, author});


// array destructuring

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 1:', dbz[3] || 'No hay personaje'); // como sale undefined, entonces lanzamos un mensaje alternativo
const trunks = dbz[3] || 'No hay personaje';

console.log('Personaje 2:', trunks);

const [,, trunks2]: string[] = dbz;

console.log('Personaje 3:', trunks2);

const [,,,trunks3='Not found']: string[] = dbz;

console.log('Personaje 4:', trunks3);


export {};