using Microsoft.AspNetCore.Mvc;
using ReactHello.Models;

namespace ReactHello.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase 
    {
        private static readonly IEnumerable<ItemModel> items;
    }
}