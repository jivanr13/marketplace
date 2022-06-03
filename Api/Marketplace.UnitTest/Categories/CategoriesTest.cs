using System.Linq;
using System.Threading.Tasks;
using FluentAssertions;
using Marketplace.Bl;
using Marketplace.Core.Dal;
using Moq;
using NUnit.Framework;

namespace Marketplace.UnitTest.Categories
{
	[TestFixture]
	public class CategoriesTest
	{

		public CategoriesTest()
		{}

		[Test]
		public async Task GetCategories()
		{
			// Arrange
			var mockRepository = new Mock<ICategoryRepository>();
			mockRepository.Setup(x => x.GetAllCategoriesAsync()).Returns(CategoriesMock.GetCategories);

			var cg = new CategoryBl(mockRepository.Object);
			var response = await cg.GetCategoriesAsync();
			
			response.Should().NotBeNullOrEmpty();
			Assert.AreEqual(response.Count(), 3);
		}
	}
}
