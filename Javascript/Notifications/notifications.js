document.addEventListener("DOMContentLoaded", (event) => {
    if(Notification.permission !== 'granted'){
        Notification.requestPermission();
    }
})

function notifyTimerEnd() {

    if(Notification.permission === 'granted'){
        console.log('Ola');
        let notification = new Notification("Tomato Organizer", {
            body: "Your Timer is up!!"
        });
    }
}
