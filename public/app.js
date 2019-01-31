var config = {
    apiKey: "AIzaSyAN3WZwxKYdLT8nwxgKwhqYUPTsUxAkT0g",
    authDomain: "androidnotificationfcm.firebaseapp.com",
    databaseURL: "https://androidnotificationfcm.firebaseio.com",
    projectId: "androidnotificationfcm",
    storageBucket: "androidnotificationfcm.appspot.com",
    messagingSenderId: "849281158144"
  };
firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL; 

$("#btn-login").click(function(){        
    var email = $("#email").val();
    var password = $("#password").val(); 

    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
    result.catch(function(error){
        var errorCode = error.code; 
        var errorMessage = error.message; 

        console.log(errorCode);
        console.log(errorMessage);
    });
});
