using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SampleApplicaiton.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleApplicaiton.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskController(TaskContext context)
        {
            _context = context;
            if (_context.tasks.Count() == 0) {
                // Create a new task if collection is empty which means cannot delete all tasks
                _context.tasks.Add(new Models.Task { name = "Default Task" , description = "This is a default description"});
                _context.SaveChanges();
            }
        }

        //GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Task>>> GetTasks()
        {
            return await _context.tasks.ToListAsync();
        }

        //GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Task>> GetTask(long id)
        {
            var task = await _context.tasks.FindAsync(id);

            if (task == null){
                return NotFound();
            }

            return task;
        }

        //POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Models.Task>> PostTask(Models.Task task)
        {
            _context.tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTask), new { id = task.id }, task);
        }


        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTask(long id, Models.Task task)
        {
            if(id != task.id)
            {
                return BadRequest();
            }

            _context.Entry(task).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Task/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(long id)
        {
            var task = await _context.tasks.FindAsync(id);
            if (task == null) {
                return NotFound();
            }

            _context.tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        /*
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        */
    }
}
