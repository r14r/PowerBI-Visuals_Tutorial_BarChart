import { ICustomDataPoint } from './ICustomDataPoint'
import { ICustomSettings } from './ICustomSettings'
/**
 * Interface for CustomVisuals viewmodel.
 *
 * @interface
 * @property {CustomDataPoint[]} dataPoints - Set of data points the visual will render.
 * @property {number} dataMax                 - Maximum data value in the set of data points.
 */
export interface ICustomViewModel {
    dataPoints: ICustomDataPoint[];
    dataMax: number;
    settings: ICustomSettings;
}