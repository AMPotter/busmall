var productsArray = []

function Product (name, filePath, description) {
    this.name = name;
    this.filePath = filePath;
    this.description = description;
    this.voteCount = 0;
    this.timesShown = 0;

    productsArray.push(this);
}

function productInit() {
    var bag = new Product('Bag', './images/bag.jpg', 'A bag that looks like a little robot.');
    var banana = new Product('Banana Slicer', './image/banana.jpg', 'Use for nefarious purposes.');
    var bathroom = new Product('iPad Poop Mount', './images/bathroom.jpg', 'Scroll endlessly through your newsfeed atop your porcelain throne.');
    var boots = new Product('Boots', './images/boots.jpg', 'Terrible boots.');
    var breakfast = new Product('All In One Breakfast Maker', './images/breakfast.jpg', 'Perfect for the tiny closet you live in.');
    var bubblegum = new Product('Meatball Gumballs', './images/bubblegum.jpg', 'It disappointingly just tastes like regular gum.');
    var chair = new Product('Chair', './images/chair.jpg', 'Ergonomic to a fault.');
    var cthulhu = new Product('Cthulhu', './images/cthulhu.jpg', 'False idol.');
    var dogDuck = new Product('God\'s Mistake', './images/dog-duck.jpg', 'Imported from the Island of Dr. Moreau.');
    var dragon = new Product('Dragon Meat', './images/dragon.jpg', 'A whole can of it.');
    var pen = new Product('Fancy Pens', './images/pen.jpg', 'Upscale utensils.');
    var petSweep = new Product('Dog Shoes', './images/pet-sweep.jpg', 'He will clean up his own poop with his paws.');
    var scissors = new Product('Pizza Shears', './images/scissors.jpg', 'Not useful.');
    var shark = new Product('Child Erasure Service', './images/shark.jpg', 'We will make him disappear.');
    var sweep = new Product('Filthy Baby', './images/sweep.png', 'The final frontier of child labor lawbreaking.');
    var tauntaun = new Product('Taun Taun', './images/tauntaun.jpg', 'Juicy innards for sleeping in.');
    var unicorn = new Product('Unicorn Meat', './images/unicorn.jpg', 'Now with more bits. Gluten free.');
    var usb = new Product('Adult Toy', './images/usb.gif', 'You\'re sick.');
    var waterCan = new Product('Ergonomic Water Bottle', './images/water-can.jpg', 'Drink up, idiot.');
    var wineGlass = new Product('Booze Egg', './images/wine-glass.jpg', 'For slurpin\'.');
}