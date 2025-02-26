using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Mahragan2019.Monastery.WebApi.Models
{
    public class HistoryList
    {
        public int MonasteryId { get; set; }
        public string ParagraphTitle { get; set; }
        public string ImagePath { get; set; }
        public string History { get; set; }
        public string Style { get; set; }
    }
}