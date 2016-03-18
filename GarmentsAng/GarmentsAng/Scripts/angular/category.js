//----------------------------------------------------------------
// product class
function category(subCatId, title, action, menus) {
    this.subCatId = subCatId; // product code (SKU = stock keeping unit)
    this.title = title;
    this.action = action;
    this.menus = {};
}
