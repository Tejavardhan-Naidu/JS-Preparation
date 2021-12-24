var emp = [
    { id: 1, name: "Theresita", sal: 10000 },
    { id: 2, name: "Dex", sal: 20000 },
    { id: 3, name: "Chev", sal: 30000 },
    { id: 4, name: "Kellen", sal: 40000 },
    { id: 5, name: "Marlee", sal: 50000 },
    { id: 6, name: "Krishnah", sal: 60000 },
    { id: 7, name: "Gardiner", sal:70000},
  ];
  
  let display = () => {
    console.log("Test Case 123");
    let rows = "";
    for (let i = 0; i <= emp.length - 1; i++) {
      rows =
        rows +
        `<tr>  <td>${emp[i].id}</td>
      <td>${emp[i].name}</td>
      <td>${emp[i].sal}</td> </tr>`;
    }
    document.getElementById("rajni").innerHTML = rows;
  };