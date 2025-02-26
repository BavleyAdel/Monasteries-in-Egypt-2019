using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Mahragan2019.Monastery.API.Models
{
    public class MonasteryList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CityId { get; set; }
        public string CityName { get; set; }
        public string Town { get; set; }
        public string Type { get; set; }
        public string ImagePath { get; set; }
        public string Description { get; set; }
    }
}