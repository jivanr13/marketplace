using System.Collections.Generic;
using System.Linq;
using Marketplace.Core.Model;

namespace Marketplace.UnitTest.Categories
{
	public class CategoriesMock
	{
		public static IQueryable<Category> GetCategories => new EnumerableQuery<Category>(new List<Category>
			{
				new Category
					{
						Id = 1,
						Name = "Product"
					},
				new Category
					{
						Id = 2,
						Name = "Service"
					},
				new Category
					{
						Id = 3,
						Name = "'I''m looking for"
					},
			}).AsQueryable();
	}
}
