function changeAudio(){
    var audio = document.getElementById("audio");
    // audio.src = document.getElementById("song2").getAttribute('data-value');
    document.getElementById("source1").src = 'audio2.mp3'
    audio.load();
}

function changeAudioByList(sel){
    if (sel.value == '2') {
        var audio = document.getElementById("audio");
        // audio.src = document.getElementById("song2").getAttribute('data-value');
        document.getElementById("source1").src = 'audio2.mp3'
        audio.load();
        audio.play(); // cái này cho nó tự play thôi
    }

    if (sel.value == '1') {
        var audio = document.getElementById("audio");
        // audio.src = document.getElementById("song2").getAttribute('data-value');
        document.getElementById("source1").src = 'audio1.mp3'
        audio.load();
    }
}