using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UserDetailsApplicationBackEnd.Models;

namespace UserDetailsApplicationBackEnd.Data
{
    public class UserDetailsApplicationBackEndContext : DbContext
    {
        public UserDetailsApplicationBackEndContext (DbContextOptions<UserDetailsApplicationBackEndContext> options)
            : base(options)
        {
        }

        public DbSet<UserDetailsApplicationBackEnd.Models.UserModel> UserModel { get; set; } = default!;
    }
}
