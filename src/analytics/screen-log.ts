import {Log} from "../presentation/log";
import {Analytics} from "./analytics";

export class ScreenLog implements Log {
    constructor(private readonly analytics: Analytics) {}
    event(type: Log.Type, data: Log.Data): void {
        this.analytics.save(type, data.error)
    }
}

