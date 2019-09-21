using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SampleApplicaiton.Models
{
    public class TaskContext: DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {

        }

        public DbSet<Task> tasks { get; set; }
    }
}
