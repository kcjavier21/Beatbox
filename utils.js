/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc) {
        this.audioSrc = new Audio(audioSrc);
        //console.log(this.audioSrc);
    }

    play = () => {
        this.audioSrc.currentTime = 0;
        this.audioSrc.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        console.log(this.element);
        this.setButtonColorInHTML();
        this.setTransitionEndListener();
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
        //this.select();
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
        
    }

    setTransitionEndListener = () => {
        this.element.addEventListener('transitionend', () => {
            this.deselect();
        })
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        
        this.element.style.backgroundColor = 'transparent';
        this.element.style.boxShadow = 'none';
    }
}