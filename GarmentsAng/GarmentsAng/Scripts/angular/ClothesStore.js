//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function clothsstore() {
    this.categories = [];
    this.submenu = [];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
clothsstore.prototype.getCategory = function (catId) {
    for (var i = 0; i < this.categories.length; i++) {
        if (this.categories[i].catId == catId)
            return this.submenu =this.categories[i].menu;
    }
    return null;
}
