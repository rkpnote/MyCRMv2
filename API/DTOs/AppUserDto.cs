namespace API.DTOs
{
    public class AppUserDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl { get; set; }    
       public int Age { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastActive { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string Designation { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }
    }
}