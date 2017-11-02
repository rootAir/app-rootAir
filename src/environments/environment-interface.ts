import { EnvironmentType } from './environment.enum';

export interface EnvironmentPreVendaInterface {
    server: string;
    basePath: string;
    type: EnvironmentType;

	versaoMajorFrontEnd: number;
    versaoMinorFrontEnd: number;
}