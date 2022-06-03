using System.Linq;
using System.Threading.Tasks;
using FluentAssertions;
using Marketplace.Bl;
using Marketplace.Core.Dal;
using Moq;
using NUnit.Framework;

namespace Marketplace.UnitTest.Users
{
	[TestFixture]
	public class UsersTest
	{

		public UsersTest()
		{}

		[Test]
		public async Task GetUsersAsync()
		{
			// Arrange
			var mockRepository = new Mock<IUserRepository>();
			mockRepository.Setup(x => x.GetAllUsersAsync()).Returns(UsersMock.GetUsers);

			var cg = new UserBl(mockRepository.Object);
			var response = await cg.GetUsersAsync();
			
			response.Should().NotBeNullOrEmpty();
			Assert.AreEqual(response.Count(), 4);
			Assert.AreEqual(response.FirstOrDefault().Username, "Jorge");
		}
	}
}
