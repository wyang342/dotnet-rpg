using System.Collections.Generic;

namespace dotnet_rpg.Services.FightService
{
    public class FightRequestDto
    {
        public List<int> CharacterIds { get; set; }
    }
}