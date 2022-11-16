const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");

const l = xmlDOM.querySelectorAll("student").length
let list = []
let obj = {};

for (let i = 0; i<l; i++) {
  let name = (studentNode[i].querySelector("first").textContent + " " + studentNode[i].querySelector("second").textContent);
  let age = parseInt(studentNode[i].querySelector("age").textContent);
  let prof = studentNode[i].querySelector("prof").textContent;
  
  list.push({
    name: name,
    age: age,
    prof: prof
  })
}

console.log(list)
