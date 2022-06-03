using System.Linq;

namespace Marketplace.Core.Dal
{
    using System.Threading.Tasks;
    using Model;

    /// <summary>
    /// Contract for the User data access
    /// </summary>
    public interface IOfferRepository
    {
        #region Methods

        /// <summary>
        /// Gets all users asynchronous.
        /// </summary>
        /// <returns>Array of users</returns>
        IQueryable<Offer> GetAllOffersAsync();

        #endregion

        Task postOffer(Offer offer);
    }
}