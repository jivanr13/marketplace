using System.Linq;
using System.Threading.Tasks;

namespace Marketplace.Dal.Repositories
{
    using Marketplace.Core.Dal;
    using Core.Model;

    public class OfferRepository : IOfferRepository
    {
        #region Fields

        private MarketplaceContext context;

        #endregion

        #region Constructors

        public OfferRepository(MarketplaceContext context)
        {
	        this.context = context;
        }

        #endregion

        #region Methods

        /// <inheritdoc />
        public IQueryable<Offer> GetAllOffersAsync()
        {
	        return this.context.Offers.AsQueryable();
        }

        public async Task postOffer(Offer offer)
        {
	        this.context.Offers.Add(offer);
        }

        #endregion
    }
}