let str = "abc";
// const get_permutation=(str)=>{

//     for(let i = 0; i < str.length; i++){
//         str[i] = str[i+1]
//     }


// }



for (let i =0; i<str.length; i++){
    for(let j = 0; j<str.length; j++){
        let new_string = str[i] += str[j]+str[j+1];
        console.log(new_string);
    }
    
}