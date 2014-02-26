using System.Web;
using System.Web.SessionState;

namespace Extjs.Server
{
    public class JsonHandler : IHttpHandler, IRequiresSessionState
    {
        public void ProcessRequest(HttpContext context)
        {
          
        }

        public bool IsReusable { get; private set; }
    }
}
