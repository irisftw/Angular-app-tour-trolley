import { TrolleyId } from './trolleyid';
import { Trolley } from './trolley';

export interface ProdLabel {
  nppmProdLabelKey: number;
  nbatchSeq: number;
  nlabelCount: number;
  nlabelMax: number;
  ntraySize: number;
  trolley?: Trolley;
}
