/*
Aliases in Typescropt are a way to give a name to a type in Typescript.
Aliases are useful when you want to create a new type that is a combination of other types.

Aliases can be used to create new types that are a combination of other types.
Example
*/
type PublishedYear = number;
type AnimeName = string;
type AnimeGenre = string;

type Anime = {
  published: PublishedYear;
  name: AnimeName;
  genre: AnimeGenre;
};

const publishedYear: PublishedYear = 2000;
const nameName: AnimeName = "Naruto";
const animeGenre: AnimeGenre = "Action";

const naruto: Anime = {
  published: publishedYear,
  name: nameName,
  genre: animeGenre,
};

console.log(naruto);
