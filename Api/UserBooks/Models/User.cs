using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserBooks.Models
{
    public class User : IBaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }

        public ICollection<Book> Books { get; set; } = new List<Book>();
        public ICollection<Todo> Todos { get; set; } = new List<Todo>();
    }

    public class Todo
    {
        public int Id { get; set; }
        public string Task { get; set; }
        public bool IsDone { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
