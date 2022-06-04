namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime doj)
        {
            var today = DateTime.Today;
            var age = today.Year - doj.Year;
            if (doj.Date > today.AddYears(-age)) age--;
            
            return age;
        }
    }
}