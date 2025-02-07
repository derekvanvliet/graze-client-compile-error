import { GrazeService } from "graze-client";

const graze = new GrazeService({
    apiUrl: process.env.GRAZE_API_URL as string,
    cookie: process.env.GRAZE_COOKIE as string,
    userId: Number(process.env.GRAZE_USER_ID)
});
 
export async function GET() {
    const feeds = await graze.getFeeds();
    return Response.json(feeds);
}
