using Mahragan2019.Monastery.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Mahragan2019.Monastery.WebApi.Controllers
{
    [RoutePrefix("api/History")]
    public class HistoryController : ApiController
    {
        [Route("GetHistoryByMonasteryId/{mId}")]
        // GET api/<controller>
        public List<HistoryList> GetHistoryByMonasteryId(int mId)
        {
            var context = new MonasteryEntities();

            return context.MonasteryHistories.Where(h => h.MonasteryId == mId).Select(m => new HistoryList
            {
                History = m.History,
                ParagraphTitle = m.ParagraphTitle,
                ImagePath = m.ImagePath,
                Style = m.Style,
                MonasteryId = m.MonasteryId
            }).ToList();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}