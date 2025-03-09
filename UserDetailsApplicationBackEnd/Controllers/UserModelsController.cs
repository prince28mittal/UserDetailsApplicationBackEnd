using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using UserDetailsApplicationBackEnd.Data;
using UserDetailsApplicationBackEnd.Models;

namespace UserDetailsApplicationBackEnd.Controllers
{
    public class UserModelsController : Controller
    {
        private readonly UserDetailsApplicationBackEndContext _context;

        public UserModelsController(UserDetailsApplicationBackEndContext context)
        {
            _context = context;
        }

        //GET: UserModels
        public async Task<ActionResult<List<UserModel>>> Index()
        {
            if (_context.UserModel == null)
            {
                return Problem("Entity set 'UserDetailsApplicationBackEndContext.UserModel' is null.");
            }

            var userList = await _context.UserModel.ToListAsync().ConfigureAwait(false);

            if (!userList.Any())
            {
                userList = GenerateDefaultUsers();
                _context.UserModel.AddRange(userList);
                await _context.SaveChangesAsync();
            }
            return userList;
        }

        // POST: UserModels/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UserModel userModel)
        {
            if (ModelState.IsValid)
            {
                _context.Add(userModel);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(userModel);
        }
        
        // POST: UserModels/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Edit(int id,[FromBody] UserModel userModel)
        {
            if (id != userModel.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(userModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserModelExists(userModel.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(userModel);
        }

        // POST: UserModels/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.UserModel == null)
            {
                return Problem("Entity set 'UserDetailsApplicationBackEndContext.UserModel'  is null.");
            }
            var userModel = await _context.UserModel.FindAsync(id);
            if (userModel != null)
            {
                _context.UserModel.Remove(userModel);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserModelExists(int id)
        {
          return (_context.UserModel?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        private List<UserModel> GenerateDefaultUsers()
        {
            var defaultUsers = new List<UserModel>();

            for (int i = 1; i <= 10; i++)
            {
                defaultUsers.Add(new UserModel
                {
                    FirstName = $"FirstName{i}",
                    LastName = $"LastName{i}",
                    Email = $"user{i}@example.com",
                    Contact = $"123456789{i}",
                    Address = $"Address {i}"
                });
            }

            return defaultUsers;
        }
    }
}
