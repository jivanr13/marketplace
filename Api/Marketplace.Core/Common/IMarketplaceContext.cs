using System.Threading;
using System.Threading.Tasks;

namespace Marketplace.Core.Common
{
	public interface IMarketplaceContext
	{
		Task<int> SaveChangesAsync(CancellationToken cancellationToken);
	}
}
