import {ErrorAnalytics} from "../analytics/error-analytics";
import {Analytics} from "../analytics/analytics";

export class MongoAnalyticsRepository implements Analytics ,ErrorAnalytics {
    save(type: string, data: any): void {
    }
    saveError(error: any): void {
    }
}