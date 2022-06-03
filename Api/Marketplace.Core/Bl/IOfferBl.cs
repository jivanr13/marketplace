using Marketplace.Core.Dto;

namespace Marketplace.Core.Bl
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// Contract for the User logic
    /// </summary>
    public interface IOfferBl
    {
        #region Methods

        /// <summary>
        /// Gets the users.
        /// </summary>
        /// <returns>LIst of users</returns>
        Task<IEnumerable<OfferDto>> GetOffersAsync();

        #endregion

        Task PostOffersAsync(OfferParamDto param);
    }
}