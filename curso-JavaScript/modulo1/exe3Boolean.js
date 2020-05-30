function temHabilidade(skills) {
    // código aqui
    result = (skills.indexOf('Javascript') === 0) ? true : false 
    return result;
   }

var skills = ["Javascript", "ReactJS", "React Native"];
var result = temHabilidade(skills); // true ou false
console.log(result)
