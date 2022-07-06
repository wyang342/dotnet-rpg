using System.Collections.Generic;
using System.Threading.Tasks;
using dotnet_rpg.Dtos.Skill;
using dotnet_rpg.Models;

namespace server.Services.SkillService
{
  public interface ISkillService
  {
    Task<ServiceResponse<List<GetSkillDto>>> GetSkills();
  }
}