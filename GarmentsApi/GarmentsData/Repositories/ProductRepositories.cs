using System.Collections.Generic;
using System.Linq;

namespace GarmentsData {
    public class ProductRepositories {
        GarmentsEntities context = new GarmentsEntities();

        public List<Product> GetProducts() {
            List<Product> lstProducts = new List<Product>();
            lstProducts = context.Products.ToList();
            return lstProducts;
        }

        public List<Category> GetCatogories() {
            List<Category> lstCategories = new List<Category>();
            lstCategories = context.Categories.ToList();
            return lstCategories;
        }
    }
}
