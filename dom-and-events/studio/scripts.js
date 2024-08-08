// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", ()=>{
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight"); 
    let landButton = document.getElementById("landing");
    let abortMissionButton = document.getElementById("missionAbort");
    let shuttle = document.getElementById("rocket");

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    takeOffButton.addEventListener("click", ()=>{
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff.")
        if(confirmation){
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            spaceShuttleHeight.textContent = altitude;
            rocketPosY = 10;
        shuttle.style.marginBottom = rocketPosY + "px";
        }
    });

    landButton.addEventListener("click", ()=>{
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.textContent = altitude;
        rocketPosY = 0;
        shuttle.style.marginBottom = rocketPosY + "px";
    });
        
    abortMissionButton.addEventListener("click", ()=>{
        let confirmation = confirm("Confirm that you want to abort the mission.")
        if(confirmation){
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            altitude = 0;
            spaceShuttleHeight.textContent = altitude;
            rocketPosY = 0;
            shuttle.style.marginBottom = rocketPosY + "px";
        }
    });

    document.addEventListener("click", (event)=>{

        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
        
        if (event.target.id === "left" && rocketPosX > -(bkgWidth/2 -40)) {
            rocketPosX -= 10;
            shuttle.style.marginLeft = rocketPosX + "px";
        }
        if (event.target.id === "right"  && rocketPosX < (bkgWidth/2 -40)) {
            rocketPosX += 10;
            shuttle.style.marginLeft = rocketPosX + "px";
        }
        if (event.target.id === "down" && altitude > 0) {
            altitude -= 10000;
            rocketPosY -= 10;
            shuttle.style.marginBottom = rocketPosY + "px";
            spaceShuttleHeight.textContent = altitude;
        }
        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            altitude += 10000;
            shuttle.style.marginBottom = rocketPosY + "px";
            spaceShuttleHeight.textContent = altitude;
        }
    });
});
