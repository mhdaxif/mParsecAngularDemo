using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserBooks.Models;

namespace UserBooks.Controllers
{
    public class UsersController : BaseController<User>
    {
        public UsersController(AppDbContext context) : base(context, context.Users) { }

        [HttpGet("{userId}/books")]
        public IActionResult getUserBooks(int userId){
            var userBooks = this._context.Books.Where(x => x.UserId == userId).AsNoTracking();

            return Ok(userBooks);
        }
    }
}
