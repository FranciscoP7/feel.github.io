// Aguarda as vozes estarem disponíveis
window.speechSynthesis.onvoiceschanged = function() {
    const voices = window.speechSynthesis.getVoices();
    // Aqui você pode listar as vozes se quiser
    voices.forEach((voice) => {
        console.log(`${voice.name} (${voice.lang})`);
    });
};

document.querySelectorAll('.circular-button').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.closest('div').previousElementSibling.textContent;
        const speech = new SpeechSynthesisUtterance(text);
        
        // Altere a voz aqui
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(voice => voice.name === 'Google português'); // Altere para a voz desejada
        if (selectedVoice) {
            speech.voice = selectedVoice;
        }

        // Verifica se já está tocando um som
        if (window.speechSynthesis.speaking) {
            // Se estiver falando, cancela
            window.speechSynthesis.cancel();
        } else {
            // Se não estiver, fala
            window.speechSynthesis.speak(speech);
        }
    });
});



