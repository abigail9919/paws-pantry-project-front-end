const apps = [
    {
        name: "Andrew Veteto",
        email: "andrewV@gmail.com",
        date: "1/1/2023",
        time: "8:00-8:15am"
    },
    {
        name: "Justin Veteto",
        email: "justnV@Outlook.com",
        date: "1/1/2023",
        time: "8:00-8:15am"
    },
    {
        name: "Hannah Veteto",
        email: "HannahV@yahoo.com",
        date: "1/1/2023",
        time: "8:00-8:15am"
    }
]

//Var to hold incoming data to make Elements
let elements = [];
//Vars for Form
let namith = "";
let emaith = "";
let datith = "";
let timith = "";

//Makes App List Element
function eleMaker() {
    
    document.getElementById("noMoreApps").style.display = "none";

    for (let obj in apps) {
        let x = apps[obj];
        elements.push(new app(x.name, x.email, x.date, x.time));
        break;
    }
}

if (elements.length === 0) {
    document.getElementById("noMoreApps").style.display = "block";
}

function app(Name, Email, Date, Time) {

    //For Prototype
    let that = this;
    namith = Name;
    emaith = Email;
    datith = Date;
    timith = Time;

    //Constructor
    this.name = Name;
    this.email = Email;
    this.date = Date;
    this.time = Time;

    //creating elements
    this.field = document.getElementsByClassName("appList");
    this.ele = document.createElement("span"); //Holds all elements
    this.eleButton = document.createElement("button"); //Arrow Button
    this.eleItem = document.createElement("span"); //Holds info
    this.eleName = document.createElement("p");
    this.eleDate = document.createElement("p");
    this.eleTime = document.createElement("p");
    this.eleEdit = document.createElement("button");

    //Setting values
    this.eleName.innerHTML = Name;
    this.eleDate.innerHTML = Date;
    this.eleTime.innerHTML = Time;
    this.eleButton.innerHTML = ">";
    this.eleEdit.innerHTML = "edit"

    //adding styling
    this.ele.classList.add("app");
    this.eleButton.classList.add("arrowBtn");
    this.eleItem.classList.add("appListItems");
    this.eleEdit.classList.add("arrowBtn");

    //Writing elements to screen
    this.ele.append(this.eleButton);
    this.eleItem.append(this.eleName);
    this.eleItem.append(this.eleDate);
    this.eleItem.append(this.eleTime);
    this.ele.append(this.eleItem);
    this.ele.append(this.eleEdit);

    //Displays All Apps
    this.field[0].appendChild(this.ele);

    this.eleEdit.addEventListener("click", function(){
        that.popUpEdit();
    })
}

app.prototype.popUpEdit = function(){
    //Hiding appLayout
    document.getElementById("appLayout").style.display = "none"

    //Turning off regular styling
    this.ele.classList.toggle("app");
    this.eleButton.classList.toggle("arrowBtn");
    this.eleEdit.classList.toggle("arrowBtn");
    this.eleItem.classList.toggle("appListItems");

    //Adding new Styling for pop up
    this.eleButton.classList.toggle("hideStuff");

    //Creating Form for Edit
    this.inputArea = document.createElement("div");
    this.eleFormInput = document.createElement("form");
    this.eleFormInputName = document.createElement("input");
    this.eleFormInputEmail = document.createElement("input");
    this.eleFormInputDate = document.createElement("input");
    this.eleFormInputTime = document.createElement("input");

    //Setting Input Type
    this.eleFormInputEmail.type="email";
    //Need to set the value to curent value
    //this.eleFormInputDate.type="date";

    //Creating Labels for Form
    this.eleFormInputLabel = document.createElement("div");
    this.eleFormLabelName = document.createElement("h2");
    this.eleFormLabelEmail = document.createElement("h2");
    this.eleFormLabelDate = document.createElement("h2");
    this.eleFormLabelTime = document.createElement("h2");

    //Creating Buttons for From
    this.eleFormButtons = document.createElement("div");
    this.eleFormButtonUpdate = document.createElement("button");
    this.eleFormButtonCancel = document.createElement("button");
    this.eleFormButtonDelete = document.createElement("button");

    //Adding Styling for Form
    this.inputArea.classList.toggle("popUp");
    this.eleFormButtons.classList.toggle("inputFormButtons");
    this.eleFormInput.classList.toggle("inputForm");
    this.eleFormInputLabel.classList.toggle("formLabel");

    //Creating PlaceHolders
    this.eleFormInputName.placeholder = namith;
    this.eleFormInputEmail.placeholder = emaith;
    this.eleFormInputDate.placeholder = datith;
    this.eleFormInputTime.placeholder = timith;

    //Adding Words to Labels
    this.eleFormLabelName.innerHTML = "Name:";
    this.eleFormLabelEmail.innerHTML = "Email:";
    this.eleFormLabelDate.innerHTML = "Date:";
    this.eleFormLabelTime.innerHTML = "Time:";

    //Adding Words to Buttons
    this.eleFormButtonUpdate.innerHTML = "Update Appointment";
    this.eleFormButtonCancel.innerHTML = "Cancel Changes";
    this.eleFormButtonDelete.innerHTML = "Delete Appointment";

    //Clearing old element
    this.ele.innerHTML = "";

    //Writing elements to screen
        //Inputs
        this.eleFormInput.append(this.eleFormInputName);
        this.eleFormInput.append(this.eleFormInputEmail);
        this.eleFormInput.append(this.eleFormInputDate);
        this.eleFormInput.append(this.eleFormInputTime);
        //Labels
        this.eleFormInputLabel.append(this.eleFormLabelName);
        this.eleFormInputLabel.append(this.eleFormLabelEmail);
        this.eleFormInputLabel.append(this.eleFormLabelDate);
        this.eleFormInputLabel.append(this.eleFormLabelTime);
        //Action Buttons
        this.eleFormButtons.append(this.eleFormButtonUpdate);
        this.eleFormButtons.append(this.eleFormButtonCancel);
        this.eleFormButtons.append(this.eleFormButtonDelete);
        //Final
        this.inputArea.append(this.eleFormInputLabel);
        this.inputArea.append(this.eleFormInput);
        this.ele.append(this.inputArea);
        this.ele.append(this.eleFormButtons);
}