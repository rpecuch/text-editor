const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    // store triggered events
    window.deferredPrompt = event;
    //remove hidden class from install button
    butInstall.classList.toggle('hidden', false)
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) {
        return;
    }
    // show prompt
    promptEvent.prompt();
    // reset the deferred prompt variable
    window.deferredPrompt = null;
    // hide the install button
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // clear prompt
    window.deferredPrompt = null;
});