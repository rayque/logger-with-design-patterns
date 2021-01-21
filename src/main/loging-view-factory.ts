import {LoginView} from "../presentation/login-view";
import {LogStrategy} from "../analytics/log-strategy";
import {ErrorLog} from "../analytics/error-log";
import {ScreenLog} from "../analytics/screen-log";
import {ActionLog} from "../analytics/action-log";
import {SentryAdapter} from "../infra/sentry-adapter";
import {FirebaseAdapter} from "../infra/firebase-adapter";
import {ErrorAnaliticsComposite} from "../infra/error-analitics-composite";
import {LogglyAdapter} from "../infra/loggly-adapter";
import {MongoAnalyticsRepository} from "../infra/mongo-analytics-repository";

export const makeLoginView = (): LoginView => {
    const errorAnalyticsComposite = new ErrorAnaliticsComposite([
        new SentryAdapter(),
        new LogglyAdapter(),
        new MongoAnalyticsRepository(),
    ])

    const firebaseAfdapter = new FirebaseAdapter()
    const errorLog = new ErrorLog(errorAnalyticsComposite)
    const actionLog = new ActionLog(firebaseAfdapter)
    const screenLog = new ScreenLog(firebaseAfdapter)

    const logStrategy = new LogStrategy(errorLog, actionLog, screenLog)

    return  new LoginView(logStrategy)
}