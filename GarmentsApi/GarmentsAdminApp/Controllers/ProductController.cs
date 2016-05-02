using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GarmentsAdminApp.Models;
using GarmentsAdminApp.ViewModel;
using GarmentsData;
namespace GarmentsAdminApp.Controllers {
    public class ProductController : Controller {
        private GarmentsEntities db = new GarmentsEntities();
        private Categories cat = new Categories();
        //
        // GET: /Product/

        public ActionResult Index() {
            var products = db.Products.Include(p => p.Category);
            return View(products.ToList());
        }

        //
        // GET: /Product/Details/5

        public ActionResult Details(int id = 0) {
            Product product = db.Products.Find(id);
            if (product == null) {
                return HttpNotFound();
            }
            return View(product);
        }

        //
        // GET: /Product/Create

        public ActionResult Create() {
            ViewBag.MainCategoryId = new SelectList(cat.MainCategories(), "CategoryId", "Name");
            ViewBag.SubCategoryId = new SelectList("SubCategory", "", "");
            return View();
        }

        public JsonResult GetSubCategories(string parentCatId) {
            List<SelectListItem> subCategories = new List<SelectListItem>();
            subCategories.Add(new SelectListItem { Text = "Select", Value = "0" });
            int catId = Convert.ToInt32(parentCatId);
            db.Categories.ToList().Where(id => id.ParentCatId == catId).ToList().ForEach(u => subCategories.Add(new SelectListItem { Text = u.Name, Value = u.CategoryId.ToString() }));
            ViewBag.SubCategoryId = subCategories;
            return Json(subCategories);
        }
        public Product GetSubCategoriesID(Product product, string CategoryId) {
            // product.CategoryId = CategoryId != null ? Convert.ToInt32(CategoryId) : (int?)null;
            return product;
        }
        //
        // POST: /Product/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(ProductViewModel productView, HttpPostedFileBase file) {
            if (ModelState.IsValid) {
                if (file != null) {
                    file.SaveAs(HttpContext.Server.MapPath("~/Images/") + file.FileName);
                    productView.product.Image = file.FileName;
                }
                db.Products.Add(productView.product);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CategoryId = new SelectList(db.Categories, "CategoryId", "Name", productView.product.CategoryId);
            return View(productView.product);
        }

        //
        // GET: /Product/Edit/5

        public ActionResult Edit(int id = 0) {
            Product product = db.Products.Find(id);
            if (product == null) {
                return HttpNotFound();
            }
            ViewBag.CategoryId = new SelectList(db.Categories, "CategoryId", "Name", product.CategoryId);
            return View(product);
        }

        //
        // POST: /Product/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(ProductViewModel productView) {
            if (ModelState.IsValid) {
                db.Entry(productView.product).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CategoryId = new SelectList(db.Categories, "CategoryId", "Name", productView.product.CategoryId);
            return View(productView.product);
        }

        //
        // GET: /Product/Delete/5

        public ActionResult Delete(int id = 0) {
            Product product = db.Products.Find(id);
            if (product == null) {
                return HttpNotFound();
            }
            return View(product);
        }

        //
        // POST: /Product/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id) {
            Product product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing) {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}