using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Mvc;
using GarmentsData;

namespace GarmentsAdminApp.Controllers {
    public class CategoryController : Controller {
        private GarmentsEntities db = new GarmentsEntities();

        public ActionResult IndexPartial() {
            return View(db.Categories.ToList());
        }

        //
        // GET: /Category/

        public ActionResult Index() {
            return View(db.Categories.ToList());
        }

        //
        // GET: /Category/Details/5

        public ActionResult Details(int id = 0) {
            Category category = db.Categories.Find(id);
            if (category == null) {
                return HttpNotFound();
            }
            return View(category);
        }

        //
        // GET: /Category/Create

        public ActionResult Create() {
            var listi = db.Categories.Where(s => s.ParentCatId == null);

            ViewBag.MainCategory = new SelectList(listi, "CategoryId", "Name");
            return View();
        }
        public JsonResult GetSubCategories(string parentCatId) {
            List<SelectListItem> subCategories = new List<SelectListItem>();
            subCategories.Add(new SelectListItem { Text = "Select", Value = "0" });
            int catId = Convert.ToInt32(parentCatId);
            db.Categories.ToList().Where(id => id.ParentCatId == catId).ToList().ForEach(u => subCategories.Add(new SelectListItem { Text = u.Name, Value = u.CategoryId.ToString() }));
            ViewBag.subCategories = subCategories;
            return Json(subCategories);
        }

        public String GetSubCategoriesId(string parentCatId) {
            Category category;
            //category.ParentCatId =Convert .ToInt32 ( parentCatId);
            String newVal = parentCatId;
            //this.RedirectToAction("Create");
            return newVal;
        }
        //
        // POST: /Category/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Category category) {
            if (ModelState.IsValid) {
                db.Categories.Add(category);
                db.SaveChanges();
                return RedirectToAction("Create");
            }
            return View(category);
        }
        //public ActionResult Create(FormCollection form) {
        //    Category category = new Category();
        //    category.CategoryId = 0;
        //    category.Name = form["Name"];
        //    category.ParentCatId = Int32.Parse(form["ParentCatId"]);
        //    return RedirectToAction("Index");
        //}
        //
        // GET: /Category/Edit/5
        public ActionResult Edit(int id = 0) {
            Category category = db.Categories.Find(id);
            if (category == null) {
                return HttpNotFound();
            }
            return View(category);
        }

        //
        // POST: /Category/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Category category) {
            if (ModelState.IsValid) {
                db.Entry(category).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Create");
            }
            return View(category);
        }

        //
        // GET: /Category/Delete/5

        public ActionResult Delete(int id = 0) {
            Category category = db.Categories.Find(id);
            if (category == null) {
                return HttpNotFound();
            }
            return View(category);
        }

        //
        // POST: /Category/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id) {
            Category category = db.Categories.Find(id);
            db.Categories.Remove(category);
            db.SaveChanges();
            return RedirectToAction("Create");
        }

        protected override void Dispose(bool disposing) {
            db.Dispose();
            base.Dispose(disposing);
        }

        //public JsonResult GetSubCategories(string parentCatId) {
        //    List<SelectListItem> subCategories = new List<SelectListItem>();
        //    subCategories.Add(new SelectListItem { Text = "Select", Value = "0" });
        //    int catId = Convert.ToInt32(parentCatId);
        //    // string catValue=cat
        //    var a = db.Categories.ToList().Where(id => id.ParentCatId == catId).ToList();
        //    db.Categories.ToList().Where(id => id.ParentCatId == catId).ToList()
        //        .ForEach(u => subCategories.Add(new SelectListItem { Text = u.Name, Value = u.CategoryId.ToString() }));
        //    var lst = db.Categories.Where(id => id.ParentCatId == catId).AsEnumerable();
        //    var subCategories1 = lst.Select(s => new SelectListItem { Text = s.Name, Value = s.CategoryId.ToString() }).ToList();

        //    // subCategories = subCategories1;
        //    return Json(subCategories);
        //}

    }
}