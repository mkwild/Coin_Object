const body = document.querySelector("body")
const textFlips = document.createElement("div")
textFlips.id = "text"
const imgFlips = document.createElement("div")
imgFlips.id = "images"
body.append(textFlips)
body.append(imgFlips)

let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let flip = Math.random()
        if (flip < 0.5) {
            this.state = 0
        } else {
            this.state = 1
        }
        return this.state
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "heads"
        } else {
            return "tails"
        }        
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = "./assets/images/heads.png"
            image.alt = this.toString()
        } else {
            image.src = "./assets/images/tails.png"
            image.alt = this.toString()
        }
        return image;
    }
};

display20Flips()

function display20Flips () {
    for (let flips = 1; flips <= 20; flips++) {
        let string = document.createElement('p')
        coin.flip()
        string.append(coin.toString())
        textFlips.append(string)
    }
}

display20Images()

function display20Images() {
    for (let flips = 1; flips <= 20; flips++) {
        coin.flip()
        imgFlips.append(coin.toHTML())
    }
}

const disclaimer = document.createElement("p")
disclaimer.append("The text flips and image flips are separate functions and will not correspond to each other")
body.append(disclaimer)