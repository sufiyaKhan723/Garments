using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
//using GarmentsEntities;
using GarmentsData;

namespace GarmentsApi.Controllers {
    [RoutePrefix("api/product")]
    public class ProductController : ApiController {

        [Route("GetProducts")]
        public IEnumerable<Product> GetAllProducts() {
            IEnumerable<Product> getProducts = new List<Product>();
            ProductRepositories productRepositories = new ProductRepositories();
            getProducts = productRepositories.GetProducts().ToList();
            return getProducts;
        }
        [Route("GetCatogories")]
        public IEnumerable<Category> GetAllCategories() {
            IEnumerable<Category> getProducts = new List<Category>();
            ProductRepositories productRepositories = new ProductRepositories();
            getProducts = productRepositories.GetCatogories().ToList();
            return getProducts;
        }

        // GET api/product
        public IEnumerable<string> Get() {
            return new string[] { "value1", "value2" };
        }

        // GET api/product/5
        public string Get(int id) {
            return "value";
        }

        // POST api/product
        public void Post([FromBody]string value) {
        }

        // PUT api/product/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/product/5
        public void Delete(int id) {
        }
    }
}
