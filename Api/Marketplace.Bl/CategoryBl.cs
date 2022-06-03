using System.Linq;
using Marketplace.Core.Dto;

namespace Marketplace.Bl
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Marketplace.Core.Bl;
    using Core.Dal;

    /// <summary>
    /// Categorys' logic 
    /// </summary>
    /// <seealso cref="Marketplace.Core.Bl.ICategoryBl" />
    public class CategoryBl : ICategoryBl
    {
        #region Fields

        private readonly ICategoryRepository categoryRepository;

        #endregion

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="CategoryBl"/> class.
        /// </summary>
        /// <param name="categoryRepository">The category repository.</param>
        public CategoryBl(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        #endregion

        #region Methods

        /// <inheritdoc />
        public async Task<IEnumerable<CategoryDto>> GetCategoriesAsync()
        {
	        return await Task.FromResult(categoryRepository.GetAllCategoriesAsync()
	                         .Select(x => new CategoryDto
		                                      {
			                                      Id = x.Id, Name = x.Name
		                                      }).ToList()).ConfigureAwait(false);
        }

        #endregion
    }
}