import {ErrorAnalytics} from "../analytics/error-analytics";

export class SentryAdapter implements ErrorAnalytics {
    saveError(error: any): void {
    }
}