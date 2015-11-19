namespace MovieApp.Models {

    export class Movie {

        public id: number;
        public title: string;
        public releaseDate: Date;

        constructor(id:number, title:string, releaseDate:string) {
            this.id = id;
            this.title = title;
            this.releaseDate = new Date(releaseDate);
        }

        public static parse(obj): Movie {
            return new Movie(obj.id, obj.title, obj.releaseDate);
        }
    }
}