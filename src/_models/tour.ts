import { Trolley } from '../_models/trolley';
import { TrolleyId } from './trolleyid';

export interface Tour {
  nppmTourKey: number;
  tourName: string;
  trolleys: TrolleyId[];
}
