using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using dotnet_rpg.Data;
using dotnet_rpg.Dtos.Skill;
using dotnet_rpg.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace server.Services.SkillService
{
  public class SkillService : ISkillService
  {
    private readonly IMapper _mapper;
    private readonly DataContext _context;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public SkillService(IMapper mapper, DataContext context, IHttpContextAccessor httpContextAccessor)
    {
      _httpContextAccessor = httpContextAccessor;
      _context = context;
      _mapper = mapper;
    }

    public async Task<ServiceResponse<List<GetSkillDto>>> GetSkills()
    {
      ServiceResponse<List<GetSkillDto>> serviceResponse = new ServiceResponse<List<GetSkillDto>>();
      List<Skill> dbSkills = await _context.Skills.ToListAsync();
      serviceResponse.Data = (dbSkills.Select(s => _mapper.Map<GetSkillDto>(s))).ToList();
      return serviceResponse;
    }
  }
}