/*Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
*/
        function subtract(n) {

            var y = n - 1;
            while (y != 0) {
                n = n - y;
                if (n == 0) break;
                y--;

            }

            return n;

        }
        var num = parseFloat(prompt('task1: enter number for return the subtraction of all starting from its number to 0'));
        alert('subtract(number): ' + subtract(num));

        /* Create a function called factorial
        that takes a single parameter n,
        and return the product of all integers up to n starting from 1
        Ex: factorial(2); => 2 * 1 => 2
        Ex: factorial(4); => 4 * 3 * 2 * 1 => 24*/
        
        function factorial(n) {
            var y = n - 1;
            while (y != 0) {
                n = n * y;
                if (n == 0) break;
                y--;

            }
            return n;
        }
        var num1 = parseFloat(prompt('task2: enter number for return the product of all integers up to its number starting from 1'));
        alert('subtract(number): ' + factorial(num1));

     /* 3
    Create a function called repeatStr
    that takes 2 parameters string and number,
    and return the string number time with space
    Important: the continue condition should be [somthing !== 0]
    ** Think how we can return nothing ???
    ** Important: You should dint have extra space at the end
    Ex: repeatStr("to",2); => "to to"
    Ex: repeatStr("to",4); => "to to to to"
    */
    function repeatStr(str, num) {
        let arr = [];
        while (num != 0 && str != null) {
            arr.push(str);

            num--;

        }
        return arr.join(' ');
    }
    var word = prompt('task3: enter word for return the string number time with space:');
    var num2 = prompt('task3: enter number for return the string number time with space:');
    alert(repeatStr(word, num2));

        /*
    4
    Create a function called sum2
    that take two parameter
    and will return the sumation from the first number to the second number
    Ex: sum2(4, 5); => 4 + 5 => 9
    Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
    */
        function sum2(n1, n2) {
            var sum = 0;

            if (n2 - n1 == 1 || n2 - n1 == 0) { sum = n1 + n2; }

            if (n2 - n1 != 1) {
                while (n1 < n2) {
                    sum = sum + n2;
                    n1++;


                }
            }
            return sum;

        }
        var num3 = parseInt(prompt('task4: enter first number for return summation of two numbers:'));
        var num4 = parseInt(prompt('task4: enter second number for return summation of two numbers:'));
        alert(sum2(num3, num4));
      

        /* 6
        Create a function called multiOf
        that takes 3 parameters,
        and return the first number mutiple by
        (the second one ^ the third number)
        ** Important: dont use **
        Ex: multiOf(4,10,3); => 4000
        Ex: multiOf(6,3,2); => 54
        Ex: multiOf(6,2,3); => 48
        */
        function multiOf(n1, n2, n3) {

            var out = 1;
            while (n3 > 0) {
                out *= (n2 * n2) / 2;
                n3--;

            }
            return n1 * out;
        }
        alert('Task6: first number for mutiple by the second one ^ the third number is: 2' +
            'second number to be base is: 2' +
            'third number to be exponent of the second number is: 6)  ' + 'result is:  ' +
            multiOf(2, 2, 6));
        /*
         7
         Create a function called multi2
         that take two parameter
         and will return the multiplication
         from the first number to the second number
         Ex: muti2(4, 5); => 4 * 5 => 20
         Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
         */
        function multi2(m1, m2) {
            var multi = 0;
            while (m1 != null && m2 != null) {
                multi = m1 * m2;
                m1 = null;
                m2 = null;


            }
            return multi;
        }
        var j= parseFloat( prompt('task7: enter  number for return the multiplication with second number'));
        var k= parseFloat( prompt('task7: enter number for return the multiplication with the first number'));
       alert(multi2(j, k));
        
        /*
         8
         Create a function called numberBetweenUs
         that take 2 parameters
         and return the number between them
         ** Important: You should't have extra space at the end and comma
         ** Important: the stop condition should [num1!==num2-1]
         ** hint: maybe you will have 2 if statment
         numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
         numberBetweenUs(1,3) => "2"
         */
        function numberBetweenUs(num1, num2) {
            var arr = [];
            while (num1 !== num2 - 1) {
                arr.push(num1 + 1);
                num1++;
            }
            return arr.join(',');
        }
        var f = parseFloat( prompt('task8: enter first number for return the numbers between two numbers(ex: numberBetweenUs(2,8) => "3, 4, 5, 6, 7"numberBetweenUs(1,3) => "2"):'));
        var s = parseFloat( prompt('task8: enter second number for return the numbers between two numbers numberBetweenUs(2,8) => "3, 4, 5, 6, 7"numberBetweenUs(1,3) => "2":'));
        alert(numberBetweenUs(f, s));


        /*9
        Write a function called countDown
        that takes one parameter
        and return a string represent the count down from the number
        that insert to 0
        instead of 0 you should have "done"
        between each number a comma and space
        ** you need to use recursion
        ** Important: You should't have extra space at the end and comma
        countDown(5)
        => "5, 4, 3, 2, 1, done"
        countDown(2)
        => "2, 1, done"
        countDown(7)
        => "7, 6, 5, 4, 3, 2, 1, done"
            */
        function countDown(num) {
            var arr = [num];
            while (num >= 2) {
                arr.push(num - 1);
                num--;

            }
            arr.push('Done')
            return arr.join(',');
        }
        var down = parseFloat(
            prompt('task9: enter number for  return a string represent the count down from the number that insert to 0:'));
        alert(countDown(down));

        /*
         10
         Write a function called multiplication2
         that takes two parameters
         and return the multiplication of them
         you need to use only sum
         multiplication2(5,4) => 20
         multiplication2(2,8) => 16
         multiplication2(7,6) =>  42
          */
        function multiplication2(n1, n2) {
            var multi2;
            while (n1 != null && n2 != null) {
                multi2 = n1 * n2;
                n1 = null;
                n2 = null;

            }
            return multi2;
        }
        var multi1 = parseFloat(prompt('task10: enter first number for return multiplication with second number:'));
        var multi2 = parseFloat(prompt('task10: enter second number for return multiplication with first number:'));
        alert('result is:' + multiplication2(multi1, multi2));
        /*
        11
        Write a function called mod2
        that takes two parameters
        and return the module of them
        without using %
        mod2(5,4) => 1
        mod2(2,8) => 2
        mod2(7,4) => 3
        mod2(8,4) => 0
        */
        function mod2(num1, num2) {
            parseFloat(num1);
            parseFloat(num2);
            var divison = 0.0;
            var mod = num1;
            var z = 0;

            while (num2 != z) {
                divison = parseFloat(num1) / parseFloat(num2);
                mod = parseFloat(divison) - parseInt(divison);
                mod = mod * num2;

                num2 = z;
            }

            return mod;
        }
        var d1 = parseFloat(prompt('task11: enter first number for return the module of two numbers'));
        var d2 = parseFloat(prompt('task11: enter second number for return the module of two numbers'));
        alert(mod2(d1, d2));

        /* 12
        Write a function called repeatChar
        that takes two parameters
        and return the times that this char
        without case sensetive
        repeat inside this string
        **hint: "str"[0] => "s"
        **hint: "car"[1] => "a"
        repeatChar("schOol","o") => 2
        repeatChar("school","a") => 0
        repeatChar("School","s") => 1
        try more case by yourself
        */
        function repeatChar(word,ch) {
        var i=0;
        var count=0;
        while(i<word.length){
            if(word[i]==ch)
            {count++}
            i++;
        }
        return count;
    }
      
    var w1=prompt('task12: enter word for return repeated Char ').toLowerCase();
    var w2=prompt('task12: enter char for return number of times of this Char ').toLowerCase();
      alert(repeatChar(w1, w2));
