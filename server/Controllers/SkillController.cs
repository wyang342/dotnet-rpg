using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Services.SkillService;

namespace dotnet_rpg.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class SkillController : ControllerBase
    {
        private readonly ISkillService skillService;
        public SkillController(ISkillService skillService)
        {
          this.skillService = skillService;
        }

        [HttpGet]
        public async Task<IActionResult> GetSkills()
        {
            return Ok(await skillService.GetSkills());
        }
    }
}