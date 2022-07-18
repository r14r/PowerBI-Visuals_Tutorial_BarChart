/**
 * Interface for CustomVisual settings.
 *
 * @interface
 * @property {{show:boolean}} enableAxis - Object property that allows axis to be enabled.
 * @property {{generalView.opacity:number}} Bars Opacity - Controls opacity of plotted bars, values range between 10 (almost transparent) to 100 (fully opaque, default)
 * @property {{generalView.showHelpLink:boolean}} Show Help Button - When TRUE, the plot displays a button which launch a link to documentation.
 */
export interface CustomSettings {
  enableAxis: {
    show: boolean;
    fill: string;
  };

  generalView: {
    opacity: number;
    showHelpLink: boolean;
    helpLinkColor: string;
  };

  averageLine: {
    show: boolean;
    displayName: string;
    fill: string;
    showDataLabel: boolean;
  };
}