using System.Collections.Generic;
using System.Security.Claims;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUserDto>>> GetUsers()
        {
            var users = await _userRepository.GetAppUsersAsync();
            return Ok(users);
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<AppUserDto>> GetUser(string username)
        {
            return await _userRepository.GetAppUserAsync(username);            
        }

        [HttpPut]
        public async Task<ActionResult> UpdateAccount(AccountUpdateDto accountUpdateDto) 
        {
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _userRepository.GetUserByUsernameAsync(username);

            _mapper.Map(accountUpdateDto, user);
            //_mapper.Map<AccountUpdateDto, AppUser >(accountUpdateDto, user);

            // user.City = accountUpdateDto.City;
            // user.Mobile = accountUpdateDto.Mobile;
            // user.Country = accountUpdateDto.Country;
            // user.Designation = accountUpdateDto.Designation;
            // user.Gender = accountUpdateDto.Gender;
            // user.Email = accountUpdateDto.Email;

            _userRepository.Update(user);

            if(await _userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update user account");
        }
    }
}