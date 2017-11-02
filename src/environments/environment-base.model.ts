import { EnvironmentType } from './environment.enum';

export abstract class EnvironmentBase {
    abstract type: EnvironmentType;

    abstract server: string;

    abstract basePath: string;
}