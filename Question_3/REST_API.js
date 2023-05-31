const express = require('express');
const fetch = require('isomorphic-fetch');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3000;


function sortStudentsByName(students) 
{
    return students.sort((a, b) => a.name.localeCompare(b.name));
}

function filterStudentsByCollege(students, college) 
{
    return students.filter(student => student.college === college);
}

// Sorting endpoint
app.get('/api/sort', (req, res) => {
    fetch('https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API')
    .then(response => response.json())
    .then(data => 
        {
            res.json(sortStudentsByName(data));
        })
});

// Filtering endpoint
app.get('/api/filter', (req, res) => {;
    const filterValue = req.query.filterValue;
    fetch('https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API')
    .then(response => response.json())
    .then(data => 
        {
            res.json(filterStudentsByCollege(data,filterValue));
        })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
