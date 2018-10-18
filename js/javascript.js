function petfinder(){
    var y = "yes";
    var n = "no";
    var question1 = prompt("Do you want an animal that is a mammal?");
    var pets = ["Rabbit","Hamster","Dog","Cat","Spider","Parrot","Snake","Fish"];
    // Yes  Answers______
    if (question1 == "yes"){
        delete pets[4];
        delete pets[5];
        delete pets[6];
        delete pets[7];
        alert("your choice of pets consists of " + pets)
        var question2 = prompt("Do you want a rodent?")
        if (question2 == "yes"){
            var pets = ["Rabbit","Hamster","Dog","Cat","Spider","Parrot","Snake","Fish"];
            delete pets[0];
            delete pets[2];
            delete pets[3];
            delete pets[4];
            delete pets[5];
            delete pets[6];
            delete pets[7];
            alert("your choice of pets consits of " + pets)
            var question3 = prompt("Do you want a animal that hops?")
            if  (question3 =="yes"){
                var pets = ["Rabbit","Hamster","Dog","Cat","Spider","Parrot","Snake","Fish"];
                delete pets[1];
                delete pets[2];
                delete pets[3];
                delete pets[4];
                delete pets[5];
                delete pets[6];
                delete pets[7]; 
            alert("your choice of pets consists of" + pets) 
            var question4 = prompt("Do you want a animal that barks?")
            }
        }
          

    }
    // NO answers_______ 
    if (question1 == "no"){
        delete pets[0];
        delete pets[1];
        delete pets[2];
        delete pets[3];
        alert("your choice of pets consists of " + pets)
        var question2 = prompt("Do you want a rodent?")
        if (question2 == no){
            var pets = ["Rabbit","Hamster","Dog","Cat","Spider","Parrot","Snake","Fish"];
            delete pets[1];
            delete pets[2];
            delete pets[3];
            delete pets[4];
            delete pets[5];
            delete pets[6];
            delete pets[7]; 
        alert("your choice of pets consists of" + pets)
        var question3 = prompt("Do you want a animal that hops?")
        if (question3 == no)
            var pets = ["Rabbit","Hamster","Dog","Cat","Spider","Parrot","Snake","Fish"];
            delete pets[0];
            delete pets[2];
            delete pets[3];
            delete pets[4];
            delete pets[5];
            delete pets[6];
            delete pets[7]; 
        alert("your choice of pets consists of" + pets)
        var question4 = prompt("Do you want a animal that barks?")
            
        }
    }    
}
petfinder();
