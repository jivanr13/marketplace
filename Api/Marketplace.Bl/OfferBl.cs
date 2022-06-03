using System;
using System.Linq;
using System.Threading;
using Marketplace.Core.Common;
using Marketplace.Core.Dto;
using Marketplace.Core.Model;

namespace Marketplace.Bl
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Marketplace.Core.Bl;
    using Core.Dal;

    /// <summary>
    /// Offers' logic 
    /// </summary>
    /// <seealso cref="Marketplace.Core.Bl.IOfferBl" />
    public class OfferBl : IOfferBl
    {
        #region Fields

        private readonly IOfferRepository _offerRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMarketplaceContext _context;

        #endregion

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="OfferBl"/> class.
        /// </summary>
        /// <param name="offerRepository">The offer repository.</param>
        public OfferBl(IOfferRepository offerRepository, IUserRepository userRepository, IMarketplaceContext context)
        {
	        this._offerRepository = offerRepository;
	        _userRepository = userRepository;
	        _context = context;
        }

        #endregion

        #region Methods

        /// <inheritdoc />
        public async Task<IEnumerable<OfferDto>> GetOffersAsync()
        {
			return await Task.FromResult(_offerRepository.GetAllOffersAsync()
	                                                    .Select(x => new OfferDto
																		{
			                                                                 Id = x.Id,
																			Category = x.Category.Name,
																			User = x.User.Username,
																			Title = x.Title,
																			PictureUrl = x.PictureUrl,
																			Description = x.Description,
																			PublishedOn = x.PublishedOn,
		                                                                }).ToList()).ConfigureAwait(false);
        }

        public async Task PostOffersAsync(OfferParamDto param)
        {
	        var userId = 0;

			var userDb = await _userRepository.GetByUserNameAsync(param.UserName);
			if (userDb != null)
				userId = userDb.Id;

			if (userId == 0)
			{
				var user = new User { Username = param.UserName };
				await _userRepository.PostUser(user);
				await _context.SaveChangesAsync(CancellationToken.None);
				userId = user.Id;
			}

			var offer = new Offer
								{
									UserId = userId,
									CategoryId = param.CategoryId,
									Description = param.Description,
									Location = param.Location,
									PictureUrl = param.PictureUrl,
									Title = param.Title
								};
			await _offerRepository.postOffer(offer);

			await _context.SaveChangesAsync(CancellationToken.None);
        }

        #endregion
    }
}