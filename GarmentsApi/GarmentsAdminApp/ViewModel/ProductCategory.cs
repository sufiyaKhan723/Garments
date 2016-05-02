using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using GarmentsData;
namespace GarmentsAdminApp.ViewModel {
    public class ProductCategory {
        public Product product { get; set; }
        //public Category category { get; set; }
    }

    public class ProductViewModel {

        public Product product { get; set; }
        public Nullable<int> ParentCatId { get; set; }
    }

    public class CategoryModel {
        // public Category category { get; set; }
        //public GarmentsEntities _category = new GarmentsEntities();
        private readonly IDbSet<Category> _category;
        public CategoryModel() {
            //  _category = GetAll();
            //            category.ParentCatId =
        }
        public IList<Category> GetAll() {
            //IList<Category> _category = new List<Category>();

            return _category.Where(category => category.ParentCatId == null)
                            .Include(category => category.Children).ToList();
        }
    }
    public class CategoryViewModel {
        public List<Category> CategoryList;
        public SelectList categoryies { get; set; }
        public string Selectcategory { get; set; }
        public string SelectedcategoryText { get; set; }
    }
}