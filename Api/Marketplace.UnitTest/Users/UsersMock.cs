using System.Threading.Tasks;
using Marketplace.Core.Model;

namespace Marketplace.UnitTest.Users
{
	public class UsersMock
	{
		public static Task<User[]> GetUsers => Task.FromResult(new User[]
																		 {
				                                                             new()
					                                                             {
						                                                             Id = 1,
						                                                             Username = "Jorge"
					                                                             },
				                                                             new()
					                                                             {
						                                                             Id = 2,
						                                                             Username = "Ivan"
					                                                             },
				                                                             new()
					                                                             {
						                                                             Id = 3,
						                                                             Username = "Ramirez"
					                                                             },
				                                                             new()
					                                                             {
						                                                             Id = 4,
						                                                             Username = "Murillo"
					                                                             },
			                                                             });
	}
}
