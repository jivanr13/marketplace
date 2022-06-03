namespace Marketplace.Core.Dto
{
	public class OfferParamDto
	{
		public string Title { get; set; }
		public string PictureUrl { get; set; }
		public string Description { get; set; }
		public string Location { get; set; }
		public byte CategoryId { get; set; }
		public string UserName { get; set; }
	}
}
