const SortByMarks = (students) =>
    students.sort((a, b) => a.marks.math - b.marks.math);

const students = [
    {name: "john", marks: {math: 85}},
    {name: "alice", marks: {math: 95}},
    {name: "bob", marks: {math: 75}},
]
console.log(SortByMarks(students));