/**
 * CustomVisual settings.
 *
 */
export interface ICustomSettings {

  generalView: {
    opacity: number;
    showHelpLink: boolean;
    helpLinkColor: string;
  }

  generalMatrix: {
    showCollapseIcon: boolean;
  }

  enableAxis: {
    show: boolean;
    fill: string;
  }

  
  averageLine: {
    show: boolean;
    displayName: string;
    fill: string;
    showDataLabel: boolean;
  }
}