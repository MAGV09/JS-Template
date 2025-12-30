fetch('heroes.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.squadName); // "Super hero squad"
    console.log(data.members[0].name); // "Molecule Man"
  });