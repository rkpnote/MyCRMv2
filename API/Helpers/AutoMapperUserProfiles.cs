using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperUserProfiles : Profile
    {
        public AutoMapperUserProfiles()
        {
            CreateMap<AppUser, AppUserDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom( src => 
            src.Photos.FirstOrDefault(x=>x.IsMain).Url))
            .ForMember(dest => dest.Age, opt=> opt.MapFrom(src => src.DateOfJoining.CalculateAge()));
            CreateMap<Photo, PhotoDto>();
        }
    }
}