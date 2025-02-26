using Mahragan2019.Monastery.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Mahragan2019.Monastery.WebApi.Controllers
{
    [RoutePrefix("api/SaintOfManostery")]
    public class SaintOfMonasteryController : ApiController
    {
        [Route("GetSaintByMonasteryId/{mId}")]
        // GET api/<controller>
        public List<SaintList> GetSaintByMonasteryId(int mId)
        {
            var context = new MonasteryEntities();
            var list = context.SaintHeaders.Where(m => m.MonasteryId == mId).Select(s => new SaintList
            {
                Header = s.Header,
                SaintTitlesList = s.SaintTitles.Select(t => new SaintTitlesList
                {
                    MediaSrc = t.MediaSrc,
                    SaintTitle1 = t.SaintTitle1,
                    SaintParagraph1 = t.SaintParagraphs.Select(p => p.SaintParagraph1).ToList()
                }).ToList()
            }).ToList();

            return list;
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