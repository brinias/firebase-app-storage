document.addEventListener("DomContentLoader", event => {


const app = firebase.app();




});


function googleLogin() {

const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider)

.then(result => {

const user = result.user;
////////////////////////////document.write(`${user.displayName}`);

//var listRef = firebase.storage().ref(`users/${firebase.auth().currentUser.uid}`);
//var listRef=("kostas");
//document.getElementByName('listRef').value = listRef;




    
function myFunction() {

    let listRef = ("kostas");
      //  document.getElementById("listRef").innerHTML = "kostassssssss";
    
      document.getElementById('listRef').value = element.getAttribute('data-product-name');

    }


      window.onload=function(){
 document.getElementById("kostas1").click();
};
    

function reply_click(element) { document.getElementById('listRef').value = listRef;}    




document.write('<head><style> .button {border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;}.button2 {background-color: #008CBA;}.hidden {display:none;}</style></head><body onLoad="myFunction()"> <script> window.onload=function(){ document.getElementById("kostas1") .click();};</script><div align="center"><button class="button button2" onclick="reply_click(this)" id="kostas1")">Enter</button><div class="hidden"><form name="EventConfirmRedirection" method="post" action="https://viewer.brinias.eu/firebase/connector.php"> <input type="text" value="xxxxxxxxxx" id="kodikos" name="kodikos"></input> <input type="text" id="listRef" name="listRef"></input> <input type="submit" value="Go" id="Go"> </form> </div>');



////storageRef2 = firebase.storage().ref(`users/${firebase.auth().currentUser.uid}/${file.name}`)
////storageRef1 = firebase.storage().ref(`index.php`)

//////var uid1 = document.write(`${firebase.auth().currentUser.uid}`);

//document.write(`kostas`);




////var kokos=("kokos12");
////document.getElementById("kokos").innerHTML = uid11;


////window.location.replace("https://brinias-project2.web.app/connector.html");

////document.cookie = '${user.displayName}';

////console.log(user)
 }    )


////.catch(console.log)

}








