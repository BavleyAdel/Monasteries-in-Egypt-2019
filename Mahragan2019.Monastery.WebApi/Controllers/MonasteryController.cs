using Mahragan2019.Monastery.API.Models;
using Mahragan2019.Monastery.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Mahragan2019.Monastery.API.Controllers
{
    [RoutePrefix("api/Monastery")]
    public class MonasteryController : ApiController
    {
        [Route("GetAll")]
        // GET api/<controller>
        public List<MonasteryList> Get()
        {
            var context = new MonasteryEntities();
            return context.SomeMonasteries.Select(m => new MonasteryList
            {
                CityId = m.CityId,
                CityName = m.EgyptCity.CityName,
                Description = m.Description,
                Id = m.Id,
                ImagePath = m.ImagePath,
                Name = m.Name,
                Town = m.Town,
                Type =m.Type
            }).ToList();
        }

        [Route("GetSearchMonastery")]
        // GET api/<controller>/5
        public List<MonasteryList> GetSearchMonastery(string SearchVal)
        {
            var context = new MonasteryEntities();
            return context.SomeMonasteries.Where(s=> s.Name.Contains(SearchVal) || s.Town.Contains(SearchVal) || s.EgyptCity.CityName.Contains(SearchVal)).Select(m => new MonasteryList
            {
                CityId = m.CityId,
                CityName = m.EgyptCity.CityName,
                Description = m.Description,
                Id = m.Id,
                ImagePath = m.ImagePath,
                Name = m.Name,
                Town = m.Town,
                Type = m.Type
            }).ToList();
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