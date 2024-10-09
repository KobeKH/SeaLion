function playStartupSound() {
    let audio = document.getElementById('startup-sound');
    audio.play();
    setTimeout(showDesktop, 3000); // Wacht 3 seconden voordat het bureaublad wordt weergegeven
}

function showDesktop() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('desktop').style.display = 'flex';
    document.getElementById('start-menu').style.display = 'block';
}

function openApp(app) {
    try {
        let appWindow = window.open(app, 'appWindow', 'width=600,height=400');
        appWindow.focus();
    } catch (error) {
        showBSOD();
    }
}

function showBSOD() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('desktop').style.display = 'none';
    document.getElementById('start-menu').style.display = 'none';
    document.getElementById('bsod').style.display = 'flex';
}
