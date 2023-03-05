
function submitMadlibs(event) {
  event.preventDefault();
  
  // Get input values
  var noun1 = document.getElementById("noun1").value;
  var pluralnoun1 = document.getElementById("pluralnoun1").value;
  var ving = document.getElementById("v.ing").value;
  var verb = document.getElementById("verb").value;
  var partofbody = document.getElementById("partofbody").value;
  var adjective1 = document.getElementById("adjective1").value;
  var pluralnoun2 = document.getElementById("pluralnoun2").value;
  var adjective2 = document.getElementById("adjective2").value;

  // Generate Mad Lib story
  var story = "Once upon a time, there was a " + adjective1 + " " + noun1 + " who loved to " + ving + ". One day, while " + ving + ", they met a group of " + pluralnoun1 + " who were " + adjective2 + ". The " + pluralnoun1 + " invited the " + noun1 + " to join them in " + verb + " with their " + partofbody + ". The " + noun1 + " had never " + verb + " with their " + partofbody + " before, but they decided to give it a try. It was " + adjective2 + "! From that day on, the " + noun1 + " became friends with the " + pluralnoun1 + " and they spent their days " + ving + " and " + verb + " with their " + partofbody + "s and other " + pluralnoun2 + ".";

  // Display story
  document.getElementById("story").textContent = story;
}

function resetMadLibs() {
  // Reset input values
  document.getElementById("noun1").value = "";
  document.getElementById("pluralnoun1").value = "";
  document.getElementById("v.ing").value = "";
  document.getElementById("verb").value = "";
  document.getElementById("partofbody").value = "";
  document.getElementById("adjective1").value = "";
  document.getElementById("pluralnoun2").value = "";
  document.getElementById("adjective2").value = "";

  // Clear story
  document.getElementById("story").textContent = "";
}

function madlibBtn() {
  submitMadlibs(event);
}

