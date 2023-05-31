function sortStudentsByName(students) 
{
    return students.sort((a, b) => a.name.localeCompare(b.name));
}

function filterStudentsByCollege(students, college) 
{
    return students.filter(student => student.college === college);
}
  
var collegeName="Bowdoin College"; //Change this to the college to search
  
document.addEventListener("DOMContentLoaded", function() 
    {
        fetch('https://cors-anywhere.herokuapp.com/https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API')
        .then(response => response.json())
        .then(data=>
            {
                console.log(sortStudentsByName(data));
                console.log(sortStudentsByName(filterStudentsByCollege(data,collegeName)));
            }
        )
        .catch(error => {
            console.log(error);
        })

    }
);