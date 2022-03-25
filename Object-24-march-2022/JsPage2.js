   /*
      7
      Create a function called repeatWord
      that accept a string
      and return an object that represents how many times each word repeat
      ** no matter it is upper case or lower case
      ** Search on MDN about something can cut the string to words??
      Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
      => {
        my:1,
        name:2,
        is:1,
        alex:1,
        mercer:1,
        class:1,
        b:1,
        baba:1,
        mama:1,
        hello:3
      }
      */


      function countRepeated(out) {
        /*new variable*/
        let words = out.split(" ");
        let list = {};

        for (let i = 0; i < words.length; i++) {
            let Count = list[words[i]];
            let count = Count ? Count : 0;
            list[words[i]] = count + 1;
        }
        return list;
    }
    var input = 'hello Hello HELLO my name is Ahmad ali salem alkhalaf good bye Good BYE';
    console.log('repeatWords:');
    console.log(countRepeated(input.toLowerCase()));

    /*
    8
    Create a function called repeatChar
    that accept a string
    and return an object that represents how many times each char repeat
    ** no matter it is upper case or lower case
    ** Search on MDN about something can cut the string to char??
    
    Ex: repeatChar("mamababatetacedo")
    => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
    */

    function repeatChar(out) {
        /*same variable*/
        this.out = out.split(" ");
        let list = {};

        for (let i = 0; i < out.length; i++) {
            let CharCount = list[out[i]];
            let count = false;

            if (CharCount)
                count = CharCount;
            else
                count = 0;

            list[out[i]] = count + 1;
        }
        return list;
    }
    var word = 'Ahmad ali cv salem alkhalaf AA vv cc';
    console.log('repeatChars:');
    console.log(repeatChar(word.toLowerCase()));


    /*
    9
    Create a function called selectFromObject
    that accept an object and an array
    and return an object have the key that inside the array
    
    Ex: selectFromObject({a: 1, cat: 3},

     ['a', 'cat', 'd'])

    =>  {a: 1, cat: 3}
    */
    function selectFromObject(arr, obj) {
        const newArray = [];
        for (i = 0; i < arr.length; i++) {
            for (variable in obj) {

                if (arr[i] == variable) {

                    console.log(`{${variable} : ${obj[variable]}}`);

                }
            }
        }
        return 0;
    }
    console.log('selectFromObject:');
    selectFromObject(['a', 'b', 'c'], { a: 1, b: 3, k: 5 });