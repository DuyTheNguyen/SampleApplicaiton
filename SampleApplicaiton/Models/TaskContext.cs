using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SampleApplicaiton.Models
{
    /*
     * This class connects Entity Framework fucntionality for a Task Model
     */
    public class TaskContext: DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {

        }

        public DbSet<Task> tasks { get; set; }
    }
}
