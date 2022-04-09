using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using UserBooks.Models;

namespace UserBooks.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class BaseController<T> : ControllerBase where T : class, IBaseEntity
    {
        protected readonly AppDbContext _context;
        protected readonly DbSet<T> _dbSet;

        public BaseController(AppDbContext context, DbSet<T> dbSet)
        {
            _context = context;
            _dbSet = dbSet;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            var data = _dbSet.AsNoTracking();
            return Ok(data);
        }

        [HttpGet("{id}")]
        virtual public IActionResult Get(int id)
        {
            var user = _dbSet.AsNoTracking().FirstOrDefault(c => c.Id == id);
            if(user == null) return NotFound();

            return Ok(user);
        }

        [HttpPut("{id}")]
        virtual public async Task<IActionResult> Put(int id, [FromBody] T dbEntity)
        {
            if (id != dbEntity.Id) return BadRequest();

            _context.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (Exists(id) == false) return NotFound();

                throw;
            }

            return NoContent();
        }

        [HttpPost]
        virtual public async Task<ActionResult<T>> Post([FromBody] T dbEntity)
        {
            _dbSet.Add(dbEntity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = dbEntity.Id }, dbEntity);
        }

        [HttpDelete("{id}")]
        virtual public async Task<ActionResult<T>> Delete(int id)
        {
            var dbEntity = await _dbSet.FirstOrDefaultAsync(x => x.Id == id);
            if (dbEntity == null) return NotFound();

            _dbSet.Remove(dbEntity);
            await _context.SaveChangesAsync();

            return dbEntity;
        }


        private bool Exists(int id)
        {
            return _dbSet.Any(e => e.Id == id);
        }

        protected int UserId
        {
            get
            {
                int.TryParse(User.FindFirstValue(ClaimTypes.NameIdentifier), out int val);

                return val;
            }
        }
    }
}

