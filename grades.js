const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    a : 0,
    b : 0,
    c : 0,
    d : 0,
    f : 0
}; 

//for loop to populate the grades object by counting the score that match the criteria in each if clause
for (let i = 0; i < scores.length; i++) {
    // if (scores[i] >= 90)  {
    //     grades.a ++;
    // } else if (scores[i] >= 80) {
    //     grades.b ++; 
    // }   else if (scores[i] >= 70) {
    //     grades.c ++; 
    // }   else if (scores[i] >= 60) {
    //     grades.d ++; 
    // }   else  {
    //     grades.f ++; 
    // }

//tried a switch statement instead, and used brackets instead of dot notation for grades to see if it would populate the object without me having to prepopulate it with 0 values for each grade group
    switch (true)  {
        case (scores[i] >= 90) :
            grades["a"]++;
            break;
        case (scores[i] >= 80) :
            grades["b"]++;
            break;
        case (scores[i] >= 70) :
            grades["c"]++;
            break;
        case (scores[i] >= 60) :
            grades["d"]++;
            break;
        case (scores[i] >= 0) :
            grades["f"]++;
            break;
    }

}


console.log(grades);