var MovieApp;
(function (MovieApp) {
    var Models;
    (function (Models) {
        var Person = (function () {
            function Person(id, name, age) {
                this.id = id;
                this.name = name;
                this.age = age;
            }
            Person.parse = function (obj) {
                return new Person(obj.id, obj.name, obj.age);
            };
            return Person;
        })();
        Models.Person = Person;
    })(Models = MovieApp.Models || (MovieApp.Models = {}));
})(MovieApp || (MovieApp = {}));
