using System;

namespace Marketplace.Core.Dto
{
	public class OfferDto
	{
		public Guid Id { get; set; }
		public string Category { get; set; }
		public string User { get; set; }
		public string Title { get; set; }
		public string PictureUrl { get; set; }
		public string Description { get; set; }
		public DateTime PublishedOn { get; set; }
	}
}
