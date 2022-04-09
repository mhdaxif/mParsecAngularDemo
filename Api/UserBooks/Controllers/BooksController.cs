using Microsoft.AspNetCore.Mvc;
using UserBooks.Models;

namespace UserBooks.Controllers
{
    public class BooksController : BaseController<Book>
    {
        public BooksController(AppDbContext context) : base(context, context.Books) { }
    }
}
