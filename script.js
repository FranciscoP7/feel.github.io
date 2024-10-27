document.querySelectorAll(".circular-button").forEach(button => {
    button.addEventListener("click", function() {
        const audioSrc = button.getAttribute("data-audio");
        const audioPlayer = document.getElementById("audioPlayer");

        // Se o áudio atual é o mesmo e está tocando, pause e reinicie
        if (audioPlayer.src.includes(audioSrc) && !audioPlayer.paused) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            console.log("Áudio pausado: " + audioSrc);
        } else {
            // Define a nova fonte do áudio e toca
            audioPlayer.pause(); // Pausa qualquer áudio em execução
            audioPlayer.src = audioSrc;
            audioPlayer.currentTime = 0; // Reinicia do início
            audioPlayer.play().then(() => {
                console.log("Reproduzindo: " + audioSrc);
            }).catch(error => {
                console.error("Erro ao tentar reproduzir o áudio:", error);
            });
        }
    });
});

