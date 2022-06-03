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
    /// Services for Category
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        #region Fields

        private readonly ILogger<CategoryController> _logger;

        private readonly ICategoryBl _categoryBl;

        #endregion

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="CategoryController"/> class.
        /// </summary>
        /// <param name="logger">The logger.</param>
        /// <param name="categoryBl">The category business logic.</param>
        public CategoryController(ILogger<CategoryController> logger, ICategoryBl categoryBl)
        {
            this._logger = logger;
            this._categoryBl = categoryBl;
        }

        #endregion

        #region Methods
        /// <summary>
        /// Gets the list of categorys.
        /// </summary>
        /// <returns>List of categorys</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryDto>>> Get()
        {
            IEnumerable<CategoryDto> result;
            try
            {
                result = await this._categoryBl.GetCategoriesAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                this._logger?.LogError(ex, ex.Message);
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server Error.");
            }
            return this.Ok(result);
        }

        #endregion
    }
}