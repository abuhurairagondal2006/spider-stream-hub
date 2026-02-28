export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  description: string;
  rating: number;
  poster: string;
  trailerUrl: string;
}

export interface Series {
  id: string;
  title: string;
  year: number;
  genre: string;
  description: string;
  seasons: number;
  rating: number;
  poster: string;
  trailerUrl: string;
}

export const movies: Movie[] = [
  { id: "1", title: "Spider-Man: No Way Home", year: 2021, genre: "Action", description: "Peter Parker's secret identity is revealed, forcing him to seek help from Doctor Strange. When a spell goes wrong, dangerous foes from other universes start to appear.", rating: 8.2, poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", trailerUrl: "JfVOs4VSpmA" },
  { id: "2", title: "The Batman", year: 2022, genre: "Action", description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.", rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", trailerUrl: "mqqft2x_Aa4" },
  { id: "3", title: "Thor: Ragnarok", year: 2017, genre: "Action", description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world.", rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", trailerUrl: "ue80QwXMRHg" },
  { id: "4", title: "Spider-Man: Across the Spider-Verse", year: 2023, genre: "Animation", description: "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence.", rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", trailerUrl: "cqGjhVJWtEg" },
  { id: "5", title: "The Dark Knight", year: 2008, genre: "Action", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.", rating: 9.0, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", trailerUrl: "EXeTwQWrcwY" },
  { id: "6", title: "Avengers: Endgame", year: 2019, genre: "Action", description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.", rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", trailerUrl: "TcMBFSGVi1c" },
  { id: "7", title: "Interstellar", year: 2014, genre: "Sci-Fi", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.", rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", trailerUrl: "zSWdZVtXT7E" },
  { id: "8", title: "Joker", year: 2019, genre: "Drama", description: "A mentally troubled comedian struggling with society's lack of empathy descends into madness and becomes the infamous criminal known as the Joker.", rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", trailerUrl: "zAGVQLHvwOY" },
  { id: "9", title: "Doctor Strange", year: 2016, genre: "Action", description: "A former neurosurgeon embarks on a journey of healing only to be drawn into the world of the mystic arts.", rating: 7.5, poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", trailerUrl: "HSzx-zryEgM" },
  { id: "10", title: "Black Panther", year: 2018, genre: "Action", description: "T'Challa returns home to the isolated, technologically advanced African nation of Wakanda to take his rightful place as king.", rating: 7.3, poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", trailerUrl: "xjDjIWPwcPU" },
  { id: "11", title: "Guardians of the Galaxy Vol. 3", year: 2023, genre: "Action", description: "The Guardians must protect Rocket from his past while facing a powerful new enemy who threatens the universe.", rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", trailerUrl: "u3V5KDHRQvk" },
  { id: "12", title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", description: "Paul Atreides unites with the Fremen to wage war against House Harkonnen while trying to prevent a terrible future.", rating: 8.5, poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", trailerUrl: "Way9Dexny3w" },
  { id: "13", title: "Oppenheimer", year: 2023, genre: "Drama", description: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.", rating: 8.3, poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", trailerUrl: "uYPbbksJxIg" },
  { id: "14", title: "John Wick: Chapter 4", year: 2023, genre: "Action", description: "John Wick uncovers a path to defeating The High Table, but must face a new enemy with powerful alliances across the globe.", rating: 7.7, poster: "https://image.tmdb.org/t/p/w500/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg", trailerUrl: "qEVUtrk8_B4" },
  { id: "15", title: "Inception", year: 2010, genre: "Sci-Fi", description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.", rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg", trailerUrl: "YoHD9XEInc0" },
  { id: "16", title: "The Matrix", year: 1999, genre: "Sci-Fi", description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.", rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", trailerUrl: "vKQi3bBA1y8" },
  { id: "17", title: "Deadpool & Wolverine", year: 2024, genre: "Action", description: "Deadpool is offered a place in the Marvel Cinematic Universe by the TVA, but instead recruits a reluctant Wolverine.", rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", trailerUrl: "73_1biulkYk" },
  { id: "18", title: "The Shawshank Redemption", year: 1994, genre: "Drama", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", rating: 9.3, poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", trailerUrl: "PLl99DlL6b4" },
  { id: "19", title: "Parasite", year: 2019, genre: "Thriller", description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", rating: 8.5, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", trailerUrl: "5xH0HfJHsaY" },
  { id: "20", title: "Everything Everywhere All at Once", year: 2022, genre: "Sci-Fi", description: "A middle-aged Chinese immigrant is swept up into an insane adventure where she alone can save existence by exploring other universes.", rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", trailerUrl: "wxN1T1uxQ2g" },
];

export const series: Series[] = [
  { id: "1", title: "Loki", year: 2021, genre: "Sci-Fi", description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.", seasons: 2, rating: 8.2, poster: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg", trailerUrl: "nW948Va-l10" },
  { id: "2", title: "The Boys", year: 2019, genre: "Action", description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers rather than using them for good.", seasons: 4, rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg", trailerUrl: "tcrNsIaQkb4" },
  { id: "3", title: "WandaVision", year: 2021, genre: "Drama", description: "Wanda Maximoff and Vision live idealized suburban lives, but begin to suspect that everything is not as it seems.", seasons: 1, rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/frobUz2X5Pc8OiVZU8Oo5K3NKMM.jpg", trailerUrl: "sj9J2ecsSpo" },
  { id: "4", title: "Stranger Things", year: 2016, genre: "Sci-Fi", description: "When a young boy disappears, his mother and friends must confront terrifying supernatural forces in order to get him back.", seasons: 4, rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", trailerUrl: "b9EkMc79ZSU" },
  { id: "5", title: "The Mandalorian", year: 2019, genre: "Action", description: "A lone bounty hunter in the outer reaches of the galaxy finds himself protecting an unexpected alien child.", seasons: 3, rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg", trailerUrl: "aOC8E8z_ifw" },
  { id: "6", title: "Moon Knight", year: 2022, genre: "Action", description: "Steven Grant discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector.", seasons: 1, rating: 7.3, poster: "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg", trailerUrl: "x7Krla_UxRg" },
  { id: "7", title: "House of the Dragon", year: 2022, genre: "Drama", description: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys.", seasons: 2, rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg", trailerUrl: "DotnJ7tTA34" },
  { id: "8", title: "The Last of Us", year: 2023, genre: "Drama", description: "Joel and Ellie, two survivors in a post-apocalyptic world ravaged by a fungal infection, must journey across what remains of the United States.", seasons: 2, rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", trailerUrl: "uLtkt8BonwM" },
  { id: "9", title: "Arcane", year: 2021, genre: "Animation", description: "Set in the utopian region of Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions.", seasons: 2, rating: 9.0, poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg", trailerUrl: "fXmAurh012s" },
  { id: "10", title: "Invincible", year: 2021, genre: "Animation", description: "An adult animated superhero series based on the comic book. Mark Grayson inherits his father's powers and must decide what kind of hero he wants to be.", seasons: 2, rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg", trailerUrl: "-bfAVpuko5o" },
  { id: "11", title: "Shogun", year: 2024, genre: "Drama", description: "In Japan in the year 1600, a shipwrecked English navigator becomes embroiled in a power struggle between rival feudal lords.", seasons: 1, rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg", trailerUrl: "yAN5uspO_hk" },
  { id: "12", title: "Fallout", year: 2024, genre: "Sci-Fi", description: "In a future post-apocalyptic Los Angeles brought about by nuclear decimation, survivors must navigate the wasteland.", seasons: 1, rating: 8.0, poster: "https://image.tmdb.org/t/p/w500/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg", trailerUrl: "0kQ8i2FpRDk" },
];

export const animeMovies: Movie[] = [
  { id: "a1", title: "Demon Slayer: Mugen Train", year: 2020, genre: "Animation", description: "Tanjiro and the Flame Hashira Rengoku board the Mugen Train to investigate a series of mysterious disappearances. What awaits them is a powerful demon who has devoured over 40 passengers.", rating: 8.2, poster: "https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg", trailerUrl: "ATJYac_dORw" },
  { id: "a2", title: "Your Name", year: 2016, genre: "Animation", description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. As they search for one another, a comet threatens to tear them apart forever.", rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg", trailerUrl: "xU47nhruN-Q" },
  { id: "a3", title: "Spirited Away", year: 2001, genre: "Animation", description: "During her family's move, Chihiro wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts. She must work in a bathhouse to free herself and her parents.", rating: 8.6, poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", trailerUrl: "ByXuk9QqQkk" },
];

export const genres = ["All", "Action", "Sci-Fi", "Drama", "Animation", "Thriller", "Anime"];

export const homeSections = [
  {
    title: "Trending Movies",
    items: [movies[3], movies[4], movies[5], movies[0], movies[1], movies[11], movies[16], movies[14]],
  },
  {
    title: "Popular Dramas",
    items: [movies[6], movies[7], movies[12], movies[17], movies[18], movies[19]],
  },
  {
    title: "Sci-Fi Collection",
    items: [movies[14], movies[15], movies[6], movies[11], movies[19], movies[3]],
  },
  {
    title: "Recommended For You",
    items: [movies[8], movies[9], movies[10], movies[13], movies[2], movies[16]],
  },
];
