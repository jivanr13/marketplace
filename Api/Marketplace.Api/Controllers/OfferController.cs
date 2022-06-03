using System.Security.Cryptography.X509Certificates;
using Marketplace.Core.Dto;

namespace Marketplace.Api.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Marketplace.Core.Bl;
    using Core.Model;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// Services for Offer
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [ApiController]
    [Route("[controller]")]
    public class OfferController : ControllerBase
    {
        #region Fields

        private readonly ILogger<OfferController> _logger;

        private readonly IOfferBl _offerBl;

        #endregion

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="OfferController"/> class.
        /// </summary>
        /// <param name="logger">The logger.</param>
        /// <param name="offerBl">The offer business logic.</param>
        public OfferController(ILogger<OfferController> logger, IOfferBl offerBl)
        {
            this._logger = logger;
            this._offerBl = offerBl;
        }

        #endregion

        #region Methods
        /// <summary>
        /// Gets the list of offers.
        /// </summary>
        /// <returns>List of offers</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OfferDto>>> Get()
        {
            IEnumerable<OfferDto> result;
            try
            {
                result = await this._offerBl.GetOffersAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                this._logger?.LogError(ex, ex.Message);
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server Error.");
            }
            return this.Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> Post(OfferParamDto param)
        {
	        try
	        {
		        await this._offerBl.PostOffersAsync(param);
	        }
	        catch (Exception ex)
	        {
                this._logger?.LogError(ex, ex.Message);
		        return this.StatusCode(StatusCodes.Status500InternalServerError, "Server Error. " + ex.Message);
	        }
	        return this.Ok();
        }
        #endregion
    }
}