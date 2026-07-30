// Centralized social links for the site.
// These prefer NEXT_PUBLIC_* environment variables so they can be overridden
// without changing code. Useful for different deployments.
export const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK ??
	"https://www.instagram.com/fleetwoodbadminton/";

export const FACEBOOK_LINK = process.env.NEXT_PUBLIC_FACEBOOK_LINK ??
	"https://www.facebook.com/people/Fleetwood-Badminton/pfbid02xCKYxjq8Sth3tnxKBYSmwJGA4nssWGY53rUjjDXnk8GUk7ADFLLzvzmTwzZCknUXl/";

// Placeholder: WeChat typically uses QR codes; set NEXT_PUBLIC_WECHAT_INFO_LINK
// to a landing page or QR page if available.
export const WECHAT_INFO_LINK = process.env.NEXT_PUBLIC_WECHAT_INFO_LINK ??
	"https://www.wechat.com/en/";
