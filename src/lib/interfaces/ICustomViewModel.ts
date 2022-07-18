import { CustomDataPoint } from './ICustomDataPoint'
import { CustomSettings } from './ICustomSettings'
/**
 * Interface for CustomVisuals viewmodel.
 *
 * @interface
 * @property {CustomDataPoint[]} dataPoints - Set of data points the visual will render.
 * @property {number} dataMax                 - Maximum data value in the set of data points.
 */
export interface CustomViewModel {
    dataPoints: CustomDataPoint[];
    dataMax: number;
    settings: CustomSettings;
}