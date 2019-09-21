using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleApplicaiton.Models
{
    /**
     * This class represents the task model which has id, name and description
     */
    public class Task
    {
        public long id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
    }
}
