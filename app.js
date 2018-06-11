// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmEN8gXxK1i3ExANwY1IFDzmorMA-kN94",
  authDomain: "class-projects-dfa52.firebaseapp.com",
  databaseURL: "https://class-projects-dfa52.firebaseio.com",
  projectId: "class-projects-dfa52",
  storageBucket: "class-projects-dfa52.appspot.com",
  messagingSenderId: "618644801913"
};
firebase.initializeApp(config);

// define variable for firebase data reference
var trainData = firebase.database();

// on click function for adding train form (sending date to firebase)
$("#add-train-btn").on("click", function () {
  // Grabs user input
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
  var frequency = $("#frequencyInput").val().trim();

  console.log(firstTrain)
  console.log(trainName)
  return false
})