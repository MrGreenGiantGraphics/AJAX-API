namespace MovieApp.Models {

    export class Person {
        
        public id: number;
        public name: string;
        public age: number;

        constructor(id: number, name: string, age: number) {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        public static parse(obj): Person {
            return new Person(obj.id, obj.name, obj.age);
        }
    }
}