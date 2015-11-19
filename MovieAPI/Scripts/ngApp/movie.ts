namespace MovieApp.Models {

    export class Movie {

        public id: number;
        public title: string;
        public releaseDate: Date;
        public producers: Person[];
        public directors: Person[];
        public actors: Person[];

        constructor(title: string, releaseDate: string, id?: number, producers?: Person[], directors?: Person[], actors?: Person[]) {
            this.id = id;
            this.title = title;
            this.releaseDate = new Date(releaseDate);
            this.producers = producers;
            this.directors = directors;
            this.actors = actors;
        }

        public static parse(obj): Movie {

            let producers: Person[] = obj.producers.map((person) => {
                return Person.parse(person);
            });
            let directors: Person[] = obj.directors.map((person) => {
                return Person.parse(person);
            });
            let actors: Person[] = obj.actors.map((person) => {
                return Person.parse(person);
            });

            return new Movie(obj.title, obj.releaseDate, obj.id, producers, directors, actors);
        }
    }
}