import {Log} from "../presentation/log";
import {Analytics} from "./analytics";
import {ErrorLog} from "./error-log";
import {ActionLog} from "./action-log";
import {ScreenLog} from "./screen-log";

export class LogStrategy implements Log {
    constructor(
        private readonly erroLog: ErrorLog,
        private readonly actionLog: ActionLog,
        private readonly screenLog: ScreenLog

    ) {}
    event(type: Log.Type, data: Log.Data): void {
        switch (type) {
            case "action":
                this.actionLog.event(type, data)
                break
            case "error":
                this.erroLog.event(type, data)
                break
            case "screen":
                this.screenLog.event(type, data)
                break
        }
    }
}

