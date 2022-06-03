using System.Linq;

namespace Marketplace.Core.Dal
{
    using Model;

    /// <summary>
    /// Contract for the User data access
    /// </summary>
    public interface ICategoryRepository
    {
        #region Methods

        /// <summary>
        /// Gets all users asynchronous.
        /// </summary>
        /// <returns>Array of users</returns>
        IQueryable<Category> GetAllCategoriesAsync();

        #endregion
    }
}