using System.Web.Routing;

namespace GarmentsApi {
    public class RouteConfig {
        public static void RegisterRoutes(RouteCollection routes) {
            routes.Ignore("{resource}.axd/{*pathInfo}");

            //routes.MapHttpRoute(
            //    name: "Default1",
            //    //url: "{controller}/{action}/{id}",
            //    routeTemplate: "api/{controller}"
            //    //defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);
        }
    }
}
