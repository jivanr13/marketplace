using System.Linq;

namespace Marketplace.Dal.Repositories
{
    using Marketplace.Core.Dal;
    using Core.Model;

    public class CategoryRepository : ICategoryRepository
    {
        #region Fields

        private MarketplaceContext context;

        #endregion

        #region Constructors

        public CategoryRepository(MarketplaceContext context)
        {
	        this.context = context;
        }

        #endregion

        #region Methods

        /// <inheritdoc />
        public IQueryable<Category> GetAllCategoriesAsync()
        {
            return this.context.Categories.AsQueryable();
        }

        #endregion
    }
}