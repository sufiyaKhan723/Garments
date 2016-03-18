function CommonObject(catId) {
    this.categories = [];
    this.catId = catId;
}

CommonObject.prototype.getCategory = function (catId) {
    for (var i = 0; i < this.categories.length; i++) {
        if (this.categories[i].catId == catId)
            return this.categories[i].menus;
    }
    return null;
}
