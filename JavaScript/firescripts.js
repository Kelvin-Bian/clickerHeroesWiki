 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDTuKHapVbNFVCbZiRHnpbkmvjGMm4WRbM",
  authDomain: "clickerheroeswiki.firebaseapp.com",
  databaseURL: "https://clickerheroeswiki.firebaseio.com",
  projectId: "clickerheroeswiki",
  storageBucket: "clickerheroeswiki.appspot.com",
  messagingSenderId: "49062357466",
  appId: "1:49062357466:web:78bef9acb5d447cf94f8e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var name, cost, dps, bonuses, skills

  //Insert Data
  function dataPrep() {
      name = document.getElementById('name').value;
      cost = document.getElementById('cost').value;
      dps = document.getElementById('dps').value;
      bonuses = document.getElementById('bonuses').value;
      skills = document.getElementById('skills').value;
  }

  //Insert Button
  document.getElementById('insert').onclick = function(){
    dataPrep();
    if(name!="") {
      firebase.database().ref('heroes/'+name).set({
        heroName: name,
        baseCost: cost,
        baseDPS: dps,
        specialBonuses: bonuses,
        skillUnlock: skills
    });
  };
}

document.getElementById('select').onclick = function(){
  dataPrep();
  firebase.database().ref('heroes').on('value', function(snapshot){
  var array = [];

  snapshot.forEach(function(childSnapshot){
    var temparray = [];
    var data = childSnapshot.val();
    temparray.push(data.heroName);
    temparray.push(data.baseCost);
    temparray.push(data.baseDPS);
    temparray.push(data.specialBonuses);
    temparray.push(data.skillUnlock);
    array.push(temparray);
  });
  let rows = array.length;
  let tablerows = document.querySelector(".contentTable").rows.length;
  if(rows+1>tablerows) {
    for (let i = 0; i < rows+1-tablerows; i++){
      let temp = document.querySelector(".contentTable").insertRow(-1);
      let cella = temp.insertCell(0);
      let cellb = temp.insertCell(1);
      let cellc = temp.insertCell(2);
      let celld = temp.insertCell(3);
      let celle = temp.insertCell(4);
    }
  }
  else if(rows<tablerows) {
    for (let i = tablerows-1-rows; i--; i>0){
      document.querySelector(".contentTable").deleteRow(-1);
    }
  }

  for (let i = 1; i<rows+1; i++) {
    for (let a = 0; a<5; a++) {
      document.querySelector(".contentTable").rows[i].cells[a].innerHTML = array[i-1][a];
    }
  }
  });
}
  //Update Button
  document.getElementById('update').onclick = function(){
    dataPrep();
    if(name!=""){
      firebase.database().ref('heroes/'+name).update({
        heroName: name,
        baseCost: cost,
        baseDPS: dps,
        specialBonuses: bonuses,
        skillUnlock: skills
    });
    }
  }
  //Delete Button
  document.getElementById('delete').onclick = function(){
    dataPrep();
    if (name!=""){
      firebase.database().ref('heroes/'+name).remove();
      }
}