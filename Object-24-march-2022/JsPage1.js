
        /*
        1
        Create an object represents you
        have your first name, last name, age, dob(date of birth), favorite food
        (3),favorite movie (5)
        */

        var myInfo = {
            firstName: "Ahmad",
            lastName: "Alkhalaf",
            age: 26,
            favorite_movie: { first: "war", second: "war1", third: "war2", fourth: "war3", fifth: "war4" },
            favorite_food: { first: "mansaf", second: "pizza", third: "shawrma" }
        };
        console.log(myInfo);

        //////////////////////////////////////////////////////////////////////////////////////////

        var persons = [
            { name: { first: 'John', last: 'Hob' }, age: 35 },
            { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
            { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
            { name: { first: 'Zues', last: 'Odin' }, age: 55 },
            { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
        ];
        //////////////////////////////////////////////////////////////////////////////////////////

        /*
        2
        Using the varabile persons
        Create a function called firstName
        that accept an object
        and return all the first name of the person insides
        Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
        */
        var arr = [];

        var x = Object.keys(persons).length;
        function FirstName(persons) {
            for (var i = 0; i < x; i++) {
                arr[i] = persons[i].name.first;


            }
            return arr;
        }
        console.log(FirstName(persons));
        /*
        3
        Using the varabile persons
        Create a function called averageAge
        that accept an object
        and return the average age of those persons
        Ex: averageAge(persons) => 41.2
        */

        function averageAge(persons) {
            var sum = 0;
            for (var i = 0; i < x; i++) {
                sum += persons[i].age;


            }
            var avg = sum / x;
            return  avg;

        }
        console.log('average_age = ' + averageAge(persons));




        /*
        4
        Using the varabile persons
        Create a function called olderPerson
        that accept an object
        and return the full name of the older person
        
        Ex: olderPerson(persons) => "Soso Al-Amora"
        */
        function olderPerson(persons) {
            var max = persons[0].age;
            var name;

            for (var i = 0; i < x; i++) {

                if ((persons[i].age) > max) {
                    name = persons[i].name;
                }
            }


            return name;

        }
        console.log('older_Person is:');
        console.log(olderPerson(persons));


        /*
        5
        Using the varabile persons
        Create a function called longestName
        that accept an object
        and return the full name of the person have longest full name
        
        Ex: longestName(persons) => "Soso Al-Amora"
        */
        function longestName(persons) {
            var max = persons[0].name.first.length + persons[0].name.last.length;

            var name;

            for (var i = 0; i < x; i++) {
                var maxCheck = persons[i].name.first.length + persons[i].name.last.length;

                if (maxCheck > max) {
                    name= persons[i].name;
                }
            }


            return name;
        }
        console.log('longest_Name is:');
        console.log(longestName(persons));