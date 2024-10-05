let name = ("Ermalyn C. Estabillo:");
let address = ("Bagani Campo, Candon City, Ilocos Sur:");
let age = ("19:");
let classRole = ("Student:");
let course = ("BSCS:");

 switch (course) {
    case "BSCS":
         
        switch (classRole) {
            case "Officer":
            case "Student":
            case "Teacher":
                 
                let iterations = Math.floor(age / 4);
                for (let i = 0; i < iterations; i++) {
                    alert("Name: " + name);
                }
                break;
            default:
                alert("Default for BSCS class role");
        }
        break;
    case "BSM":
         
        switch (classRole) {
            case "Officer":
            case "Student":
            case "Teacher":
                 
                let iterations = Math.floor(age / 4);
                for (let i = 0; i < iterations; i++) {
                    alert("Name: " + name);
                }
                break;
            default:
                alert("Default for BAEL class role");
        }
        break;
    default:
        alert("Default for course");
}
