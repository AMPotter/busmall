var productsArray = [];
var totalVotes = 0;

function Product (name, filePath, id, description) {
    this.name = name;
    this.filePath = filePath;
    this.id = id;
    this.description = description;
    this.voteCount = 0;
    this.timesShown = 0;

    productsArray.push(this);
}

function productInit() {
    var bag = new Product('Bag', './images/bag.jpg', 'bag', 'A bag that looks like a little robot.');
    var banana = new Product('Banana Slicer', './image/banana.jpg', 'banana', 'Use for nefarious purposes.');
    var bathroom = new Product('iPad Poop Mount', './images/bathroom.jpg', 'bathroom', 'Scroll endlessly through your newsfeed atop your porcelain throne.');
    var boots = new Product('Boots', './images/boots.jpg', 'boots', 'Terrible boots.');
    var breakfast = new Product('All In One Breakfast Maker', './images/breakfast.jpg', 'breakfast', 'Perfect for the tiny closet you live in.');
    var bubblegum = new Product('Meatball Gumballs', './images/bubblegum.jpg', 'bubblegum', 'It disappointingly just tastes like regular gum.');
    var chair = new Product('Chair', './images/chair.jpg', 'chair', 'Ergonomic to a fault.');
    var cthulhu = new Product('Cthulhu', './images/cthulhu.jpg', 'cthulhu', 'False idol.');
    var dogDuck = new Product('God\'s Mistake', './images/dog-duck.jpg', 'dogduck', 'Imported from the Island of Dr. Moreau.');
    var dragon = new Product('Dragon Meat', './images/dragon.jpg', 'dragon', 'A whole can of it.');
    var pen = new Product('Fancy Pens', './images/pen.jpg', 'pen', 'Upscale utensils.');
    var petSweep = new Product('Dog Shoes', './images/pet-sweep.jpg', 'petsweep', 'He will clean up his own poop with his paws.');
    var scissors = new Product('Pizza Shears', './images/scissors.jpg', 'scissors', 'Not useful.');
    var shark = new Product('Child Erasure Service', './images/shark.jpg', 'shark', 'We will make him disappear.');
    var sweep = new Product('Filthy Baby', './images/sweep.png', 'sweep', 'The final frontier of child labor lawbreaking.');
    var tauntaun = new Product('Taun Taun', './images/tauntaun.jpg', 'tauntaun', 'Juicy innards for sleeping in.');
    var unicorn = new Product('Unicorn Meat', './images/unicorn.jpg', 'unicorn', 'Now with more bits. Gluten free.');
    var usb = new Product('Adult Toy', './images/usb.gif', 'usb', 'You\'re sick.');
    var waterCan = new Product('Ergonomic Water Bottle', './images/water-can.jpg', 'watercan', 'Drink up, idiot.');
    var wineGlass = new Product('Booze Egg', './images/wine-glass.jpg', 'wineglass', 'For slurpin\'.');
}

var tracker = {
    //snag all the DOM elements
    choice1name: document.getElementById('choice1name')[0],
    choice2name: document.getElementById('choice2name')[0],
    choice3name: document.getElementById('choice3name')[0],
    
    choice1img: document.getElementById('choice1img')[0],
    choice2img: document.getElementById('choice2img')[0],
    choice3img: document.getElementById('choice3img')[0],

    choice1description: document.getElementById('choice1description')[0],
    choice2description: document.getElementById('choice2description')[0],
    choice3description: document.getElementById('choice3description')[0],

    interfaceSection: document.getElementById('interface'),
    voteCount: 0,

    randomIndex: function(arr) {
        return Math.floor(Math.random() * arr.length);
    },

    getIndeces: function(arr) {
        var selectedIndeces = [];
        while (selectedIndeces.length < 3) {
            var item = this.randomIndex(arr);

            //getting indexOf
            if (selectedIndeces.indexOf(item) === -1) {
                selectedIndeces.push(item);
            }

                //using indexOf for loop
            // if (selectedIndeces.length === 0) {
            //     selectedIndeces.push(item);
            // }

            // for (var i = 0; i < selectedIndeces.length; i++) {
            //     if (selectedIndeces[i] === item) {
            //         break;
            //     } else {
            //         selectedIndeces.push(item);
            //         break;
            //     }
            // }
        }
        
        return selectedIndeces;

    },

    displayOptions: function() {
        //Get three random products
        var randomProducts = this.getIndeces(productsArray);
        var index1 = randomProducts[0];
        var index2 = randomProducts[1];
        var index3 = randomProducts[2];

        var product1 = productsArray[index1];
        var product2 = productsArray[index2];
        var product3 = productsArray[index3];

        //append to DOM
        choice1name.innerText = product1.name;
        choice2name.innerText = product2.name;
        choice3name.innerText = product3.name;

        choice1name.id = product1.id;
        choice2name.id = product2.id;
        choice3name.id = product3.id;
    },

    totalVotes: function(id) {
        this.voteCount += 1;

        //for loop
        // for (var i = 0; i < productsArray.length; i++) {
        //     var product = productsArray[i];
        //     if (product.id === id) {
        //         product.voteCount += 1;
        //     }
        // }

        //for each loop
        productsArray.forEach(function foo (product) {
            if (product.id === id) {
                product.voteCount += 1;
            }
        });

        if (this.totalVotes > 25) {
            this.showResults();
        }
    },

    showResults: function() {
        this.interfaceSection.removeEventListener('click', voteHandler)
    }

}

tracker.interfaceSection.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id !== 'interface') {
        tracker.totalVotes(event.target.id);
        tracker.displayOptions();
    }
}

productInit();
tracker.displayOptions();