import { ObjectID } from 'mongodb';

export const DB_USD_TOTALS = 'usdTotals';
export const DB_EUR_TOTALS = 'eurTotals';

export interface UsdTotal {
	_id: ObjectID;
	currentRaised: number;
	nextMilestone: number;
}

export interface EurTotal {
    _id: ObjectID;
    currentRaised: number;
    nextMilestone: number;
}
