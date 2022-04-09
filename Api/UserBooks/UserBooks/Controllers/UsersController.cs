using Microsoft.AspNetCore.Mvc;
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
    }
}
