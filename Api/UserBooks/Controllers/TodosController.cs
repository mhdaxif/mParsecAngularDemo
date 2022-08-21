using Microsoft.AspNetCore.Mvc;
using UserBooks.Models;

namespace UserBooks.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private AppDbContext _context;

        public TodosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult getUserBooks()
        {
            var data = this._context.Todos;

            return Ok(data);
        }

        // Api/Todos/id
        [HttpGet("{id}")]
        public IActionResult getSingleBook(int id)
        {
            var data = this._context.Todos.FirstOrDefault(x => x.Id == id);
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        // Api/Todos/id
        [HttpDelete("{id}")]
        public IActionResult delete(int id)
        {
            var data = this._context.Todos.FirstOrDefault(x => x.Id == id);
            if (data == null)
            {
                return NotFound();
            }

            _context.Todos.Remove(data);
            _context.SaveChanges();


            return Ok(data);
        }


        [HttpPost]
        public IActionResult getUserBooks(Todo todo)
        {
            if (todo.Task != null)
            {
                _context.Todos.Add(todo);
                _context.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }
    }
}
